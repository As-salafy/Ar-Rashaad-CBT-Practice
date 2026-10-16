import { buildQuestionBank } from './question-bank.js'

const schoolLogo = './Ar-Rashaad-removebg-preview-1.png'

const departments = [
  {
    name: 'Science',
    subjects: ['Use of English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Agricultural Science', 'Geography', 'Computer Studies', 'Further Mathematics'],
  },
  {
    name: 'Art',
    subjects: ['Use of English', 'Literature in English', 'Government', 'Christian Religious Studies', 'Islamic Religious Studies', 'History', 'Economics', 'Geography', 'French'],
  },
  {
    name: 'Commercial',
    subjects: ['Use of English', 'Mathematics', 'Economics', 'Commerce', 'Financial Accounting', 'Government', 'Geography', 'Biology'],
  },
]
const builtQuestionBank = buildQuestionBank(departments)
const availableSubjects = [...new Set(departments.flatMap((department) => department.subjects))]
const pdfJsModuleUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.mjs'
const pdfJsWorkerUrl = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.mjs'

const scoreMessages = {
  high: 'Outstanding performance! Keep pushing towards excellence.',
  good: 'Excellent effort! You are making impressive progress.',
  average: 'Good effort! Continue improving.',
  fair: 'Keep practising. You are getting better.',
  low: "Don't give up. Every practice brings improvement.",
}

const adminCredentials = [{ username: 'Admin@Ar-Rashaad', password: 'pass@Ar-Rashaad' }]
const compulsorySubject = 'Use of English'
const defaultExamSettings = {
  practiceEnabled: true,
  mockEnabled: true,
  practiceQuestionCount: 20,
  practiceDuration: 30,
  mockQuestionsPerSubject: 40,
  mockDuration: 120,
}

const legacySampleQuestionIdCeiling = 1040

const readStorage = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch (error) {
    return fallback
  }
}

const writeStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character])

const STORAGE_KEYS = {
  students: 'ar_rashaad_students',
  currentUser: 'ar_rashaad_current_user',
  questions: 'ar_rashaad_questions',
  results: 'ar_rashaad_results',
  settings: 'ar_rashaad_settings',
  admins: 'ar_rashaad_admins',
  examSession: 'ar_rashaad_exam_session',
  questionBankVersion: 'ar_rashaad_question_bank_version',
  appSession: 'ar_rashaad_app_session',
}

const validScreens = ['landing', 'login', 'register', 'forgot-password', 'dashboard', 'admin', 'admin-dashboard', 'exam', 'results', 'history']

const getValidScreen = (screen) => (validScreens.includes(screen) ? screen : 'landing')

const persistSessionState = () => {
  const snapshot = {
    screen: getValidScreen(state.screen),
    screenHistory: Array.isArray(state.screenHistory) ? state.screenHistory.filter((item) => validScreens.includes(item)).slice(-10) : [],
    currentUser: state.currentUser ? { ...state.currentUser } : null,
    adminAuthenticated: Boolean(state.adminAuthenticated),
    exam: state.exam ? { ...state.exam } : null,
    result: state.result ? { ...state.result } : null,
    resultModalOpen: Boolean(state.resultModalOpen),
    practice: { ...state.practice },
  }
  writeStorage(STORAGE_KEYS.appSession, snapshot)
}

const restoreSessionState = () => {
  const persisted = readStorage(STORAGE_KEYS.appSession, null)
  if (!persisted || typeof persisted !== 'object') return

  state.screenHistory = Array.isArray(persisted.screenHistory)
    ? persisted.screenHistory.filter((screen) => validScreens.includes(screen)).slice(-10)
    : []

  const savedUser = persisted.currentUser && typeof persisted.currentUser === 'object' ? persisted.currentUser : null
  state.currentUser = savedUser
    ? state.students.find((student) => student.regNumber === savedUser.regNumber) || null
    : null

  state.adminAuthenticated = Boolean(persisted.adminAuthenticated)
  state.practice = { ...state.practice, ...(persisted.practice || {}) }
  state.result = persisted.result || null
  state.resultModalOpen = Boolean(persisted.resultModalOpen)

  const savedExam = persisted.exam && typeof persisted.exam === 'object'
    ? persisted.exam
    : readStorage(STORAGE_KEYS.examSession, null)
  const restoredScreen = getValidScreen(persisted.screen)
  if (state.adminAuthenticated) {
    state.screen = 'admin-dashboard'
    return
  }

  if (!state.currentUser) {
    state.exam = null
    state.result = null
    state.resultModalOpen = false
    state.screen = ['login', 'register', 'forgot-password', 'admin'].includes(restoredScreen)
      ? restoredScreen
      : 'landing'
    return
  }

  const hasValidExam = savedExam &&
    Array.isArray(savedExam.questions) &&
    savedExam.questions.length > 0 &&
    Number.isInteger(savedExam.currentIndex) &&
    savedExam.currentIndex >= 0 &&
    savedExam.currentIndex < savedExam.questions.length &&
    Array.isArray(savedExam.answers) &&
    savedExam.answers.length === savedExam.questions.length &&
    Array.isArray(savedExam.flagged) &&
    savedExam.flagged.length === savedExam.questions.length &&
    savedExam.questions.every((question) =>
      question &&
      Array.isArray(question.options) &&
      question.options.length === 4 &&
      question.options.every((option) => typeof option === 'string'),
    )

  if (restoredScreen === 'exam' && hasValidExam) {
    state.exam = savedExam
    state.result = null
    state.resultModalOpen = false
    state.screen = 'exam'
    return
  }

  if (restoredScreen === 'results' && hasValidExam && state.result) {
    state.exam = savedExam
    state.screen = 'results'
    return
  }

  state.exam = null
  state.resultModalOpen = false
  if (restoredScreen === 'dashboard' || restoredScreen === 'history') {
    state.screen = restoredScreen
  } else if (['landing', 'login', 'register', 'forgot-password', 'admin'].includes(restoredScreen)) {
    state.screen = 'dashboard'
  } else {
    state.screen = 'dashboard'
  }
}

const getDepartmentSubjects = (departmentName) => {
  const department = departments.find((item) => item.name === departmentName)
  return department ? department.subjects : []
}

const getStudentSubjects = (student) => {
  const availableSubjects = getDepartmentSubjects(student?.department)
  const selectedSubjects = Array.isArray(student?.subjects)
    ? student.subjects.filter((subject) => availableSubjects.includes(subject))
    : []
  const electives = [...new Set(selectedSubjects.filter((subject) => subject !== compulsorySubject))]
  return [compulsorySubject, ...electives].slice(0, 4)
}

const getDefaultStudentSubjects = (student) => [
  compulsorySubject,
  ...getDepartmentSubjects(student.department).filter((subject) => subject !== compulsorySubject).slice(0, 3),
]

const renderRegistrationSubjectOptions = () => getDepartmentSubjects(state.registrationDepartment)
  .filter((subject) => subject !== compulsorySubject)
  .map((subject) => {
    const selected = state.registrationSubjects.includes(subject)
    const disabled = !selected && state.registrationSubjects.length === 3
    return `
      <label class="subject-checkbox">
        <input type="checkbox" name="subjects" value="${escapeHTML(subject)}" ${selected ? 'checked' : ''} ${disabled ? 'disabled' : ''} />
        <span>${escapeHTML(subject)}</span>
      </label>
    `
  }).join('')

const updateRegistrationSubjectSelection = () => {
  const options = document.querySelector('#student-register-form .subject-checkboxes')
  const count = document.querySelector('#student-register-form .subject-selection-count')
  if (options) options.innerHTML = renderRegistrationSubjectOptions()
  if (count) count.textContent = `${state.registrationSubjects.length} of 3 selected`
}

const generateRegistrationNumber = (students) => {
  const highestNumber = students.reduce((highest, student) => {
    const match = student.regNumber?.match(/^ARA-(\d+)$/i)
    return match ? Math.max(highest, Number(match[1])) : highest
  }, 1000)

  return `ARA-${highestNumber + 1}`
}

const shuffle = (arr) => {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const defaultStudent = {
  fullName: 'Junaid Ali',
  regNumber: 'ARA-1001',
  department: 'Science',
  password: '123456',
  createdAt: new Date().toISOString(),
}

const state = {
  screen: 'landing',
  screenHistory: [],
  authMode: 'login',
  adminAuthenticated: false,
  registrationDepartment: 'Science',
  registrationSubjects: [],
  adminStudentSearch: '',
  adminDepartmentFilter: 'All',
  adminSelectedStudentId: '',
  adminQuestionSearch: '',
  adminQuestionDepartment: 'All',
  adminQuestionSubject: 'All',
  adminEditingQuestionId: null,
  currentUser: null,
  students: [],
  exam: null,
  result: null,
  resultModalOpen: false,
  notification: null,
  practice: { department: 'Science', subject: 'Mathematics', count: null, duration: null },
}

let notificationTimeout

const showNotification = (message, type = 'error') => {
  const id = Date.now()
  state.notification = { id, message, type }
  render()
  clearTimeout(notificationTimeout)
  notificationTimeout = setTimeout(() => {
    if (state.notification?.id !== id) return
    state.notification = null
    render()
  }, 7000)
}

const navigateToScreen = (screen, { replaceCurrent = false } = {}) => {
  const validScreen = getValidScreen(screen)
  if (validScreen === state.screen) return

  if (replaceCurrent) {
    if (state.screenHistory[state.screenHistory.length - 1] === validScreen) state.screenHistory.pop()
  } else {
    state.screenHistory.push(state.screen)
  }

  state.screen = validScreen
  persistSessionState()
  render()
}

const goBack = () => {
  const fallbackScreens = {
    login: 'landing',
    register: 'landing',
    'forgot-password': 'login',
    admin: 'landing',
    dashboard: 'landing',
    exam: 'dashboard',
    results: 'dashboard',
    history: 'dashboard',
    'admin-dashboard': 'admin',
  }
  state.screen = state.screenHistory.pop() || fallbackScreens[state.screen] || 'landing'
  render()
}

const renderBackButton = () => '<button class="pill-button back-button" data-action="back" type="button">Back</button>'

const ensureSeedData = () => {
  const students = readStorage(STORAGE_KEYS.students, [])
  const admins = readStorage(STORAGE_KEYS.admins, [])
  const questions = readStorage(STORAGE_KEYS.questions, [])
  const settings = readStorage(STORAGE_KEYS.settings, { theme: 'light', scoreMessages })

  if (!students.length) {
    writeStorage(STORAGE_KEYS.students, [defaultStudent])
  }
  const savedStudents = readStorage(STORAGE_KEYS.students, [])
  let studentsUpdated = false
  savedStudents.forEach((student) => {
    if (getStudentSubjects(student).length !== 4) {
      student.subjects = getDefaultStudentSubjects(student)
      studentsUpdated = true
    } else {
      student.subjects = getStudentSubjects(student)
    }
  })
  if (studentsUpdated || !students.length) writeStorage(STORAGE_KEYS.students, savedStudents)

  const savedAdmins = (Array.isArray(admins) ? admins : []).filter((entry) => entry?.username?.toLowerCase() !== 'admin')
  const configuredAdmin = adminCredentials[0]
  const configuredAdminIndex = savedAdmins.findIndex((entry) =>
    entry?.username?.toLowerCase() === configuredAdmin.username.toLowerCase(),
  )
  if (configuredAdminIndex === -1) savedAdmins.push(configuredAdmin)
  else savedAdmins[configuredAdminIndex] = configuredAdmin
  writeStorage(STORAGE_KEYS.admins, savedAdmins)

  let savedQuestions = Array.isArray(questions) ? questions : []
  let questionBankVersion = readStorage(STORAGE_KEYS.questionBankVersion, 0)
  if (questionBankVersion < 1) {
    savedQuestions = savedQuestions.filter((question) =>
      question && !(Number(question.year) === 2025 && Number(question.id) <= legacySampleQuestionIdCeiling),
    )
    questionBankVersion = 1
  }
  if (questionBankVersion < 2) {
    const existingSourceKeys = new Set(savedQuestions.map((question) => question.sourceKey).filter(Boolean))
    const newPracticeQuestions = builtQuestionBank.filter((question) => !existingSourceKeys.has(question.sourceKey))
    const highestId = savedQuestions.reduce((highest, question) => Math.max(highest, Number(question.id) || 0), 0)
    savedQuestions = [
      ...savedQuestions,
      ...newPracticeQuestions.map((question, index) => ({ ...question, id: highestId + index + 1 })),
    ]
    writeStorage(STORAGE_KEYS.questions, savedQuestions)
    writeStorage(STORAGE_KEYS.questionBankVersion, 2)
  } else if (!Array.isArray(questions)) {
    writeStorage(STORAGE_KEYS.questions, [])
  }

  writeStorage(STORAGE_KEYS.settings, {
    ...settings,
    theme: settings.theme || 'light',
    scoreMessages: settings.scoreMessages || scoreMessages,
    examSettings: { ...defaultExamSettings, ...settings.examSettings },
  })

  state.students = readStorage(STORAGE_KEYS.students, [])
  const savedUser = readStorage(STORAGE_KEYS.currentUser, null)
  state.currentUser = savedUser
    ? state.students.find((student) => student.regNumber === savedUser.regNumber) || savedUser
    : null
  if (state.currentUser) saveCurrentUser()
  restoreSessionState()
}

const getQuestionBank = () => readStorage(STORAGE_KEYS.questions, builtQuestionBank)
const getQuestionOrigin = (question) => {
  if (question.source === 'Original JAMB-style practice (unofficial)') return question.source
  if (question.year) return `${question.year} · ${question.source || 'Imported (authenticity unverified)'}`
  return question.source || 'Origin not recorded'
}
const examEligibleQuestion = (question) => ['A', 'B', 'C', 'D'].includes(question.correctAnswer)

let pdfJsModulePromise
const loadPdfJs = () => {
  if (!pdfJsModulePromise) {
    pdfJsModulePromise = import(pdfJsModuleUrl).then((pdfjs) => {
      pdfjs.GlobalWorkerOptions.workerSrc = pdfJsWorkerUrl
      return pdfjs
    }).catch((error) => {
      pdfJsModulePromise = null
      throw new Error(`Could not load the in-browser PDF reader. Check your internet connection and try again. ${error.message}`)
    })
  }
  return pdfJsModulePromise
}

const extractPdfLines = async (file) => {
  const pdfjs = await loadPdfJs()
  const loadingTask = pdfjs.getDocument({
    data: new Uint8Array(await file.arrayBuffer()),
    disableWorker: true,
    useWorkerFetch: false,
    isEvalSupported: false,
  })
  let pdf
  try {
    pdf = await loadingTask.promise
    const lines = []
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber)
      const pageHeight = page.view[3] - page.view[1]
      const textContent = await page.getTextContent()
      const items = textContent.items
        .filter((item) => typeof item.str === 'string' && item.str.trim() && Array.isArray(item.transform))
        .map((item) => ({ text: item.str.trim(), x: item.transform[4], y: item.transform[5] }))
        .filter((item) => item.y < pageHeight - 28 && item.y > 24)
        .sort((left, right) => right.y - left.y || left.x - right.x)
      const pageLines = []
      items.forEach((item) => {
        let line = pageLines[pageLines.length - 1]
        if (!line || Math.abs(line.y - item.y) > 3) {
          line = { y: item.y, parts: [] }
          pageLines.push(line)
        }
        line.parts.push(item.text)
      })
      lines.push(...pageLines.map((line) => line.parts.join(' ').replace(/\s+/g, ' ').trim()).filter(Boolean))
    }
    if (!lines.length) {
      throw new Error('No selectable text was found. This may be a scanned PDF; use a text-based PDF instead.')
    }
    return lines
  } finally {
    await loadingTask.destroy()
  }
}

const parsePdfQuestions = (lines) => {
  const questions = []
  let currentQuestion = null
  let incompleteCount = 0
  const saveCurrentQuestion = () => {
    if (!currentQuestion) return
    const options = ['A', 'B', 'C', 'D'].map((letter) => currentQuestion.options[letter]?.trim() || '')
    if (currentQuestion.question.trim() && options.every(Boolean)) {
      questions.push({ question: currentQuestion.question.trim(), options })
    } else {
      incompleteCount += 1
    }
  }
  const appendText = (text) => {
    const content = text.trim()
    if (!content || !currentQuestion) return
    if (currentQuestion.activeOption) {
      currentQuestion.options[currentQuestion.activeOption] = [
        currentQuestion.options[currentQuestion.activeOption],
        content,
      ].filter(Boolean).join(' ')
    } else {
      currentQuestion.question = [currentQuestion.question, content].filter(Boolean).join(' ')
    }
  }
  const consumeLine = (line) => {
    const optionMarkers = [...line.matchAll(/(?:^|\s)\(?([A-D])\)?[.)]\s*/gi)]
    if (!optionMarkers.length) {
      appendText(line)
      return
    }
    appendText(line.slice(0, optionMarkers[0].index))
    optionMarkers.forEach((marker, index) => {
      const letter = marker[1].toUpperCase()
      const contentStart = marker.index + marker[0].length
      const contentEnd = optionMarkers[index + 1]?.index ?? line.length
      const content = line.slice(contentStart, contentEnd).trim()
      currentQuestion.activeOption = letter
      currentQuestion.options[letter] = [currentQuestion.options[letter], content].filter(Boolean).join(' ')
    })
  }

  lines.forEach((line) => {
    const questionStart = line.match(/^\s*(?:question\s*)?\(?(\d{1,3})\)?[.)]\s*(.*)$/i)
    if (questionStart) {
      saveCurrentQuestion()
      currentQuestion = { question: '', options: {}, activeOption: '' }
      consumeLine(questionStart[2])
    } else {
      consumeLine(line)
    }
  })
  saveCurrentQuestion()
  return { questions, incompleteCount }
}

const importPdfQuestions = async ({ file, department, subject, year }) => {
  if (!state.adminAuthenticated) {
    showNotification('Sign in as an administrator before importing a PDF question file.')
    return
  }
  if (!(file instanceof File) || (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf')) {
    showNotification('Choose a PDF file to import.')
    return
  }
  if (file.size > 50 * 1024 * 1024) {
    showNotification('The PDF is larger than the 50 MB import limit.')
    return
  }
  if (!departments.some((entry) => entry.name === department && entry.subjects.includes(subject)) ||
    !Number.isInteger(year) || year < 2001 || year > new Date().getFullYear()) {
    showNotification('Choose a valid department, subject, and year from 2001 through the current year.')
    return
  }

  let parsed
  try {
    parsed = parsePdfQuestions(await extractPdfLines(file))
  } catch (error) {
    showNotification(`Could not read this PDF. ${error.message}`)
    return
  }
  if (!parsed.questions.length) {
    showNotification('No complete numbered questions with four A–D options were found. Check that the PDF uses selectable text and numbered questions.')
    return
  }

  const existingQuestions = getQuestionBank()
  const existingSourceKeys = new Set(existingQuestions.map((question) => question.sourceKey).filter(Boolean))
  const uniqueQuestions = parsed.questions.filter((question) => {
    const key = `pdf|${department}|${subject}|${year}|${question.question.toLocaleLowerCase().replace(/\s+/g, ' ')}`
    question.sourceKey = key
    if (existingSourceKeys.has(key)) return false
    existingSourceKeys.add(key)
    return true
  })
  if (!uniqueQuestions.length) {
    showNotification('This PDF contains questions that are already in the selected department, subject, and year.')
    return
  }

  const highestId = existingQuestions.reduce((highest, question) => Math.max(highest, Number(question.id) || 0), 0)
  const additions = uniqueQuestions.map((question, index) => ({
    ...question,
    id: highestId + index + 1,
    department,
    subject,
    year,
    correctAnswer: '',
    explanation: '',
    difficulty: 'Medium',
    source: 'PDF import (awaiting answer key)',
  }))
  try {
    writeStorage(STORAGE_KEYS.questions, [...existingQuestions, ...additions])
  } catch (error) {
    showNotification(`Could not save imported questions. Check available browser storage and try again. ${error.message}`)
    return
  }

  const skipped = parsed.incompleteCount
  showNotification(
    `${additions.length} question${additions.length === 1 ? '' : 's'} imported to ${department} · ${subject} · ${year}. ${skipped ? `${skipped} incomplete question${skipped === 1 ? ' was' : 's were'} skipped. ` : ''}Imported questions need an answer key before they can appear in student exams.`,
    'success',
  )
}

const validateImportedQuestion = (question, index) => {
  const prefix = `Question ${index + 1}`
  if (!question || typeof question !== 'object' || Array.isArray(question)) {
    throw new Error(`${prefix} must be a JSON object.`)
  }
  const { department, subject, question: questionText, options, correctAnswer, year } = question
  if (!departments.some((entry) => entry.name === department && entry.subjects.includes(subject))) {
    throw new Error(`${prefix} has an invalid department or subject.`)
  }
  if (typeof questionText !== 'string' || !questionText.trim()) {
    throw new Error(`${prefix} is missing its question text.`)
  }
  if (!Array.isArray(options) || options.length !== 4 || options.some((option) => typeof option !== 'string' || !option.trim())) {
    throw new Error(`${prefix} must have exactly four non-empty string options.`)
  }
  const answer = typeof correctAnswer === 'string' ? correctAnswer.trim().toUpperCase() : ''
  if (!['A', 'B', 'C', 'D'].includes(answer)) {
    throw new Error(`${prefix} must have a correctAnswer of A, B, C, or D.`)
  }
  const currentYear = new Date().getFullYear()
  if (!Number.isInteger(Number(year)) || Number(year) < 2001 || Number(year) > currentYear) {
    throw new Error(`${prefix} must have a year between 2001 and ${currentYear}.`)
  }
  return {
    department,
    subject,
    question: questionText.trim(),
    options: options.map((option) => option.trim()),
    correctAnswer: answer,
    explanation: typeof question.explanation === 'string' ? question.explanation.trim() : '',
    difficulty: ['Easy', 'Medium', 'Hard'].includes(question.difficulty) ? question.difficulty : 'Medium',
    year: Number(year),
  }
}

const importQuestionBank = async (file, mode) => {
  let text
  try {
    text = await file.text()
  } catch {
    showNotification('The selected question file could not be read. Please try another JSON file.')
    return
  }
  if (!state.adminAuthenticated) {
    showNotification('Administrator access expired before the question bank could be imported. Please sign in and try again.')
    return
  }

  let parsed
  try {
    parsed = JSON.parse(text)
  } catch (error) {
    showNotification(`Invalid JSON file: ${error.message}`)
    return
  }

  const records = Array.isArray(parsed) ? parsed : parsed?.questions
  if (!Array.isArray(records) || !records.length) {
    showNotification('The JSON file must contain a non-empty array of questions, either directly or in a "questions" property.')
    return
  }

  let importedQuestions
  try {
    importedQuestions = records.map(validateImportedQuestion)
  } catch (error) {
    showNotification(error.message)
    return
  }

  const currentQuestions = getQuestionBank()
  const retainedQuestions = mode === 'merge' ? currentQuestions : builtQuestionBank
  const highestId = retainedQuestions.reduce((highest, question) => Math.max(highest, Number(question.id) || 0), 0)
  const questionsToSave = [
    ...retainedQuestions,
    ...importedQuestions.map((question, index) => ({
      ...question,
      id: highestId + index + 1,
      source: 'Imported (authenticity unverified)',
    })),
  ]

  try {
    writeStorage(STORAGE_KEYS.questions, questionsToSave)
  } catch (error) {
    showNotification(`Could not save the question bank. Check available browser storage and try again. ${error.message}`)
    return
  }

  showNotification(`${importedQuestions.length} question${importedQuestions.length === 1 ? '' : 's'} imported (${mode === 'merge' ? 'merged' : 'replaced imported questions'}).`, 'success')
}
const getExamSettings = () => ({
  ...defaultExamSettings,
  ...readStorage(STORAGE_KEYS.settings, {}).examSettings,
})

const saveExamSession = () => {
  if (!state.exam) {
    writeStorage(STORAGE_KEYS.examSession, null)
    return
  }
  writeStorage(STORAGE_KEYS.examSession, state.exam)
}

const getStudents = () => readStorage(STORAGE_KEYS.students, [])
const getResults = () => readStorage(STORAGE_KEYS.results, [])
const normalizeStudentName = (name) => name.trim().replace(/\s+/g, ' ').toLocaleLowerCase()

const saveCurrentUser = () => {
  if (state.currentUser) {
    writeStorage(STORAGE_KEYS.currentUser, state.currentUser)
  } else {
    writeStorage(STORAGE_KEYS.currentUser, null)
  }
}

const formatTime = (seconds) => {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')
  return `${hrs}:${mins}:${secs}`
}

const buildExamQuestions = (options = {}) => {
  const bank = getQuestionBank()
  const department = state.currentUser?.department || options.department || state.practice.department || 'Science'
  const departmentSubjects = state.currentUser
    ? getStudentSubjects(state.currentUser)
    : getDepartmentSubjects(department)
  const requestedSubject = options.subject || state.practice.subject
  const subject = departmentSubjects.includes(requestedSubject) ? requestedSubject : departmentSubjects[0]
  const count = Number(options.count || state.practice.count || getExamSettings().practiceQuestionCount)

  if (options.mode === 'full') {
    const subjects = [compulsorySubject, ...departmentSubjects.filter((entry) => entry !== compulsorySubject).slice(0, 3)]
    const perSubject = getExamSettings().mockQuestionsPerSubject
    return shuffle(subjects.flatMap((entry) => bank.filter((q) =>
      q.subject === entry && q.department === department && examEligibleQuestion(q),
    ).slice(0, perSubject)))
  }

  const filtered = bank.filter((q) =>
    q.subject === subject && q.department === department && departmentSubjects.includes(q.subject) && examEligibleQuestion(q),
  )
  return shuffle(filtered).slice(0, Math.min(count, filtered.length))
}

const createExam = (mode = 'Practice') => {
  if (!state.currentUser) {
    navigateToScreen('landing')
    return
  }

  const department = state.currentUser.department
  const examSettings = getExamSettings()
  const isMock = mode === 'Full JAMB Mock'
  if ((isMock && !examSettings.mockEnabled) || (!isMock && !examSettings.practiceEnabled)) {
    showNotification(`${isMock ? 'Full JAMB mocks' : 'Practice tests'} are currently disabled by the administrator.`)
    return
  }
  const departmentSubjects = getStudentSubjects(state.currentUser)
  const subject = departmentSubjects.includes(state.practice.subject) ? state.practice.subject : departmentSubjects[0]
  state.practice.department = department
  state.practice.subject = subject
  const count = Number(state.practice.count) || examSettings.practiceQuestionCount
  const duration = isMock
    ? examSettings.mockDuration
    : Number(state.practice.duration) || examSettings.practiceDuration

  const questions = mode === 'Full JAMB Mock' ? buildExamQuestions({ mode: 'full' }) : buildExamQuestions({ department, subject, count })
  if (!questions.length) {
    showNotification('No practice questions are available for this subject yet. Ask the administrator to add questions for it.')
    return
  }

  state.exam = {
    id: Date.now(),
    mode,
    subject: isMock ? 'Full JAMB Practice' : subject,
    department,
    currentIndex: 0,
    questions,
    answers: Array(questions.length).fill(''),
    flagged: Array(questions.length).fill(false),
    startedAt: Date.now(),
    expiresAt: Date.now() + duration * 60 * 1000,
    timeLeft: duration * 60,
    durationMinutes: duration,
  }

  saveExamSession()
  state.result = null
  navigateToScreen('exam')
}

const getScoreMessage = (score, total) => {
  const percentage = total ? (score / total) * 100 : 0
  if (percentage >= 75) return scoreMessages.high
  if (percentage >= 60) return scoreMessages.good
  if (percentage >= 45) return scoreMessages.average
  if (percentage >= 30) return scoreMessages.fair
  return scoreMessages.low
}

const calculateResult = () => {
  if (!state.exam) return null

  const { questions, answers } = state.exam
  const answered = answers.filter((answer) => answer).length
  const correct = questions.reduce((total, question, index) => total + (answers[index] === question.correctAnswer ? 1 : 0), 0)
  const wrong = answered - correct
  const unanswered = questions.length - answered

  const subjects = Array.from(new Set(questions.map((q) => q.subject)))
  const subjectBreakdown = subjects.map((subjectName) => {
    const subjectQuestions = questions.filter((q) => q.subject === subjectName)
    const subjectCorrect = subjectQuestions.reduce((total, q, idx) => {
      const qIndex = questions.findIndex((item) => item.id === q.id)
      return total + (answers[qIndex] === q.correctAnswer ? 1 : 0)
    }, 0)
    const score = subjectQuestions.length ? (subjectCorrect / subjectQuestions.length) * 100 : 0
    return { subject: subjectName, percentage: Math.round(score), correct: subjectCorrect, total: subjectQuestions.length }
  })

  const totalScore = subjectBreakdown.reduce((sum, item) => sum + item.percentage, 0)
  const percentage = subjectBreakdown.length ? (totalScore / (subjectBreakdown.length * 100)) * 100 : 0
  const finalScore = Math.round((totalScore / (subjectBreakdown.length || 1)) * 4)

  return {
    totalQuestions: questions.length,
    answered,
    correct,
    wrong,
    unanswered,
    finalScore,
    percentage: Math.round(percentage),
    scoreMessage: getScoreMessage(finalScore, 400),
    subjectBreakdown,
    date: new Date().toLocaleDateString(),
  }
}

const saveResultRecord = (result) => {
  const results = getResults()
  results.unshift({
    id: Date.now(),
    student: state.currentUser,
    activity: state.exam?.mode || 'Practice',
    subject: state.exam?.subject || '',
    subjectBreakdown: result.subjectBreakdown,
    score: result.finalScore,
    percentage: result.percentage,
    correct: result.correct,
    wrong: result.wrong,
    unanswered: result.unanswered,
    totalQuestions: result.totalQuestions,
    date: new Date().toISOString(),
    department: state.exam?.department || state.currentUser?.department || 'Science',
  })
  writeStorage(STORAGE_KEYS.results, results)
}

const submitExam = () => {
  if (!state.exam) return

  state.result = calculateResult()
  state.resultModalOpen = true
  saveResultRecord(state.result)
  navigateToScreen('results', { replaceCurrent: true })
}

const renderLanding = () => `
  <div class="page landing-page">
    <header class="topbar topbar-landing">
      <div class="brand-block">
        <img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" />
      </div>
      <nav class="landing-nav">
        <button class="nav-link" data-action="screen" data-target="landing">Home</button>
        <button class="nav-link" data-action="screen" data-target="dashboard">Student Portal</button>
        <button class="nav-link" data-action="screen" data-target="admin">Admin Login</button>
      </nav>
    </header>

    <main class="hero-shell">
      <section class="hero-copy">
        <p class="eyebrow">Practice Smart. Build Confidence. Achieve Your Goal.</p>
        <h1>AR-RASHAAD ACADEMY</h1>
          <h2>JAMB CBT PRACTICE PORTAL</h2>
          <p class="subtext">Welcome to Ar-Rashaad Academy's JAMB CBT Practice Portal. Practise with original, unofficial JAMB-style questions, track your performance and prepare confidently for your UTME.</p>
        <div class="cta-row">
          <button class="btn btn-primary" data-action="screen" data-target="dashboard">Get Started</button>
          <button class="btn btn-secondary" data-action="screen" data-target="login">Student Login</button>
          <button class="btn btn-ghost" data-action="screen" data-target="register">Student Registration</button>
        </div>
      </section>

      <aside class="hero-panel">
        <div class="mini-card">
          <span class="mini-title">Practice Focus</span>
          <h3>Science • Arts • Commercial</h3>
          <small>These are original, unofficial practice questions—not official JAMB questions.</small>
          <ul>
            <li>${availableSubjects.length} subjects · ${getQuestionBank().length} department-specific questions loaded</li>
            <li>Timed CBT practice</li>
            <li>Instant score summary</li>
          </ul>
        </div>
      </aside>
    </main>

    <section class="feature-block">
      <div class="section-header"><p>Why Practice With Ar-Rashaad Academy?</p></div>
      <div class="feature-grid">
        ${['Realistic CBT environment', 'Science, Arts & Commercial subjects', 'Timed mock examinations', 'Instant results', 'Detailed explanations', 'Performance tracking', 'Weak topic analysis', 'Mobile-friendly', 'Academy-managed question bank'].map((feature) => `<div class="feature-item">${feature}</div>`).join('')}
      </div>
    </section>
  </div>
`

const renderAuthLayout = (type) => `
  <div class="page landing-page">
    <header class="topbar topbar-landing">
      <div class="brand-block">
        <img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" />
      </div>
      ${renderBackButton()}
      <nav class="landing-nav">
        <button class="nav-link" data-action="screen" data-target="landing">Home</button>
        <button class="nav-link" data-action="screen" data-target="dashboard">Student Portal</button>
      </nav>
    </header>

    <main class="auth-shell">
      <div class="auth-card">
        <div class="auth-header">
          <div>
            <p class="eyebrow">AR-RASHAAD ACADEMY</p>
            <h2>${type === 'login' ? 'Student Login' : 'Student Registration'}</h2>
          </div>
        </div>

        ${type === 'login' ? `
          <form id="student-login-form" class="auth-form" novalidate>
            <label>
              Registration Number
              <input type="text" name="regNumber" placeholder="ARA-1001" required />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="Enter your password" required />
            </label>
            <button class="btn btn-primary" type="submit">Login</button>
            <button class="btn btn-secondary" type="button" data-action="screen" data-target="register">Create account</button>
            <button class="text-button" type="button" data-action="screen" data-target="forgot-password">Forgot password?</button>
          </form>
        ` : `
          <form id="student-register-form" class="auth-form" novalidate>
            <div class="auth-grid">
              <label>
                Full Name
                <input type="text" name="fullName" required />
              </label>
              <p class="registration-note">Your registration number will be generated after registration.</p>
              <label>
                Department
                <select name="department" data-field="registration-department">
                  ${departments.map((dept) => `<option value="${dept.name}" ${dept.name === state.registrationDepartment ? 'selected' : ''}>${dept.name}</option>`).join('')}
                </select>
              </label>
              <fieldset class="subject-selection">
                <legend>Choose 3 additional subjects</legend>
                <p>Use of English is compulsory. Select exactly three other subjects for your practice and JAMB mock.</p>
                <div class="subject-checkboxes">
                  ${renderRegistrationSubjectOptions()}
                </div>
                <p class="subject-selection-count">${state.registrationSubjects.length} of 3 selected</p>
              </fieldset>
              <div class="compulsory-subject"><strong>Compulsory subject:</strong> ${compulsorySubject}</div>
              <label>
                Password
                <input type="password" name="password" required />
              </label>
              <label>
                Confirm Password
                <input type="password" name="confirmPassword" required />
              </label>
            </div>
            <button class="btn btn-primary" type="submit">Register</button>
            <button class="btn btn-secondary" type="button" data-action="screen" data-target="login">Already registered</button>
          </form>
        `}
      </div>
    </main>
  </div>
`

const renderPasswordRecovery = () => `
  <div class="page landing-page">
    <header class="topbar topbar-landing">
      <div class="brand-block">
        <img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" />
      </div>
      ${renderBackButton()}
      <nav class="landing-nav">
        <button class="nav-link" data-action="screen" data-target="landing">Home</button>
        <button class="nav-link" data-action="screen" data-target="dashboard">Student Portal</button>
      </nav>
    </header>
    <main class="auth-shell">
      <div class="auth-card admin-card">
        <div class="auth-header">
          <div>
            <p class="eyebrow">ACCOUNT RECOVERY</p>
            <h2>Reset your password</h2>
            <p class="recovery-note">Enter the registration number and full name on your account, then choose a new password.</p>
          </div>
        </div>
        <form id="student-recovery-form" class="auth-form" novalidate>
          <label>
            Registration Number
            <input type="text" name="regNumber" placeholder="ARA-1001" required />
          </label>
          <label>
            Full Name
            <input type="text" name="fullName" required />
          </label>
          <label>
            New Password
            <input type="password" name="password" required />
          </label>
          <label>
            Confirm New Password
            <input type="password" name="confirmPassword" required />
          </label>
          <button class="btn btn-primary" type="submit">Reset Password</button>
          <button class="btn btn-secondary" type="button" data-action="screen" data-target="login">Return to Login</button>
        </form>
      </div>
    </main>
  </div>
`

const renderAdminLogin = () => `
  <div class="page landing-page">
    <header class="topbar topbar-landing">
      <div class="brand-block">
        <img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" />
      </div>
      ${renderBackButton()}
      <nav class="landing-nav">
        <button class="nav-link" data-action="screen" data-target="landing">Home</button>
        <button class="nav-link" data-action="screen" data-target="dashboard">Student Portal</button>
      </nav>
    </header>

    <main class="auth-shell">
      <div class="auth-card admin-card">
        <div class="auth-header">
          <div>
            <p class="eyebrow">ADMIN ACCESS</p>
            <h2>Administrator Login</h2>
          </div>
        </div>

        <form id="admin-login-form" class="auth-form" novalidate>
          <label>
            Username
            <input type="text" name="username" placeholder="Admin@Ar-Rashaad" required />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="Enter admin password" required />
          </label>
          <button class="btn btn-primary" type="submit">Open Admin Dashboard</button>
        </form>
      </div>
    </main>
  </div>
`

const renderDashboard = () => {
  const user = state.currentUser
  const examSettings = getExamSettings()
  const durationOptions = [...new Set([10, 20, 30, 45, 60, 120, examSettings.practiceDuration, state.practice.duration])]
    .filter((duration) => duration >= 1 && duration <= 300)
    .sort((left, right) => left - right)
  state.practice.department = user.department
  const departmentSubjects = getStudentSubjects(user)
  if (!departmentSubjects.includes(state.practice.subject)) {
    state.practice.subject = departmentSubjects.find((subject) => subject !== compulsorySubject) || compulsorySubject
  }
  const subjectOptions = departmentSubjects
  const availableQuestionCount = getQuestionBank().filter((question) =>
    question.department === user.department &&
    question.subject === state.practice.subject &&
    examEligibleQuestion(question),
  ).length
  const pendingAnswerCount = getQuestionBank().filter((question) =>
    question.department === user.department &&
    question.subject === state.practice.subject &&
    !examEligibleQuestion(question),
  ).length
  const maximumPracticeCount = Math.min(40, availableQuestionCount)
  const selectedQuestionCount = Math.min(
    Number(state.practice.count) || examSettings.practiceQuestionCount,
    maximumPracticeCount,
  )
  state.practice.count = selectedQuestionCount
  const questionCountOptions = [...new Set([
    5, 10, 15, 20, 30, 40, examSettings.practiceQuestionCount, selectedQuestionCount, maximumPracticeCount,
  ])].filter((count) => count >= 1 && count <= maximumPracticeCount).sort((left, right) => left - right)

  return `
    <div class="page dashboard-page">
      <header class="topbar">
        <div class="brand-block">
          <img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" />
        </div>
        <div class="topbar-actions">
          ${renderBackButton()}
          <button class="pill-button" data-action="logout">Logout</button>
        </div>
      </header>

      <main class="dashboard-main">
        <section class="welcome-panel">
          <div>
            <p class="eyebrow">Welcome back, ${user.fullName}!</p>
            <h2>Department: ${user.department}</h2>
            <p>Registration Number: ${user.regNumber}</p>
          </div>
          <div class="stat-grid">
            <div class="mini-stat"><span>Total Exams</span><strong>${getResults().filter((entry) => entry.student.regNumber === user.regNumber).length}</strong></div>
            <div class="mini-stat"><span>Average Score</span><strong>${getAverageScore(user.regNumber)}</strong></div>
            <div class="mini-stat"><span>Best Score</span><strong>${getBestScore(user.regNumber)}</strong></div>
            <div class="mini-stat"><span>Target</span><strong>300+</strong></div>
          </div>
        </section>

        <div class="dashboard-grid">
          ${[
            ['START FULL JAMB MOCK', examSettings.mockEnabled],
            ['START PRACTICE TEST', examSettings.practiceEnabled],
            ['VIEW MY RESULTS', true],
            ['SUBJECT PRACTICE', examSettings.practiceEnabled],
            ['EXAMINATION HISTORY', true],
          ].map(([card, enabled]) => `<button class="dashboard-card" data-action="dashboard-card" data-card="${card}" type="button" ${enabled ? '' : 'disabled'}>${card}${enabled ? '' : ' (Unavailable)'}</button>`).join('')}
        </div>

        <section class="practice-panel">
          <div class="practice-form-head"><h3>Practice Setup</h3></div>
          <p>Questions are original JAMB-style practice and are not official past questions.</p>
          <p>${availableQuestionCount} answered questions are available for ${escapeHTML(state.practice.subject)}${pendingAnswerCount ? `; ${pendingAnswerCount} imported questions are waiting for an answer key` : ''}. Mock exams use up to ${examSettings.mockQuestionsPerSubject} answered questions per selected subject.</p>
          <div class="practice-form-grid">
            <label>Department
              <input type="text" value="${user.department}" readonly />
            </label>
            <label>Subject
              <select data-field="subject">
                ${subjectOptions.map((subject) => `<option value="${subject}" ${subject === state.practice.subject ? 'selected' : ''}>${subject}</option>`).join('')}
              </select>
            </label>
            <label>Question Quantity
              <select data-field="count">
                ${questionCountOptions.map((count) => `<option value="${count}" ${selectedQuestionCount === count ? 'selected' : ''}>${count}</option>`).join('')}
              </select>
            </label>
            <label>Duration (mins)
              <select data-field="duration">
                ${durationOptions.map((mins) => `<option value="${mins}" ${Number(state.practice.duration || examSettings.practiceDuration) === mins ? 'selected' : ''}>${mins}</option>`).join('')}
              </select>
            </label>
          </div>
          <div class="cta-row compact-row">
            <button class="btn btn-primary" data-action="practice" data-mode="Quick Practice">Start Practice</button>
            <button class="btn btn-secondary" data-action="practice" data-mode="Full JAMB Mock">Full Mock</button>
          </div>
        </section>
      </main>
    </div>
  `
}

const getAverageScore = (regNumber) => {
  const entries = getResults().filter((entry) => entry.student.regNumber === regNumber)
  if (!entries.length) return '0'
  return String(Math.round(entries.reduce((sum, item) => sum + item.score, 0) / entries.length))
}

const getBestScore = (regNumber) => {
  const entries = getResults().filter((entry) => entry.student.regNumber === regNumber)
  if (!entries.length) return '0'
  return String(Math.max(...entries.map((entry) => entry.score)))
}

const renderExam = () => {
  if (!state.exam) return '<div></div>'
  const currentQuestion = state.exam.questions[state.exam.currentIndex]
  const timerClass = state.exam.timeLeft <= 300 ? 'timer-warning' : ''

  return `
    <div class="page exam-page">
      <header class="exam-topbar">
        ${renderBackButton()}
        <div>
          <p class="brand-name exam-brand">AR-RASHAAD ACADEMY</p>
          <small>${state.exam.subject}</small>
        </div>
        <div class="exam-meta">
          <span>${state.currentUser.fullName}</span>
          <span class="timer ${timerClass}">TIME REMAINING: ${formatTime(state.exam.timeLeft)}</span>
        </div>
      </header>

      <main class="exam-main">
        <aside class="question-nav">
          <div class="nav-title">Question Navigator</div>
          <div class="question-grid">
            ${state.exam.questions.map((question, index) => {
              const status = ['nav-question']
              if (state.exam.currentIndex === index) status.push('current')
              if (state.exam.flagged[index]) status.push('flagged')
              else if (state.exam.answers[index]) status.push('answered')
              return `<button class="${status.join(' ')}" data-action="navigate-to" data-index="${index}" type="button">${index + 1}</button>`
            }).join('')}
          </div>
        </aside>

        <section class="question-panel">
          <p class="question-source">${escapeHTML(getQuestionOrigin(currentQuestion))}</p>
          <div class="question-topline"><span>Question ${state.exam.currentIndex + 1} of ${state.exam.questions.length}</span><span>${currentQuestion.subject || state.exam.subject}</span></div>
          <h3>${escapeHTML(currentQuestion.question)}</h3>
          <div class="options-list">
            ${['A', 'B', 'C', 'D'].map((optionKey, index) => `
              <button class="answer-option ${state.exam.answers[state.exam.currentIndex] === optionKey ? 'selected' : ''}" data-action="answer" data-option="${optionKey}" type="button">
                <span class="answer-label">${optionKey}</span>
                <span>${escapeHTML(currentQuestion.options[index].replace(/^[A-D]\.?\s*/, ''))}</span>
              </button>
            `).join('')}
          </div>
          <div class="exam-actions">
            <button class="btn btn-secondary" data-action="move" data-step="-1">Previous</button>
            <button class="btn btn-secondary" data-action="move" data-step="1">Next</button>
            <button class="btn btn-ghost" data-action="flag">Mark for Review</button>
            <button class="btn btn-ghost" data-action="clear-answer">Clear Answer</button>
            <button class="btn btn-primary" data-action="submit">Submit Exam</button>
          </div>
        </section>
      </main>
    </div>
  `
}

const renderResults = () => {
  if (!state.result) {
    return `
      <div class="page results-page">
        <header class="topbar">
          <div class="brand-block"><img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" /></div>
          <div class="topbar-actions">${renderBackButton()}</div>
        </header>
        <main class="results-shell">
          <section class="results-panel">
            <h2>No result to display</h2>
            <p>Complete a practice test or mock examination to see your score and detailed review.</p>
            <button class="btn btn-primary" data-action="screen" data-target="dashboard" type="button">Go to Dashboard</button>
            <button class="btn btn-secondary" data-action="screen" data-target="history" type="button">View Exam History</button>
          </section>
        </main>
      </div>
    `
  }

  return `
    <div class="page results-page">
      <header class="topbar">
        <div class="brand-block">
          <img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" />
        </div>
        <div class="topbar-actions">${renderBackButton()}</div>
      </header>

      <main class="results-shell">
        <section class="summary-stat-grid">
          <div class="summary-card"><span>Score</span><strong>${state.result.finalScore}/400</strong></div>
          <div class="summary-card"><span>Percentage</span><strong>${state.result.percentage}%</strong></div>
          <div class="summary-card"><span>Correct</span><strong>${state.result.correct}</strong></div>
          <div class="summary-card"><span>Wrong</span><strong>${state.result.wrong}</strong></div>
        </section>

        ${state.resultModalOpen ? `
          <div class="score-modal visible">
            <div class="score-modal-card">
              <div class="result-badge">Examination Completed!</div>
              <h2>Congratulations, ${state.currentUser.fullName}!</h2>
              <p>Your performance summary is ready.</p>
              <div class="result-ring-wrap">
                <div class="result-ring" style="--score:${Math.min(state.result.finalScore / 4, 100)}%">
                  <span>${state.result.finalScore}<small>/400</small></span>
                </div>
              </div>
              <p class="score-note">${state.result.scoreMessage}</p>
              <div class="modal-actions">
                <button class="btn btn-primary" data-action="result-action" data-target="detail">View Detailed Result</button>
                <button class="btn btn-secondary" data-action="result-action" data-target="retake">Retake Exam</button>
                <button class="btn btn-ghost" data-action="result-action" data-target="dashboard">Back to Dashboard</button>
              </div>
            </div>
          </div>
        ` : ''}

        <section class="results-body">
          <div class="results-panel">
            <h3>Subject Performance</h3>
            ${state.result.subjectBreakdown.map((item) => `
              <div class="subject-meter">
                <div class="subject-head"><span>${item.subject}</span><strong>${item.percentage}%</strong></div>
                <div class="meter-track"><span style="width:${item.percentage}%"></span></div>
              </div>
            `).join('')}
          </div>

          <div class="results-panel">
            <h3>Answer Review</h3>
            ${state.exam.questions.map((question, index) => {
              const selected = state.exam.answers[index]
              const safeSelected = selected || 'No answer'
              const isCorrect = selected === question.correctAnswer
              const statusClass = !selected ? 'review-neutral' : isCorrect ? 'review-correct' : 'review-wrong'
              return `
                <div class="review-item ${statusClass}">
                  <p><strong>Question ${index + 1}</strong></p>
                  <p><strong>Source:</strong> ${escapeHTML(getQuestionOrigin(question))}</p>
                  <p>${escapeHTML(question.question)}</p>
                  <p><strong>Your answer:</strong> ${safeSelected}</p>
                  <p><strong>Correct answer:</strong> ${question.correctAnswer}</p>
                  <p><strong>Explanation:</strong> ${escapeHTML(question.explanation)}</p>
                </div>
              `
            }).join('')}
          </div>
        </section>
      </main>
    </div>
  `
}

const renderHistory = () => {
  const regNumber = state.currentUser?.regNumber
  const results = getResults().filter((entry) => entry.student?.regNumber === regNumber)

  return `
    <div class="page results-page">
      <header class="topbar">
        <div class="brand-block">
          <img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" />
        </div>
        <div class="topbar-actions">
          ${renderBackButton()}
          <button class="pill-button" data-action="screen" data-target="dashboard" type="button">Dashboard</button>
          <button class="pill-button" data-action="logout" type="button">Logout</button>
        </div>
      </header>

      <main class="results-shell">
        <section class="results-panel">
          <h2>Examination History</h2>
          <p>Practice and mock examination results for ${escapeHTML(state.currentUser?.fullName || 'this student')}.</p>
          ${results.length ? `
            <div class="student-history-list">
              ${results.map((entry) => `
                <article class="student-history-item">
                  <div class="student-history-heading">
                    <h3>${escapeHTML(entry.activity || 'Practice test')}${entry.subject ? ` — ${escapeHTML(entry.subject)}` : ''}</h3>
                    <time>${escapeHTML(entry.date ? new Date(entry.date).toLocaleString() : 'Date unavailable')}</time>
                  </div>
                  <div class="student-history-stats">
                    <span><strong>Score</strong> ${escapeHTML(entry.score ?? '—')}/400</span>
                    <span><strong>Percentage</strong> ${escapeHTML(entry.percentage ?? '—')}%</span>
                    <span><strong>Correct</strong> ${escapeHTML(entry.correct ?? '—')} / ${escapeHTML(entry.totalQuestions ?? '—')}</span>
                    <span><strong>Wrong</strong> ${escapeHTML(entry.wrong ?? '—')}</span>
                  </div>
                </article>
              `).join('')}
            </div>
          ` : `
            <div class="history-empty">
              <p>You have not completed any practice tests or mock examinations yet.</p>
              <button class="btn btn-primary" data-action="screen" data-target="dashboard" type="button">Start Practising</button>
            </div>
          `}
        </section>
      </main>
    </div>
  `
}

const getStudentActivity = (student) => getResults()
  .filter((result) => result.student?.regNumber === student.regNumber)
  .sort((left, right) => new Date(right.date || 0) - new Date(left.date || 0))

const renderAdmin = () => {
  const allStudents = getStudents()
  const allResults = getResults()
  const allQuestions = getQuestionBank()
  const questionYears = allQuestions
    .filter((question) => question.year !== null && question.year !== undefined)
    .map((question) => Number(question.year))
    .filter(Number.isInteger)
  const questionYearRange = questionYears.reduce((range, year) => ({
    min: Math.min(range.min, year),
    max: Math.max(range.max, year),
  }), { min: Infinity, max: -Infinity })
  const questionYearLabel = questionYears.length ? `${questionYearRange.min}–${questionYearRange.max}` : ''
  const examSettings = getExamSettings()
  const totalCompleted = allResults.length
  const average = totalCompleted
    ? Math.round(allResults.reduce((sum, item) => sum + Number(item.score || 0), 0) / totalCompleted)
    : 0
  const selectedStudent = allStudents.find((student) => student.regNumber === state.adminSelectedStudentId)
  const selectedStudentActivity = selectedStudent ? getStudentActivity(selectedStudent) : []
  const filteredStudents = allStudents.filter((student) => {
    const matchesSearch = `${student.fullName} ${student.regNumber}`.toLowerCase().includes(state.adminStudentSearch.toLowerCase())
    return matchesSearch && (state.adminDepartmentFilter === 'All' || student.department === state.adminDepartmentFilter)
  })
  const departmentsForFilter = ['All', ...departments.map((department) => department.name)]
  const insights = allResults.flatMap((result) => {
    if (Array.isArray(result.subjectBreakdown)) {
      return result.subjectBreakdown.map((item) => ({ subject: item.subject, percentage: Number(item.percentage || 0) }))
    }
    return result.subject && result.subject !== 'Full JAMB Practice'
      ? [{ subject: result.subject, percentage: Number(result.percentage || 0) }]
      : []
  })
  const subjectAverages = [...new Set(insights.map((item) => item.subject))].map((subject) => {
    const records = insights.filter((item) => item.subject === subject)
    return { subject, average: Math.round(records.reduce((sum, item) => sum + item.percentage, 0) / records.length) }
  }).sort((left, right) => left.average - right.average)
  const scoreTrend = [...allResults]
    .sort((left, right) => new Date(left.date || 0) - new Date(right.date || 0))
    .slice(-10)
  const studentsNeedingSupport = allStudents.map((student) => {
    const activities = getStudentActivity(student)
    const studentAverage = activities.length
      ? Math.round(activities.reduce((sum, entry) => sum + Number(entry.score || 0), 0) / activities.length)
      : null
    return { student, average: studentAverage }
  }).filter((entry) => entry.average === null || entry.average < 180)

  const activityRows = allResults.map((result) => {
    const student = result.student || {}
    return `
      <tr>
        <td data-label="Student">${escapeHTML(student.fullName || 'Unknown student')}</td>
        <td data-label="Registration Number">${escapeHTML(student.regNumber || '—')}</td>
        <td data-label="Department">${escapeHTML(result.department || student.department || '—')}</td>
        <td data-label="Activity">${escapeHTML(result.activity || result.subject || 'Practice test')}${result.subject && result.activity ? ` — ${escapeHTML(result.subject)}` : ''}</td>
        <td data-label="Date">${escapeHTML(result.date ? new Date(result.date).toLocaleString() : '—')}</td>
        <td data-label="Score">${escapeHTML(result.score ?? '—')}/400</td>
        <td data-label="Percentage">${escapeHTML(result.percentage ?? '—')}%</td>
        <td data-label="Correct / Total">${escapeHTML(result.correct ?? '—')} / ${escapeHTML(result.totalQuestions ?? '—')}</td>
      </tr>
    `
  })
  allStudents.filter((student) => !allResults.some((result) => result.student?.regNumber === student.regNumber))
    .forEach((student) => activityRows.push(`
      <tr>
        <td data-label="Student">${escapeHTML(student.fullName || 'Unknown student')}</td>
        <td data-label="Registration Number">${escapeHTML(student.regNumber || '—')}</td>
        <td data-label="Department">${escapeHTML(student.department || '—')}</td>
        <td data-label="Activity">No activities recorded yet</td><td data-label="Date">—</td>
        <td data-label="Score">—</td><td data-label="Percentage">—</td><td data-label="Correct / Total">—</td>
      </tr>
    `))

  const questionDepartment = state.adminQuestionDepartment
  const availableQuestionSubjects = questionDepartment === 'All'
    ? [...new Set(departments.flatMap((department) => department.subjects))]
    : getDepartmentSubjects(questionDepartment)
  const filteredQuestions = allQuestions.filter((question) =>
    (questionDepartment === 'All' || question.department === questionDepartment) &&
    (state.adminQuestionSubject === 'All' || question.subject === state.adminQuestionSubject) &&
    (!state.adminQuestionSearch || question.question.toLowerCase().includes(state.adminQuestionSearch.toLowerCase())),
  )
  const editingQuestion = allQuestions.find((question) => String(question.id) === String(state.adminEditingQuestionId))
  const profileDepartments = departments.map((department) =>
    `<option value="${department.name}" ${selectedStudent?.department === department.name ? 'selected' : ''}>${department.name}</option>`,
  ).join('')
  const questionForm = (question) => `
    <form id="admin-question-form" class="admin-form-grid">
      <input type="hidden" name="id" value="${escapeHTML(question?.id ?? '')}" />
      <label>Department
        <select name="department" required>
          ${departments.map((department, index) => `<option value="${department.name}" ${question ? question.department === department.name ? 'selected' : '' : index === 0 ? 'selected' : ''}>${department.name}</option>`).join('')}
        </select>
      </label>
      <label>Subject
        <select name="subject" required>
          ${getDepartmentSubjects(question?.department || departments[0].name).map((subject, index) => `<option value="${escapeHTML(subject)}" ${question ? question.subject === subject ? 'selected' : '' : index === 0 ? 'selected' : ''}>${escapeHTML(subject)}</option>`).join('')}
        </select>
      </label>
      <label class="admin-form-wide">Question
        <textarea name="question" rows="3" required>${escapeHTML(question?.question || '')}</textarea>
      </label>
      ${['A', 'B', 'C', 'D'].map((letter, index) => `
        <label>Option ${letter}
          <input name="option${letter}" value="${escapeHTML((question?.options || [])[index] || '')}" required />
        </label>
      `).join('')}
      <label>Correct answer
        <select name="correctAnswer" required>
          ${question && !examEligibleQuestion(question) ? '<option value="" selected disabled>Choose answer from key</option>' : ''}
          ${['A', 'B', 'C', 'D'].map((letter) => `<option value="${letter}" ${question?.correctAnswer === letter ? 'selected' : ''}>${letter}</option>`).join('')}
        </select>
      </label>
      <label>Difficulty
        <select name="difficulty">${['Easy', 'Medium', 'Hard'].map((level) => `<option ${question?.difficulty === level ? 'selected' : ''}>${level}</option>`).join('')}</select>
      </label>
      <input type="hidden" name="source" value="${escapeHTML(question?.source || '')}" />
      <label>Year (leave blank for original practice)<input name="year" type="number" min="2001" max="${new Date().getFullYear()}" value="${escapeHTML(question?.year || '')}" /></label>
      <label class="admin-form-wide">Explanation<textarea name="explanation" rows="2">${escapeHTML(question?.explanation || '')}</textarea></label>
      <div class="admin-form-actions admin-form-wide">
        <button class="btn btn-primary" type="submit">${question ? 'Save Question' : 'Add Question'}</button>
        ${question ? '<button class="btn btn-secondary" type="button" data-action="cancel-question-edit">Cancel Edit</button>' : ''}
      </div>
    </form>
  `

  return `
    <div class="page admin-page">
      <header class="topbar">
        <div class="brand-block"><img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" /></div>
        <div class="topbar-actions">${renderBackButton()}<button class="pill-button" data-action="logout" type="button">Logout</button></div>
      </header>
      <main class="admin-main">
        <section class="admin-overview">
          <div class="summary-card"><span>Total Students</span><strong>${allStudents.length}</strong></div>
          <div class="summary-card"><span>Science Students</span><strong>${allStudents.filter((student) => student.department === 'Science').length}</strong></div>
          <div class="summary-card"><span>Art Students</span><strong>${allStudents.filter((student) => student.department === 'Art').length}</strong></div>
          <div class="summary-card"><span>Commercial Students</span><strong>${allStudents.filter((student) => student.department === 'Commercial').length}</strong></div>
          <div class="summary-card"><span>Total Exams</span><strong>${totalCompleted}</strong></div>
          <div class="summary-card"><span>Average Score</span><strong>${average}</strong></div>
        </section>

        <section class="admin-panel admin-tools-panel">
          <div class="panel-header"><div><h2>Students &amp; Profiles</h2><p>Search by name or registration number, filter by department, and manage accounts.</p></div></div>
          <div class="admin-toolbar">
            <label>Search students<input id="admin-student-search" type="search" value="${escapeHTML(state.adminStudentSearch)}" placeholder="Name or registration number" /></label>
            <label>Department
              <select id="admin-department-filter">${departmentsForFilter.map((department) => `<option ${state.adminDepartmentFilter === department ? 'selected' : ''}>${department}</option>`).join('')}</select>
            </label>
          </div>
          <div class="admin-student-layout">
            <div class="admin-student-list">
              ${filteredStudents.length ? filteredStudents.map((student) => `
                <article class="admin-student-row">
                  <div><strong>${escapeHTML(student.fullName)}</strong><small>${escapeHTML(student.regNumber)} · ${escapeHTML(student.department)}</small></div>
                  <button class="btn btn-secondary" type="button" data-action="view-student" data-student-id="${escapeHTML(student.regNumber)}">View Profile</button>
                </article>
              `).join('') : '<p>No students match the current search and department filter.</p>'}
            </div>
            <div class="admin-student-profile">
              ${selectedStudent ? `
                <h3>${escapeHTML(selectedStudent.fullName)}</h3>
                <p><strong>Registration:</strong> ${escapeHTML(selectedStudent.regNumber)}<br /><strong>Department:</strong> ${escapeHTML(selectedStudent.department)}</p>
                <p><strong>Selected subjects:</strong> ${getStudentSubjects(selectedStudent).map(escapeHTML).join(', ')}</p>
                <form id="admin-student-form" class="admin-form-grid">
                  <input type="hidden" name="regNumber" value="${escapeHTML(selectedStudent.regNumber)}" />
                  <label>Student name<input name="fullName" value="${escapeHTML(selectedStudent.fullName)}" required /></label>
                  <label>Department<select name="department">${profileDepartments}</select></label>
                  <label class="admin-form-wide">Reset password<input name="password" type="password" placeholder="Enter a new password (optional)" /></label>
                  <div class="admin-form-actions admin-form-wide">
                    <button class="btn btn-primary" type="submit">Save Account</button>
                    <button class="btn btn-danger" type="button" data-action="delete-student" data-student-id="${escapeHTML(selectedStudent.regNumber)}">Delete Student</button>
                  </div>
                </form>
                <h4>Full Activity History</h4>
                ${selectedStudentActivity.length ? `
                  <div class="profile-activity-list">${selectedStudentActivity.map((activity) => `
                    <div class="profile-activity-item">
                      <strong>${escapeHTML(activity.activity || 'Practice test')}${activity.subject ? ` — ${escapeHTML(activity.subject)}` : ''}</strong>
                      <span>${escapeHTML(activity.date ? new Date(activity.date).toLocaleString() : 'Date unavailable')}</span>
                      <span>${escapeHTML(activity.score ?? '—')}/400 · ${escapeHTML(activity.percentage ?? '—')}% · ${escapeHTML(activity.correct ?? '—')} correct</span>
                    </div>
                  `).join('')}</div>
                ` : '<p>No activities recorded for this student.</p>'}
              ` : '<p>Select a student to see their profile, chosen subjects, and full activity history.</p>'}
            </div>
          </div>
        </section>

        <section class="admin-panel large-panel">
          <div class="panel-header">
            <div><h2>Student Activities</h2><p>All completed activities and students with no recorded results.</p></div>
            <div class="admin-form-actions">
              <button class="btn btn-secondary" data-action="export-results" type="button">Export CSV</button>
              <button class="btn btn-secondary" data-action="print-report" type="button">Print Report</button>
            </div>
          </div>
          <table><thead><tr><th>Student</th><th>Registration Number</th><th>Department</th><th>Activity</th><th>Date</th><th>Score</th><th>Percentage</th><th>Correct / Total</th></tr></thead>
            <tbody>${activityRows.length ? activityRows.join('') : '<tr class="admin-empty-row"><td colspan="8">No students or activities have been recorded yet.</td></tr>'}</tbody>
          </table>
        </section>

        <section class="admin-panel">
          <h2>Performance Insights</h2>
          <div class="admin-insight-grid">
            <div><h3>Recent score trend</h3>
              ${scoreTrend.length ? `<div class="admin-trend">${scoreTrend.map((result) => `<div class="admin-trend-item"><span>${escapeHTML(result.score ?? 0)}</span><div style="height:${Math.max(4, Math.min(100, Number(result.score || 0) / 4))}%"></div><small>${escapeHTML(result.date ? new Date(result.date).toLocaleDateString() : 'Exam')}</small></div>`).join('')}</div>` : '<p>No exam scores to chart yet.</p>'}
            </div>
            <div><h3>Average by subject</h3>
              ${subjectAverages.length ? `<ul class="admin-insight-list">${subjectAverages.map((item) => `<li><span>${escapeHTML(item.subject)}</span><strong>${item.average}%</strong></li>`).join('')}</ul>` : '<p>Subject averages appear after new results are recorded.</p>'}
            </div>
            <div><h3>Students needing support</h3><p>Students with no attempts or an average below 180/400.</p>
              ${studentsNeedingSupport.length ? `<ul class="admin-insight-list">${studentsNeedingSupport.map((item) => `<li><span>${escapeHTML(item.student.fullName)} · ${escapeHTML(item.student.regNumber)}</span><strong>${item.average === null ? 'No attempts' : `${item.average}/400`}</strong></li>`).join('')}</ul>` : '<p>No students currently meet this indicator.</p>'}
            </div>
          </div>
        </section>

        <section class="admin-panel">
          <h2>Question Management</h2>
          <p>Question bank: ${allQuestions.length} questions${questionYearLabel ? ` · imported years ${questionYearLabel}` : ''}.</p>
          <p>The built-in questions are original, unofficial JAMB-style practice. They are not official JAMB questions. Imported questions are stored in this browser and do not sync to other devices; imported content is not independently verified.</p>
          <div class="admin-form-grid">
            <label>Import mode
              <select id="question-bank-import-mode">
                <option value="replace">Replace imported questions (keep built-in practice)</option>
                <option value="merge">Add to the existing question bank</option>
              </select>
            </label>
            <label>Import question bank (JSON)
              <input id="question-bank-file" type="file" accept=".json,application/json" />
            </label>
          </div>
          <details class="admin-question-editor">
            <summary>Required JSON format</summary>
            <pre>{
  "questions": [{
    "department": "Science",
    "subject": "Mathematics",
    "year": 2001,
    "question": "Question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": "A",
    "explanation": "Optional explanation"
  }]
}</pre>
          </details>
          <form id="admin-pdf-import-form" class="admin-form-grid">
            <p class="admin-form-wide">Import one selectable-text PDF for a single subject and year. Choose its department, subject, and year so questions are routed to the matching student practice. PDF processing happens in this browser; the PDF is not uploaded. The PDF reader library loads from jsDelivr. Scanned PDFs are not supported.</p>
            <label>Department
              <select name="department" required>
                ${departments.map((department, index) => `<option value="${department.name}" ${index === 0 ? 'selected' : ''}>${department.name}</option>`).join('')}
              </select>
            </label>
            <label>Subject
              <select name="subject" required>
                ${getDepartmentSubjects(departments[0].name).map((subject, index) => `<option value="${escapeHTML(subject)}" ${index === 0 ? 'selected' : ''}>${escapeHTML(subject)}</option>`).join('')}
              </select>
            </label>
            <label>Question year
              <input name="year" type="number" min="2001" max="${new Date().getFullYear()}" required />
            </label>
            <label>Question PDF
              <input name="pdf" type="file" accept=".pdf,application/pdf" required />
            </label>
            <div class="admin-form-actions admin-form-wide"><button class="btn btn-primary" type="submit">Import PDF questions</button></div>
          </form>
          <p>PDF imports do not contain an answer key. Imported questions are held out of student exams until an administrator edits each question and supplies the correct answer.</p>
          <div class="admin-toolbar">
            <label>Find question<input id="admin-question-search" type="search" value="${escapeHTML(state.adminQuestionSearch)}" placeholder="Search question text" /></label>
            <label>Department<select id="admin-question-department">${departmentsForFilter.map((department) => `<option ${state.adminQuestionDepartment === department ? 'selected' : ''}>${department}</option>`).join('')}</select></label>
            <label>Subject<select id="admin-question-subject"><option>All</option>${availableQuestionSubjects.map((subject) => `<option ${state.adminQuestionSubject === subject ? 'selected' : ''}>${escapeHTML(subject)}</option>`).join('')}</select></label>
          </div>
          <div class="admin-question-list">
            ${filteredQuestions.slice(0, 50).map((question) => `
              <article class="admin-question-row">
                <div><strong>${escapeHTML(question.subject)} · ${escapeHTML(question.department)}</strong><p>${escapeHTML(question.question)}</p><small>${escapeHTML(getQuestionOrigin(question))} · ${escapeHTML(question.difficulty || '—')} · ${examEligibleQuestion(question) ? `Answer ${escapeHTML(question.correctAnswer)}` : 'Needs answer key before use'}</small></div>
                <div class="admin-form-actions">
                  <button class="btn btn-secondary" type="button" data-action="edit-question" data-question-id="${escapeHTML(question.id)}">Edit</button>
                  <button class="btn btn-danger" type="button" data-action="delete-question" data-question-id="${escapeHTML(question.id)}">Delete</button>
                </div>
              </article>
            `).join('') || '<p>No questions match those filters.</p>'}
          </div>
          <details id="admin-question-editor" class="admin-question-editor" ${editingQuestion ? 'open' : ''}>
            <summary>${editingQuestion ? 'Edit selected question' : 'Add a question'}</summary>
            ${questionForm(editingQuestion)}
          </details>
        </section>

        <section class="admin-panel">
          <h2>Exam Settings</h2>
          <p>These settings apply to all students using this browser-based portal.</p>
          <form id="admin-exam-settings-form" class="admin-form-grid">
            <label>Practice enabled<select name="practiceEnabled"><option value="true" ${examSettings.practiceEnabled ? 'selected' : ''}>Enabled</option><option value="false" ${!examSettings.practiceEnabled ? 'selected' : ''}>Disabled</option></select></label>
            <label>JAMB mock enabled<select name="mockEnabled"><option value="true" ${examSettings.mockEnabled ? 'selected' : ''}>Enabled</option><option value="false" ${!examSettings.mockEnabled ? 'selected' : ''}>Disabled</option></select></label>
            <label>Default practice questions<input name="practiceQuestionCount" type="number" min="1" max="40" value="${escapeHTML(examSettings.practiceQuestionCount)}" required /></label>
            <label>Practice duration (minutes)<input name="practiceDuration" type="number" min="1" max="300" value="${escapeHTML(examSettings.practiceDuration)}" required /></label>
            <label>Mock questions per subject<input name="mockQuestionsPerSubject" type="number" min="1" max="40" value="${escapeHTML(examSettings.mockQuestionsPerSubject)}" required /></label>
            <label>Mock duration (minutes)<input name="mockDuration" type="number" min="1" max="300" value="${escapeHTML(examSettings.mockDuration)}" required /></label>
            <div class="admin-form-actions admin-form-wide"><button class="btn btn-primary" type="submit">Save Exam Settings</button></div>
          </form>
        </section>
      </main>
    </div>
  `
}

const csvCell = (value) => {
  const text = String(value ?? '')
  const safeText = /^[=+\-@]/.test(text) ? `'${text}` : text
  return `"${safeText.replace(/"/g, '""')}"`
}

const exportResultsCSV = () => {
  const rows = [
    ['Student', 'Registration Number', 'Department', 'Activity', 'Subject', 'Date', 'Score', 'Percentage', 'Correct', 'Total Questions'],
    ...getResults().map((result) => [
      result.student?.fullName,
      result.student?.regNumber,
      result.department || result.student?.department,
      result.activity || 'Practice test',
      result.subject,
      result.date,
      result.score,
      result.percentage,
      result.correct,
      result.totalQuestions,
    ]),
  ]
  const csv = `\uFEFF${rows.map((row) => row.map(csvCell).join(',')).join('\r\n')}`
  const file = new Blob([csv], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.download = `ar-rashaad-results-${new Date().toISOString().slice(0, 10)}.csv`
  document.body.append(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

const render = () => {
  const app = document.querySelector('#app')
  if (!app) return

  if (['dashboard', 'exam', 'results', 'history'].includes(state.screen) && !state.currentUser) {
    state.screen = 'landing'
    state.exam = null
    state.result = null
    state.resultModalOpen = false
    writeStorage(STORAGE_KEYS.examSession, null)
  }

  if (!validScreens.includes(state.screen)) state.screen = 'landing'
  if (state.screen === 'landing') app.innerHTML = renderLanding()
  else if (state.screen === 'login') app.innerHTML = renderAuthLayout('login')
  else if (state.screen === 'register') app.innerHTML = renderAuthLayout('register')
  else if (state.screen === 'forgot-password') app.innerHTML = renderPasswordRecovery()
  else if (state.screen === 'dashboard') app.innerHTML = renderDashboard()
  else if (state.screen === 'exam') app.innerHTML = renderExam()
  else if (state.screen === 'results') app.innerHTML = renderResults()
  else if (state.screen === 'history') app.innerHTML = renderHistory()
  else if (state.screen === 'admin') app.innerHTML = renderAdminLogin()
  else if (state.screen === 'admin-dashboard') app.innerHTML = state.adminAuthenticated ? renderAdmin() : renderAdminLogin()

  persistSessionState()

  if (state.notification) {
    const notification = document.createElement('div')
    notification.className = `app-notification app-notification-${state.notification.type}`
    notification.setAttribute('role', state.notification.type === 'error' ? 'alert' : 'status')
    notification.setAttribute('aria-live', state.notification.type === 'error' ? 'assertive' : 'polite')

    const message = document.createElement('p')
    message.textContent = state.notification.message

    const dismiss = document.createElement('button')
    dismiss.className = 'app-notification-dismiss'
    dismiss.type = 'button'
    dismiss.dataset.action = 'dismiss-notification'
    dismiss.setAttribute('aria-label', 'Dismiss message')
    dismiss.textContent = '×'

    notification.append(message, dismiss)
    app.append(notification)
  }
}

const handleNavigation = (target) => {
  if (['dashboard', 'history', 'results'].includes(target) && !state.currentUser) {
    navigateToScreen('login')
    return
  }

  navigateToScreen(target)
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]')
  if (!target) return

  const action = target.dataset.action

  if (action === 'screen') {
    handleNavigation(target.dataset.target)
  }

  if (action === 'back') {
    goBack()
    return
  }

  if (action === 'dismiss-notification') {
    state.notification = null
    clearTimeout(notificationTimeout)
    render()
    return
  }

  if (action === 'logout') {
    state.currentUser = null
    state.adminAuthenticated = false
    state.exam = null
    state.result = null
    state.resultModalOpen = false
    writeStorage(STORAGE_KEYS.examSession, null)
    saveCurrentUser()
    state.screenHistory = []
    state.screen = 'landing'
    render()
  }

  if (action === 'dashboard-card') {
    const card = target.dataset.card
    if (card === 'VIEW MY RESULTS' || card === 'EXAMINATION HISTORY') {
      navigateToScreen('history')
      return
    }
    if (card === 'START FULL JAMB MOCK') {
      state.practice.department = state.currentUser.department
      state.practice.subject = compulsorySubject
      state.practice.count = getExamSettings().mockQuestionsPerSubject * 4
      state.practice.duration = getExamSettings().mockDuration
      createExam('Full JAMB Mock')
      return
    }
    if (card === 'START PRACTICE TEST' || card === 'SUBJECT PRACTICE') {
      state.practice.department = state.currentUser.department
      const subjects = getStudentSubjects(state.currentUser)
      const electives = subjects.filter((subject) => subject !== compulsorySubject)
      state.practice.subject = electives.includes('Mathematics') ? 'Mathematics' : electives[0]
      state.practice.count = getExamSettings().practiceQuestionCount
      state.practice.duration = getExamSettings().practiceDuration
      createExam('Practice Test')
      return
    }
    showNotification('This dashboard action is not available.')
  }

  if (action === 'practice') {
    createExam(target.dataset.mode || 'Practice')
  }

  if (action === 'answer') {
    if (!state.exam) return
    state.exam.answers[state.exam.currentIndex] = target.dataset.option
    render()
  }

  if (action === 'move') {
    if (!state.exam) return
    const delta = Number(target.dataset.step)
    state.exam.currentIndex = Math.min(state.exam.questions.length - 1, Math.max(0, state.exam.currentIndex + delta))
    render()
  }

  if (action === 'navigate-to') {
    if (!state.exam) return
    state.exam.currentIndex = Number(target.dataset.index)
    render()
  }

  if (action === 'flag') {
    if (!state.exam) return
    state.exam.flagged[state.exam.currentIndex] = !state.exam.flagged[state.exam.currentIndex]
    render()
  }

  if (action === 'clear-answer') {
    if (!state.exam) return
    state.exam.answers[state.exam.currentIndex] = ''
    render()
  }

  if (action === 'submit') {
    submitExam()
  }

  if (action === 'result-action') {
    const targetScreen = target.dataset.target
    if (targetScreen === 'detail') {
      state.resultModalOpen = false
      render()
      return
    }
    if (targetScreen === 'retake') {
      state.resultModalOpen = false
      if (!state.exam) {
        showNotification('The previous exam session is unavailable. Start a new practice from your dashboard.')
        navigateToScreen('dashboard', { replaceCurrent: true })
        return
      }
      const previousExam = state.exam
      state.practice.department = previousExam.department
      state.practice.subject = previousExam.questions[0]?.subject || state.practice.subject
      state.practice.count = previousExam.questions.length
      state.practice.duration = previousExam.durationMinutes
      createExam(previousExam.mode)
      return
    }
    state.resultModalOpen = false
    navigateToScreen('dashboard', { replaceCurrent: true })
  }

  if (action === 'view-student') {
    state.adminSelectedStudentId = target.dataset.studentId
    render()
  }

  if (action === 'delete-student') {
    const regNumber = target.dataset.studentId
    const student = getStudents().find((entry) => entry.regNumber === regNumber)
    if (!student || !window.confirm(`Delete ${student.fullName} and their stored activity history?`)) return
    writeStorage(STORAGE_KEYS.students, getStudents().filter((entry) => entry.regNumber !== regNumber))
    writeStorage(STORAGE_KEYS.results, getResults().filter((entry) => entry.student?.regNumber !== regNumber))
    state.adminSelectedStudentId = ''
    if (state.currentUser?.regNumber === regNumber) {
      state.currentUser = null
      saveCurrentUser()
    }
    showNotification('Student account and activity history deleted.', 'success')
  }

  if (action === 'edit-question') {
    state.adminEditingQuestionId = target.dataset.questionId
    render()
    requestAnimationFrame(() => {
      const editor = document.querySelector('#admin-question-editor')
      const questionField = editor?.querySelector('textarea[name="question"]')
      editor?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      questionField?.focus({ preventScroll: true })
    })
  }

  if (action === 'cancel-question-edit') {
    state.adminEditingQuestionId = null
    render()
  }

  if (action === 'delete-question') {
    const questionId = target.dataset.questionId
    if (!window.confirm('Delete this question from the question bank?')) return
    const questions = getQuestionBank().filter((question) => String(question.id) !== questionId)
    writeStorage(STORAGE_KEYS.questions, questions)
    if (String(state.adminEditingQuestionId) === questionId) state.adminEditingQuestionId = null
    showNotification('Question deleted from the question bank.', 'success')
  }

  if (action === 'export-results') {
    exportResultsCSV()
    showNotification('Results report downloaded as CSV.', 'success')
  }

  if (action === 'print-report') {
    window.print()
  }
})

document.addEventListener('submit', async (event) => {
  const form = event.target
  if (!(form instanceof HTMLFormElement)) return

  event.preventDefault()

  if (form.getAttribute('id') === 'admin-pdf-import-form') {
    const formData = new FormData(form)
    const fileValue = formData.get('pdf')
    const department = formData.get('department')?.toString()
    const subject = formData.get('subject')?.toString()
    const year = Number(formData.get('year'))
    if (!(fileValue instanceof File) || !fileValue.size) {
      showNotification('Choose a PDF file to import.')
      return
    }
    await importPdfQuestions({ file: fileValue, department, subject, year })
    return
  }

  if (form.getAttribute('id') === 'student-recovery-form') {
    const formData = new FormData(form)
    const regNumber = formData.get('regNumber')?.toString().trim()
    const fullName = formData.get('fullName')?.toString().trim().replace(/\s+/g, ' ')
    const password = formData.get('password')?.toString()
    const confirmPassword = formData.get('confirmPassword')?.toString()

    if (!regNumber || !fullName || !password || !confirmPassword) {
      showNotification('Complete all fields to reset your password.')
      return
    }

    if (password !== confirmPassword) {
      showNotification('Passwords do not match. Check both password fields and try again.')
      return
    }

    const students = getStudents()
    const student = students.find((entry) =>
      entry.regNumber?.toLowerCase() === regNumber.toLowerCase() &&
      normalizeStudentName(entry.fullName || '') === normalizeStudentName(fullName),
    )
    if (!student) {
      showNotification('We couldn’t verify those account details. Check the registration number and full name, then try again.')
      return
    }

    student.password = password
    writeStorage(STORAGE_KEYS.students, students)
    navigateToScreen('login', { replaceCurrent: true })
    showNotification('Your password has been reset. Sign in with your new password.', 'success')
    return
  }

  if (form.getAttribute('id') === 'student-register-form') {
    const formData = new FormData(form)
    const fullName = formData.get('fullName')?.toString().trim().replace(/\s+/g, ' ')
    const department = formData.get('department')?.toString()
    const selectedSubjects = formData.getAll('subjects').map((subject) => subject.toString())
    const password = formData.get('password')?.toString()
    const confirmPassword = formData.get('confirmPassword')?.toString()

    if (!fullName || !department || !password || !confirmPassword) {
      showNotification('Please complete all required registration fields.')
      return
    }

    const departmentElectives = getDepartmentSubjects(department).filter((subject) => subject !== compulsorySubject)
    if (
      selectedSubjects.length !== 3 ||
      new Set(selectedSubjects).size !== 3 ||
      selectedSubjects.some((subject) => !departmentElectives.includes(subject))
    ) {
      showNotification('Select exactly three additional subjects for your department. Use of English is compulsory.')
      return
    }

    if (password !== confirmPassword) {
      showNotification('Passwords do not match. Check both password fields and try again.')
      return
    }

    const students = getStudents()
    const existingStudent = students.find((student) =>
      normalizeStudentName(student.fullName || '') === normalizeStudentName(fullName),
    )
    if (existingStudent) {
      showNotification('A student with this name is already registered. Sign in or use password recovery instead.')
      return
    }

    const regNumber = generateRegistrationNumber(students)
    const newStudent = {
      fullName,
      regNumber,
      department,
      subjects: [compulsorySubject, ...selectedSubjects],
      password,
      createdAt: new Date().toISOString(),
    }
    students.push(newStudent)
    writeStorage(STORAGE_KEYS.students, students)
    state.currentUser = newStudent
    saveCurrentUser()
    navigateToScreen('dashboard', { replaceCurrent: true })
    return
  }

  if (form.getAttribute('id') === 'student-login-form') {
    const formData = new FormData(form)
    const regNumber = formData.get('regNumber')?.toString().trim()
    const password = formData.get('password')?.toString()

    if (!regNumber || !password) {
      showNotification('Enter your registration number and password to sign in.')
      return
    }

    const student = getStudents().find((entry) => entry.regNumber.toLowerCase() === regNumber.toLowerCase() && entry.password === password)
    if (!student) {
      showNotification('We couldn’t sign you in. Check your registration number and password, then try again.')
      return
    }

    state.currentUser = student
    saveCurrentUser()
    navigateToScreen('dashboard', { replaceCurrent: true })
    return
  }

  if (form.getAttribute('id') === 'admin-login-form') {
    const formData = new FormData(form)
    const username = formData.get('username')?.toString().trim()
    const password = formData.get('password')?.toString()

    if (!username || !password) {
      showNotification('Enter the admin username and password to sign in.')
      return
    }

    const admin = readStorage(STORAGE_KEYS.admins, []).find((entry) =>
      entry.username?.toLowerCase() === username.toLowerCase() && entry.password === password,
    )
    if (!admin) {
      showNotification('We couldn’t sign in to the admin account. Check the username and password, then try again.')
      return
    }

    state.adminAuthenticated = true
    navigateToScreen('admin-dashboard')
    return
  }

  if (form.getAttribute('id') === 'admin-student-form') {
    const formData = new FormData(form)
    const regNumber = formData.get('regNumber')?.toString()
    const fullName = formData.get('fullName')?.toString().trim().replace(/\s+/g, ' ')
    const department = formData.get('department')?.toString()
    const password = formData.get('password')?.toString()
    const students = getStudents()
    const student = students.find((entry) => entry.regNumber === regNumber)
    if (!student || !fullName || !departments.some((entry) => entry.name === department)) {
      showNotification('Enter a valid student name and department.')
      return
    }
    student.fullName = fullName
    if (student.department !== department) {
      student.department = department
      student.subjects = getDefaultStudentSubjects(student)
    }
    if (password) student.password = password
    writeStorage(STORAGE_KEYS.students, students)
    if (state.currentUser?.regNumber === regNumber) {
      state.currentUser = student
      saveCurrentUser()
    }
    showNotification('Student account updated.', 'success')
    return
  }

  if (form.getAttribute('id') === 'admin-question-form') {
    const formData = new FormData(form)
    const idValue = formData.get('id')?.toString()
    const department = formData.get('department')?.toString()
    const subject = formData.get('subject')?.toString()
    const questionText = formData.get('question')?.toString().trim()
    const correctAnswer = formData.get('correctAnswer')?.toString()
    const options = ['A', 'B', 'C', 'D'].map((letter) => formData.get(`option${letter}`)?.toString().trim() || '')
    const yearValue = formData.get('year')?.toString().trim() || ''
    const year = yearValue ? Number(yearValue) : null
    if (
      !questionText ||
      !departments.some((entry) => entry.name === department && entry.subjects.includes(subject)) ||
      options.some((option) => !option) ||
      !['A', 'B', 'C', 'D'].includes(correctAnswer) ||
      (yearValue && (!Number.isInteger(year) || year < 2001 || year > new Date().getFullYear()))
    ) {
      showNotification('Complete the question, four options, correct answer, department, subject, and a valid year.')
      return
    }
    const questions = getQuestionBank()
    const existingQuestion = idValue ? questions.find((entry) => String(entry.id) === idValue) : null
    const questionSource = formData.get('source')?.toString() || 'Manually added (origin unverified)'
    const savedSource = questionSource === 'PDF import (awaiting answer key)'
      ? 'PDF import (answer entered by administrator; authenticity unverified)'
      : questionSource
    const savedQuestion = {
      id: existingQuestion?.id ?? Math.max(0, ...questions.map((entry) => Number(entry.id) || 0)) + 1,
      department,
      subject,
      question: questionText,
      options,
      correctAnswer,
      explanation: formData.get('explanation')?.toString().trim() || '',
      difficulty: formData.get('difficulty')?.toString() || 'Easy',
      year,
      source: savedSource,
      ...(existingQuestion?.sourceKey ? { sourceKey: existingQuestion.sourceKey } : {}),
    }
    if (existingQuestion) {
      questions[questions.indexOf(existingQuestion)] = savedQuestion
    } else {
      questions.push(savedQuestion)
    }
    writeStorage(STORAGE_KEYS.questions, questions)
    state.adminEditingQuestionId = null
    showNotification(existingQuestion ? 'Question updated.' : 'Question added.', 'success')
    return
  }

  if (form.getAttribute('id') === 'admin-exam-settings-form') {
    const formData = new FormData(form)
    const values = {
      practiceQuestionCount: Number(formData.get('practiceQuestionCount')),
      practiceDuration: Number(formData.get('practiceDuration')),
      mockQuestionsPerSubject: Number(formData.get('mockQuestionsPerSubject')),
      mockDuration: Number(formData.get('mockDuration')),
    }
    if (
      !Number.isInteger(values.practiceQuestionCount) || values.practiceQuestionCount < 1 || values.practiceQuestionCount > 40 ||
      !Number.isInteger(values.mockQuestionsPerSubject) || values.mockQuestionsPerSubject < 1 || values.mockQuestionsPerSubject > 40 ||
      !Number.isInteger(values.practiceDuration) || values.practiceDuration < 1 || values.practiceDuration > 300 ||
      !Number.isInteger(values.mockDuration) || values.mockDuration < 1 || values.mockDuration > 300
    ) {
      showNotification('Question counts must be 1–40 and durations must be 1–300 minutes.')
      return
    }
    const settings = readStorage(STORAGE_KEYS.settings, {})
    settings.examSettings = {
      ...getExamSettings(),
      ...values,
      practiceEnabled: formData.get('practiceEnabled') === 'true',
      mockEnabled: formData.get('mockEnabled') === 'true',
    }
    writeStorage(STORAGE_KEYS.settings, settings)
    state.practice.count = values.practiceQuestionCount
    state.practice.duration = values.practiceDuration
    showNotification('Exam settings saved.', 'success')
  }
})

document.addEventListener('change', (event) => {
  const target = event.target
  if (target instanceof HTMLInputElement && target.id === 'question-bank-file') {
    const file = target.files?.[0]
    if (!file) return
    if (!state.adminAuthenticated) {
      showNotification('Sign in as an administrator before importing questions.')
      target.value = ''
      return
    }
    const mode = document.querySelector('#question-bank-import-mode')?.value === 'merge' ? 'merge' : 'replace'
    if (mode === 'replace' && getQuestionBank().some((question) => question.source !== 'Original JAMB-style practice (unofficial)') &&
      !window.confirm('Replace all imported and manually added questions? Built-in unofficial practice questions will be kept.')) {
      target.value = ''
      return
    }
    void importQuestionBank(file, mode)
    target.value = ''
    return
  }
  if (target instanceof HTMLInputElement && target.name === 'subjects') {
    state.registrationSubjects = [...document.querySelectorAll('#student-register-form input[name="subjects"]:checked')]
      .map((input) => input.value)
    updateRegistrationSubjectSelection()
    return
  }
  if (!(target instanceof HTMLSelectElement)) return
  if (target.id === 'admin-department-filter') {
    state.adminDepartmentFilter = target.value
    render()
    return
  }
  if (target.id === 'admin-question-department') {
    state.adminQuestionDepartment = target.value
    state.adminQuestionSubject = 'All'
    render()
    return
  }
  if (target.id === 'admin-question-subject') {
    state.adminQuestionSubject = target.value
    render()
    return
  }
  if (
    target.name === 'department' &&
    ['admin-question-form', 'admin-pdf-import-form'].includes(target.form?.getAttribute('id'))
  ) {
    const subjectSelect = target.form.elements.namedItem('subject')
    if (subjectSelect instanceof HTMLSelectElement) {
      subjectSelect.innerHTML = getDepartmentSubjects(target.value)
        .map((subject) => `<option value="${escapeHTML(subject)}">${escapeHTML(subject)}</option>`)
        .join('')
    }
    return
  }

  const field = target.dataset.field
  if (!field) return

  if (field === 'registration-department') {
    state.registrationDepartment = target.value
    state.registrationSubjects = []
    updateRegistrationSubjectSelection()
    return
  }

  if (field === 'department') {
    if (!state.currentUser || target.value !== state.currentUser.department) return
    state.practice.department = target.value
    const nextSubjects = getDepartmentSubjects(target.value)
    state.practice.subject = nextSubjects[0] || ''
    render()
  }

  if (field === 'subject') {
    state.practice.subject = target.value
    render()
  }

  if (field === 'count') {
    state.practice.count = Number(target.value)
  }

  if (field === 'duration') {
    state.practice.duration = Number(target.value)
  }
})

document.addEventListener('input', (event) => {
  const target = event.target
  if (!(target instanceof HTMLInputElement)) return
  if (target.id === 'admin-student-search') {
    state.adminStudentSearch = target.value
    render()
    const search = document.querySelector('#admin-student-search')
    search?.focus()
    search?.setSelectionRange(target.value.length, target.value.length)
  } else if (target.id === 'admin-question-search') {
    state.adminQuestionSearch = target.value
    render()
    const search = document.querySelector('#admin-question-search')
    search?.focus()
    search?.setSelectionRange(target.value.length, target.value.length)
  }
})

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase()
  if (['a', 'b', 'c', 'd', 'arrowleft', 'arrowright', 'r'].includes(key) && state.screen === 'exam' && state.exam) {
    const optionMap = { a: 'A', b: 'B', c: 'C', d: 'D' }
    if (optionMap[key]) {
      state.exam.answers[state.exam.currentIndex] = optionMap[key]
      render()
    } else if (key === 'arrowright') {
      state.exam.currentIndex = Math.min(state.exam.currentIndex + 1, state.exam.questions.length - 1)
      render()
    } else if (key === 'arrowleft') {
      state.exam.currentIndex = Math.max(state.exam.currentIndex - 1, 0)
      render()
    } else if (key === 'r') {
      state.exam.flagged[state.exam.currentIndex] = !state.exam.flagged[state.exam.currentIndex]
      render()
    }
  }
})

setInterval(() => {
  if (state.screen === 'exam' && state.exam) {
    const remaining = Math.max(0, Math.ceil((state.exam.expiresAt - Date.now()) / 1000))
    state.exam.timeLeft = remaining
    if (remaining <= 0) {
      submitExam()
    }
    render()
  }
}, 1000)

ensureSeedData()
render()