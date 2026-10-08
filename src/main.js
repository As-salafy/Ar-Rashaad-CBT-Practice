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

const scoreMessages = {
  high: 'Outstanding performance! Keep pushing towards excellence.',
  good: 'Excellent effort! You are making impressive progress.',
  average: 'Good effort! Continue improving.',
  fair: 'Keep practising. You are getting better.',
  low: "Don't give up. Every practice brings improvement.",
}

const adminCredentials = [{ username: 'admin', password: 'admin123' }]

const subjectQuestionTemplates = {
  'Use of English': [
    { question: 'Choose the word that best completes the sentence: The principal asked the students to be ____ in their conduct.', options: ['A. careless', 'B. diligent', 'C. rude', 'D. lazy'], correctAnswer: 'B', explanation: 'Diligent means hardworking and careful.', difficulty: 'Easy', year: 2025 },
    { question: 'Choose the option with the closest meaning to “diligent”.', options: ['A. selfish', 'B. hardworking', 'C. weak', 'D. noisy'], correctAnswer: 'B', explanation: 'Diligent means hardworking and thorough.', difficulty: 'Easy', year: 2025 },
    { question: 'The teacher asked everyone to remain _____ during the test.', options: ['A. noisy', 'B. calm', 'C. rude', 'D. proud'], correctAnswer: 'B', explanation: 'A quiet and composed atmosphere is needed in a test.', difficulty: 'Easy', year: 2025 },
    { question: 'The report was so clear that it was easy to ____ the message.', options: ['A. reject', 'B. ignore', 'C. understand', 'D. forget'], correctAnswer: 'C', explanation: 'Clear writing makes understanding easy.', difficulty: 'Easy', year: 2025 },
    { question: 'A good summary should be:', options: ['A. long and emotional', 'B. short and clear', 'C. difficult to read', 'D. random'], correctAnswer: 'B', explanation: 'A summary should be brief but complete and clear.', difficulty: 'Easy', year: 2025 },
    { question: 'Select the correct sentence:', options: ['A. He have gone home.', 'B. He has gone home.', 'C. He go home.', 'D. He gone home.'], correctAnswer: 'B', explanation: 'The present perfect tense uses “has gone”.', difficulty: 'Medium', year: 2025 },
    { question: 'Antonym of “brisk” is:', options: ['A. faster', 'B. slow', 'C. cheerful', 'D. sharp'], correctAnswer: 'B', explanation: 'Brisk means quick; slow is the opposite.', difficulty: 'Medium', year: 2025 },
    { question: 'The phrase “to hit the nail on the head” means:', options: ['A. to make a mistake', 'B. to say the right thing', 'C. to break a tool', 'D. to lose patience'], correctAnswer: 'B', explanation: 'It means to say exactly the correct thing.', difficulty: 'Medium', year: 2025 },
    { question: 'Which word is correctly spelt?', options: ['A. Acomodation', 'B. Accomodation', 'C. Accommodation', 'D. Acommdation'], correctAnswer: 'C', explanation: 'Accommodation is spelled correctly.', difficulty: 'Medium', year: 2025 },
    { question: 'Choose the sentence with correct punctuation.', options: ['A. Which book did you buy?', 'B. Which book did you buy', 'C. Which book did you buy!', 'D. Which book did you buy.'], correctAnswer: 'A', explanation: 'Questions require a question mark at the end.', difficulty: 'Easy', year: 2025 },
  ],
  Mathematics: [
    { question: 'Solve for x: 3x + 9 = 30.', options: ['A. 5', 'B. 7', 'C. 9', 'D. 11'], correctAnswer: 'B', explanation: 'Subtract 9 from both sides: 3x = 21, then divide by 3.', difficulty: 'Easy', year: 2025 },
    { question: 'If x = 5 and y = 3, evaluate 2x + y.', options: ['A. 11', 'B. 12', 'C. 13', 'D. 14'], correctAnswer: 'C', explanation: '2(5) + 3 = 10 + 3 = 13.', difficulty: 'Easy', year: 2025 },
    { question: 'Simplify: 3(a + 2) - 2a.', options: ['A. a + 6', 'B. a + 4', 'C. 2a + 6', 'D. 3a + 2'], correctAnswer: 'A', explanation: '3a + 6 - 2a = a + 6.', difficulty: 'Easy', year: 2025 },
    { question: 'Find the value of 7² - 4².', options: ['A. 24', 'B. 27', 'C. 29', 'D. 33'], correctAnswer: 'D', explanation: '49 - 16 = 33.', difficulty: 'Easy', year: 2025 },
    { question: 'Solve: 5x - 12 = 18.', options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], correctAnswer: 'C', explanation: '5x = 30, x = 6.', difficulty: 'Easy', year: 2025 },
    { question: 'What is the next term in the sequence 2, 5, 10, 17, ?', options: ['A. 24', 'B. 25', 'C. 26', 'D. 27'], correctAnswer: 'C', explanation: 'The differences are 3, 5, 7, so the next is 9; 17 + 9 = 26.', difficulty: 'Medium', year: 2025 },
    { question: 'The product of 12 and 15 is:', options: ['A. 160', 'B. 170', 'C. 180', 'D. 190'], correctAnswer: 'C', explanation: '12 × 15 = 180.', difficulty: 'Easy', year: 2025 },
    { question: 'Simplify 18/24.', options: ['A. 3/4', 'B. 2/3', 'C. 4/5', 'D. 5/6'], correctAnswer: 'A', explanation: 'Divide both numerator and denominator by 6.', difficulty: 'Easy', year: 2025 },
    { question: 'The perimeter of a square with side 8 cm is:', options: ['A. 16 cm', 'B. 24 cm', 'C. 32 cm', 'D. 64 cm'], correctAnswer: 'C', explanation: 'Perimeter = 4 × side = 32 cm.', difficulty: 'Easy', year: 2025 },
    { question: 'Convert 0.75 to a fraction.', options: ['A. 1/3', 'B. 3/4', 'C. 2/3', 'D. 5/6'], correctAnswer: 'B', explanation: '0.75 = 75/100 = 3/4.', difficulty: 'Easy', year: 2025 },
  ],
  Physics: [
    { question: 'A body moving with uniform velocity has:', options: ['A. increasing acceleration', 'B. constant speed', 'C. zero force', 'D. no motion'], correctAnswer: 'B', explanation: 'Uniform velocity means constant speed in a fixed direction.', difficulty: 'Easy', year: 2025 },
    { question: 'The SI unit of force is:', options: ['A. kg', 'B. metre', 'C. newton', 'D. joule'], correctAnswer: 'C', explanation: 'Force is measured in newtons.', difficulty: 'Easy', year: 2025 },
    { question: 'A wave with speed 300 m/s and wavelength 2 m has frequency:', options: ['A. 150 Hz', 'B. 300 Hz', 'C. 600 Hz', 'D. 75 Hz'], correctAnswer: 'A', explanation: 'Frequency = speed / wavelength = 300 / 2 = 150 Hz.', difficulty: 'Medium', year: 2025 },
    { question: 'Energy is measured in:', options: ['A. watt', 'B. joule', 'C. metre', 'D. pascal'], correctAnswer: 'B', explanation: 'Energy is measured in joules.', difficulty: 'Easy', year: 2025 },
    { question: 'Which of these is a vector quantity?', options: ['A. Mass', 'B. Speed', 'C. Velocity', 'D. Time'], correctAnswer: 'C', explanation: 'Velocity includes both magnitude and direction.', difficulty: 'Medium', year: 2025 },
    { question: 'A body at rest begins to move when force is applied. This shows:', options: ['A. inertia', 'B. gravity', 'C. friction', 'D. magnetism'], correctAnswer: 'A', explanation: 'An object resists changes in its state of rest or motion.', difficulty: 'Medium', year: 2025 },
    { question: 'The SI unit of pressure is:', options: ['A. joule', 'B. pascal', 'C. watt', 'D. newton'], correctAnswer: 'B', explanation: 'Pressure is measured in pascals.', difficulty: 'Easy', year: 2025 },
    { question: 'Which instrument measures electrical current?', options: ['A. Voltmeter', 'B. Ammeter', 'C. Thermometer', 'D. Hygrometer'], correctAnswer: 'B', explanation: 'An ammeter is used to measure current.', difficulty: 'Easy', year: 2025 },
    { question: 'The acceleration due to gravity on Earth is approximately:', options: ['A. 8.9 m/s²', 'B. 9.8 m/s²', 'C. 10.8 m/s²', 'D. 12.0 m/s²'], correctAnswer: 'B', explanation: 'Gravity on Earth is about 9.8 m/s².', difficulty: 'Easy', year: 2025 },
    { question: 'Heat flows from:', options: ['A. cold to hot', 'B. hot to cold', 'C. deep to shallow', 'D. none of these'], correctAnswer: 'B', explanation: 'Heat naturally flows from hot regions to cooler ones.', difficulty: 'Easy', year: 2025 },
  ],
  Chemistry: [
    { question: 'A solution that turns blue litmus red is:', options: ['A. basic', 'B. neutral', 'C. acidic', 'D. salty'], correctAnswer: 'C', explanation: 'Acids turn blue litmus paper red.', difficulty: 'Easy', year: 2025 },
    { question: 'The atomic number of an element equals the number of:', options: ['A. neutrons', 'B. protons', 'C. nucleons', 'D. electrons in shell'], correctAnswer: 'B', explanation: 'Atomic number is the number of protons in the nucleus.', difficulty: 'Easy', year: 2025 },
    { question: 'What is the charge on a sulfate ion?', options: ['A. 1+', 'B. 2+', 'C. 1-', 'D. 2-'], correctAnswer: 'D', explanation: 'Sulfate is SO4²⁻, so its charge is 2-.', difficulty: 'Medium', year: 2025 },
    { question: 'Which gas is produced when zinc reacts with dilute acid?', options: ['A. oxygen', 'B. hydrogen', 'C. carbon dioxide', 'D. nitrogen'], correctAnswer: 'B', explanation: 'Metal + acid produces hydrogen gas.', difficulty: 'Easy', year: 2025 },
    { question: 'Which of these is an alkali?', options: ['A. water', 'B. sodium hydroxide', 'C. copper oxide', 'D. ethanol'], correctAnswer: 'B', explanation: 'Sodium hydroxide is a strong alkali.', difficulty: 'Easy', year: 2025 },
    { question: 'The process by which a liquid changes to gas is called:', options: ['A. freezing', 'B. condensation', 'C. evaporation', 'D. sublimation'], correctAnswer: 'C', explanation: 'Evaporation is change from liquid to gas.', difficulty: 'Easy', year: 2025 },
    { question: 'The pH of a neutral solution is:', options: ['A. 1', 'B. 3', 'C. 7', 'D. 9'], correctAnswer: 'C', explanation: 'A neutral solution has pH 7.', difficulty: 'Easy', year: 2025 },
    { question: 'Which element is present in all organic compounds?', options: ['A. Oxygen', 'B. Carbon', 'C. Hydrogen', 'D. Nitrogen'], correctAnswer: 'B', explanation: 'Organic compounds all contain carbon.', difficulty: 'Easy', year: 2025 },
    { question: 'Which of the following is a noble gas?', options: ['A. oxygen', 'B. nitrogen', 'C. helium', 'D. chlorine'], correctAnswer: 'C', explanation: 'Helium is a noble gas.', difficulty: 'Easy', year: 2025 },
    { question: 'What is the formula of water?', options: ['A. H₂O', 'B. CO₂', 'C. H₂SO₄', 'D. NaCl'], correctAnswer: 'A', explanation: 'Water is made of two hydrogen atoms and one oxygen atom.', difficulty: 'Easy', year: 2025 },
  ],
  Biology: [
    { question: 'The powerhouse of the cell is the:', options: ['A. nucleus', 'B. ribosome', 'C. mitochondrion', 'D. vacuole'], correctAnswer: 'C', explanation: 'Mitochondria generate most of the cell’s energy.', difficulty: 'Easy', year: 2025 },
    { question: 'Which part of the plant cell gives it a rigid shape?', options: ['A. cell wall', 'B. cytoplasm', 'C. vacuole', 'D. plasma membrane'], correctAnswer: 'A', explanation: 'The cell wall provides structural support and shape.', difficulty: 'Easy', year: 2025 },
    { question: 'The process by which green plants make food is:', options: ['A. respiration', 'B. excretion', 'C. transpiration', 'D. photosynthesis'], correctAnswer: 'D', explanation: 'Photosynthesis allows plants to use sunlight to make food.', difficulty: 'Easy', year: 2025 },
    { question: 'The cells that carry oxygen are:', options: ['A. platelets', 'B. white blood cells', 'C. red blood cells', 'D. plasma'], correctAnswer: 'C', explanation: 'Red blood cells contain haemoglobin and transport oxygen.', difficulty: 'Easy', year: 2025 },
    { question: 'The organ that filters blood is the:', options: ['A. heart', 'B. kidney', 'C. liver', 'D. lung'], correctAnswer: 'B', explanation: 'The kidney removes wastes and regulates fluid balance.', difficulty: 'Easy', year: 2025 },
    { question: 'Which of these is a decomposer?', options: ['A. grass', 'B. mushroom', 'C. goat', 'D. lion'], correctAnswer: 'B', explanation: 'Mushrooms break down dead organic matter.', difficulty: 'Easy', year: 2025 },
    { question: 'The basic unit of life is the:', options: ['A. tissue', 'B. organ', 'C. cell', 'D. atom'], correctAnswer: 'C', explanation: 'The cell is the smallest functional unit of life.', difficulty: 'Easy', year: 2025 },
    { question: 'The process of removing waste from the body is:', options: ['A. digestion', 'B. circulation', 'C. excretion', 'D. absorption'], correctAnswer: 'C', explanation: 'Excretion removes waste products from the body.', difficulty: 'Easy', year: 2025 },
    { question: 'Which blood component helps clotting?', options: ['A. plasma', 'B. red blood cells', 'C. platelets', 'D. white blood cells'], correctAnswer: 'C', explanation: 'Platelets help prevent bleeding by clotting blood.', difficulty: 'Easy', year: 2025 },
    { question: 'Which of these is not a living thing?', options: ['A. tree', 'B. stone', 'C. bacteria', 'D. mushroom'], correctAnswer: 'B', explanation: 'A stone is non-living and does not carry out life processes.', difficulty: 'Easy', year: 2025 },
  ],
  'Agricultural Science': [
    { question: 'The process of growing crops on a farm is called:', options: ['A. processing', 'B. cultivation', 'C. irrigation', 'D. breeding'], correctAnswer: 'B', explanation: 'Cultivation involves preparing and managing land for crops.', difficulty: 'Easy', year: 2025 },
    { question: 'Which of these is a legume?', options: ['A. maize', 'B. cowpea', 'C. cassava', 'D. yam'], correctAnswer: 'B', explanation: 'Cowpea is a legume and fixes nitrogen in the soil.', difficulty: 'Easy', year: 2025 },
    { question: 'The main source of water for plants is:', options: ['A. sunlight', 'B. soil moisture', 'C. oxygen', 'D. wind'], correctAnswer: 'B', explanation: 'Plants absorb water from the soil through their roots.', difficulty: 'Easy', year: 2025 },
    { question: 'Which soil type is best for rice cultivation?', options: ['A. sandy soil', 'B. clay soil', 'C. loamy soil', 'D. rocky soil'], correctAnswer: 'B', explanation: 'Clay soil retains water well, useful for rice farming.', difficulty: 'Medium', year: 2025 },
    { question: 'The process of removing weeds from a farm is called:', options: ['A. thinning', 'B. weeding', 'C. storing', 'D. grafting'], correctAnswer: 'B', explanation: 'Weeding removes unwanted plants that compete with crops.', difficulty: 'Easy', year: 2025 },
    { question: 'The most common method of vegetative propagation in cassava is:', options: ['A. seed planting', 'B. stem cutting', 'C. layering', 'D. grafting'], correctAnswer: 'B', explanation: 'Cassava is commonly propagated using stem cuttings.', difficulty: 'Medium', year: 2025 },
    { question: 'Which of these is a macronutrient for plants?', options: ['A. iron', 'B. nitrogen', 'C. zinc', 'D. boron'], correctAnswer: 'B', explanation: 'Nitrogen is essential for plant growth and chlorophyll formation.', difficulty: 'Medium', year: 2025 },
    { question: 'A farm tool used for tilling the soil is:', options: ['A. hoe', 'B. rake', 'C. hand fork', 'D. sickle'], correctAnswer: 'A', explanation: 'A hoe is used to loosen and turn the soil.', difficulty: 'Easy', year: 2025 },
    { question: 'Which disease affects cassava?', options: ['A. blight', 'B. mosaic', 'C. rust', 'D. smut'], correctAnswer: 'B', explanation: 'Cassava mosaic virus is a common cassava disease.', difficulty: 'Medium', year: 2025 },
    { question: 'The removal of mature plants from the field is called:', options: ['A. planting', 'B. harvesting', 'C. spraying', 'D. pruning'], correctAnswer: 'B', explanation: 'Harvesting refers to collecting mature crops.', difficulty: 'Easy', year: 2025 },
  ],
  Geography: [
    { question: 'The earth rotates on its axis once every:', options: ['A. 12 hours', 'B. 24 hours', 'C. 36 hours', 'D. 48 hours'], correctAnswer: 'B', explanation: 'Earth completes one rotation in about 24 hours.', difficulty: 'Easy', year: 2025 },
    { question: 'Which is the largest ocean on earth?', options: ['A. Atlantic', 'B. Indian', 'C. Pacific', 'D. Arctic'], correctAnswer: 'C', explanation: 'The Pacific Ocean is the largest ocean.', difficulty: 'Easy', year: 2025 },
    { question: 'The scale used to measure earthquake intensity is:', options: ['A. Kelvin scale', 'B. Richter scale', 'C. Barometer', 'D. pH scale'], correctAnswer: 'B', explanation: 'The Richter scale measures earthquake magnitude.', difficulty: 'Easy', year: 2025 },
    { question: 'Which gas is most abundant in the atmosphere?', options: ['A. oxygen', 'B. nitrogen', 'C. carbon dioxide', 'D. argon'], correctAnswer: 'B', explanation: 'Nitrogen makes up most of the atmosphere.', difficulty: 'Easy', year: 2025 },
    { question: 'The process by which water changes to vapour is:', options: ['A. condensation', 'B. evaporation', 'C. freezing', 'D. infiltration'], correctAnswer: 'B', explanation: 'Evaporation turns liquid water into vapour.', difficulty: 'Easy', year: 2025 },
    { question: 'A line joining places of equal height is called:', options: ['A. equator', 'B. contour line', 'C. latitude', 'D. meridian'], correctAnswer: 'B', explanation: 'Contour lines connect points at the same elevation.', difficulty: 'Medium', year: 2025 },
    { question: 'The major source of energy on earth is:', options: ['A. wind', 'B. sunlight', 'C. water', 'D. electricity'], correctAnswer: 'B', explanation: 'The Sun is the main source of energy for Earth.', difficulty: 'Easy', year: 2025 },
    { question: 'Which continent is the largest?', options: ['A. Africa', 'B. Asia', 'C. Europe', 'D. South America'], correctAnswer: 'B', explanation: 'Asia is the largest continent by area.', difficulty: 'Easy', year: 2025 },
    { question: 'The imaginary line dividing the earth into northern and southern hemispheres is:', options: ['A. Prime Meridian', 'B. Tropic of Cancer', 'C. Equator', 'D. Arctic Circle'], correctAnswer: 'C', explanation: 'The equator divides the globe into northern and southern halves.', difficulty: 'Easy', year: 2025 },
    { question: 'Which is a renewable resource?', options: ['A. Coal', 'B. Crude oil', 'C. Wind', 'D. Natural gas'], correctAnswer: 'C', explanation: 'Wind is a renewable natural resource.', difficulty: 'Easy', year: 2025 },
  ],
  'Computer Studies': [
    { question: 'Which part of a computer is responsible for processing data?', options: ['A. Monitor', 'B. CPU', 'C. Keyboard', 'D. Printer'], correctAnswer: 'B', explanation: 'The CPU processes instructions and data.', difficulty: 'Easy', year: 2025 },
    { question: 'RAM is used for:', options: ['A. long-term storage', 'B. temporary data processing', 'C. printing data', 'D. network connection'], correctAnswer: 'B', explanation: 'RAM temporarily stores data while the system is running.', difficulty: 'Easy', year: 2025 },
    { question: 'Which of these is an input device?', options: ['A. Printer', 'B. Speaker', 'C. Mouse', 'D. Monitor'], correctAnswer: 'C', explanation: 'A mouse is used to send input to the computer.', difficulty: 'Easy', year: 2025 },
    { question: 'The main language understood by a computer is:', options: ['A. JavaScript', 'B. binary', 'C. English', 'D. Python'], correctAnswer: 'B', explanation: 'Computers process binary code.', difficulty: 'Easy', year: 2025 },
    { question: 'What does URL stand for?', options: ['A. Uniform Resource Locator', 'B. Unique Registry Link', 'C. Universal Remote Language', 'D. User Resource Locator'], correctAnswer: 'A', explanation: 'A URL identifies the location of a resource on the web.', difficulty: 'Medium', year: 2025 },
    { question: 'A software that protects a computer from malware is called:', options: ['A. browser', 'B. antivirus', 'C. word processor', 'D. spreadsheet'], correctAnswer: 'B', explanation: 'Antivirus software detects and removes malicious programs.', difficulty: 'Easy', year: 2025 },
    { question: 'Which key is used to delete the character to the right of the cursor?', options: ['A. Backspace', 'B. Delete', 'C. Enter', 'D. Shift'], correctAnswer: 'B', explanation: 'The Delete key removes the character to the right.', difficulty: 'Easy', year: 2025 },
    { question: 'A network of networks is called:', options: ['A. modem', 'B. internet', 'C. intranet', 'D. spreadsheet'], correctAnswer: 'B', explanation: 'The internet is a network of interconnected networks.', difficulty: 'Easy', year: 2025 },
    { question: 'Which of these is a spreadsheet application?', options: ['A. Excel', 'B. Word', 'C. PowerPoint', 'D. Notepad'], correctAnswer: 'A', explanation: 'Excel is used to create and manage spreadsheets.', difficulty: 'Easy', year: 2025 },
    { question: 'What does CPU stand for?', options: ['A. Central Processing Unit', 'B. Computer Power Utility', 'C. Central Program Unit', 'D. Control Processing Utility'], correctAnswer: 'A', explanation: 'CPU stands for Central Processing Unit.', difficulty: 'Easy', year: 2025 },
  ],
  'Further Mathematics': [
    { question: 'The derivative of x² is:', options: ['A. x', 'B. 2x', 'C. 2', 'D. x²'], correctAnswer: 'B', explanation: 'The derivative of x² is 2x.', difficulty: 'Medium', year: 2025 },
    { question: 'Solve: (x - 2)(x + 3) = 0.', options: ['A. x = 2 or -3', 'B. x = -2 or 3', 'C. x = 2 or 3', 'D. x = -2 or -3'], correctAnswer: 'A', explanation: 'Set each factor equal to zero.', difficulty: 'Easy', year: 2025 },
    { question: 'The value of sin 90° is:', options: ['A. 0', 'B. 1/2', 'C. 1', 'D. √3/2'], correctAnswer: 'C', explanation: 'sin 90° = 1.', difficulty: 'Easy', year: 2025 },
    { question: 'A straight line has gradient 2 and passes through (0, 3). Its equation is:', options: ['A. y = 2x + 3', 'B. y = 3x + 2', 'C. y = 2x - 3', 'D. y = x + 3'], correctAnswer: 'A', explanation: 'Using y = mx + c, m = 2 and c = 3.', difficulty: 'Medium', year: 2025 },
    { question: 'Evaluate log₁₀ 100.', options: ['A. 1', 'B. 2', 'C. 10', 'D. 100'], correctAnswer: 'B', explanation: '10² = 100, so log₁₀ 100 = 2.', difficulty: 'Easy', year: 2025 },
    { question: 'The sum of the interior angles of a triangle is:', options: ['A. 90°', 'B. 180°', 'C. 270°', 'D. 360°'], correctAnswer: 'B', explanation: 'A triangle’s interior angles sum to 180°.', difficulty: 'Easy', year: 2025 },
    { question: 'The determinant of [[2, 1],[4, 3]] is:', options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'], correctAnswer: 'A', explanation: '2×3 - 1×4 = 6 - 4 = 2.', difficulty: 'Medium', year: 2025 },
    { question: 'The coefficient of x² in 3x² + 2x + 5 is:', options: ['A. 2', 'B. 3', 'C. 5', 'D. 0'], correctAnswer: 'B', explanation: 'The coefficient of x² is 3.', difficulty: 'Easy', year: 2025 },
    { question: 'The median of 4, 7, 8, 9, 10 is:', options: ['A. 7', 'B. 8', 'C. 9', 'D. 10'], correctAnswer: 'B', explanation: 'The median is the middle value, 8.', difficulty: 'Easy', year: 2025 },
    { question: 'The quadratic formula is:', options: ['A. (-b ± √(b² - 4ac))/2a', 'B. (-b ± √(b² + 4ac))/2a', 'C. (-b ± √(4ac-b²))/2a', 'D. b ± √(b² - 4ac)'], correctAnswer: 'A', explanation: 'This is the standard quadratic formula.', difficulty: 'Medium', year: 2025 },
  ],
  'Literature in English': [
    { question: 'A play is usually divided into:', options: ['A. chapters', 'B. acts', 'C. stanzas', 'D. paragraphs'], correctAnswer: 'B', explanation: 'Plays are usually divided into acts and scenes.', difficulty: 'Easy', year: 2025 },
    { question: 'The person who writes a poem is called:', options: ['A. playwright', 'B. poet', 'C. novelist', 'D. actor'], correctAnswer: 'B', explanation: 'A poet writes poems.', difficulty: 'Easy', year: 2025 },
    { question: 'What is a metaphor?', options: ['A. a comparison using “like” or “as”', 'B. a direct comparison without “like” or “as”', 'C. repeated sound', 'D. a long speech'], correctAnswer: 'B', explanation: 'A metaphor directly compares one thing with another without using “like” or “as”.', difficulty: 'Medium', year: 2025 },
    { question: 'The main idea in a poem is called the:', options: ['A. subject', 'B. theme', 'C. stanza', 'D. title'], correctAnswer: 'B', explanation: 'Theme is the central idea or message.', difficulty: 'Easy', year: 2025 },
    { question: 'A story told in a prose form is called:', options: ['A. drama', 'B. novel', 'C. poem', 'D. lyric'], correctAnswer: 'B', explanation: 'A novel is a long fictional prose story.', difficulty: 'Easy', year: 2025 },
    { question: 'The language used to create mental pictures in literature is:', options: ['A. rhyme', 'B. imagery', 'C. rhythm', 'D. tone'], correctAnswer: 'B', explanation: 'Imagery appeals to the senses and creates vivid pictures.', difficulty: 'Medium', year: 2025 },
    { question: 'The first part of a story where characters and setting are introduced is called:', options: ['A. climax', 'B. falling action', 'C. exposition', 'D. ending'], correctAnswer: 'C', explanation: 'Exposition introduces characters, setting, and background.', difficulty: 'Medium', year: 2025 },
    { question: 'A short poem with 14 lines is called:', options: ['A. sonnet', 'B. ballad', 'C. ode', 'D. epic'], correctAnswer: 'A', explanation: 'A sonnet is a 14-line poem.', difficulty: 'Easy', year: 2025 },
    { question: 'A character that opposes the protagonist is called:', options: ['A. narrator', 'B. antagonist', 'C. hero', 'D. poet'], correctAnswer: 'B', explanation: 'The antagonist is the character that opposes the protagonist.', difficulty: 'Easy', year: 2025 },
    { question: 'The writer’s attitude toward the subject is called:', options: ['A. plot', 'B. tone', 'C. rhyme', 'D. diction'], correctAnswer: 'B', explanation: 'Tone expresses the author’s attitude.', difficulty: 'Medium', year: 2025 },
  ],
  Government: [
    { question: 'The supreme law of a country is called:', options: ['A. the constitution', 'B. the police code', 'C. the civil service rules', 'D. the electoral act'], correctAnswer: 'A', explanation: 'The constitution is the supreme law of the land.', difficulty: 'Easy', year: 2025 },
    { question: 'Which arm of government interprets the law?', options: ['A. Legislature', 'B. Executive', 'C. Judiciary', 'D. Civil service'], correctAnswer: 'C', explanation: 'The judiciary interprets and applies the law.', difficulty: 'Easy', year: 2025 },
    { question: 'The head of state in a republic is usually:', options: ['A. a king', 'B. a president', 'C. a bishop', 'D. a chief'], correctAnswer: 'B', explanation: 'In a republic, the head of state is often a president.', difficulty: 'Easy', year: 2025 },
    { question: 'A government formed by representatives elected by the people is:', options: ['A. monarchy', 'B. democracy', 'C. dictatorship', 'D. oligarchy'], correctAnswer: 'B', explanation: 'Democracy is government by the people through elected representatives.', difficulty: 'Easy', year: 2025 },
    { question: 'The body that makes laws is the:', options: ['A. executive', 'B. legislature', 'C. judiciary', 'D. police'], correctAnswer: 'B', explanation: 'The legislature creates and amends laws.', difficulty: 'Easy', year: 2025 },
    { question: 'The process of choosing leaders by voting is called:', options: ['A. education', 'B. election', 'C. appointment', 'D. investigation'], correctAnswer: 'B', explanation: 'Election is the formal process of choosing leaders by voting.', difficulty: 'Easy', year: 2025 },
    { question: 'Which is a form of political participation?', options: ['A. voting', 'B. sleeping', 'C. working', 'D. playing'], correctAnswer: 'A', explanation: 'Voting is a common form of political participation.', difficulty: 'Easy', year: 2025 },
    { question: 'The doctrine of separation of powers was mainly associated with:', options: ['A. Napoleon', 'B. Montesquieu', 'C. Lenin', 'D. Gandhi'], correctAnswer: 'B', explanation: 'Montesquieu advocated separation of powers.', difficulty: 'Medium', year: 2025 },
    { question: 'The authority to enforce laws belongs to the:', options: ['A. judiciary', 'B. legislature', 'C. executive', 'D. parliament'], correctAnswer: 'C', explanation: 'The executive enforces laws and implements government policy.', difficulty: 'Easy', year: 2025 },
    { question: 'A citizen is someone who:', options: ['A. owns a house', 'B. belongs to a state', 'C. drives a car', 'D. attends school'], correctAnswer: 'B', explanation: 'A citizen is a member of a state or nation with legal status.', difficulty: 'Easy', year: 2025 },
  ],
  Economics: [
    { question: 'The study of how people use scarce resources is called:', options: ['A. geography', 'B. economics', 'C. sociology', 'D. politics'], correctAnswer: 'B', explanation: 'Economics studies the allocation and use of scarce resources.', difficulty: 'Easy', year: 2025 },
    { question: 'Demand refers to:', options: ['A. goods produced', 'B. desire backed by purchasing power', 'C. supply in excess', 'D. government spending'], correctAnswer: 'B', explanation: 'Demand is the willingness and ability to buy at a given price.', difficulty: 'Easy', year: 2025 },
    { question: 'The price at which demand equals supply is called:', options: ['A. maximum price', 'B. equilibrium price', 'C. market price', 'D. minimum price'], correctAnswer: 'B', explanation: 'At equilibrium, quantity demanded equals quantity supplied.', difficulty: 'Medium', year: 2025 },
    { question: 'Which is a factor of production?', options: ['A. labour', 'B. market', 'C. tax', 'D. salary'], correctAnswer: 'A', explanation: 'Labour is one of the key factors of production.', difficulty: 'Easy', year: 2025 },
    { question: 'A business owned by one person is called:', options: ['A. partnership', 'B. sole proprietorship', 'C. joint stock company', 'D. cooperative'], correctAnswer: 'B', explanation: 'A sole proprietorship is owned and run by one person.', difficulty: 'Easy', year: 2025 },
    { question: 'Inflation means:', options: ['A. falling prices', 'B. rising prices', 'C. steady prices', 'D. lower income'], correctAnswer: 'B', explanation: 'Inflation is the general rise in prices of goods and services.', difficulty: 'Easy', year: 2025 },
    { question: 'The Central Bank of a country is responsible for:', options: ['A. making school policies', 'B. controlling money supply', 'C. building roads', 'D. collecting school fees'], correctAnswer: 'B', explanation: 'The central bank manages monetary policy and money supply.', difficulty: 'Medium', year: 2025 },
    { question: 'Which is a direct tax?', options: ['A. VAT', 'B. import duty', 'C. income tax', 'D. excise duty'], correctAnswer: 'C', explanation: 'Income tax is directly imposed on individuals or businesses.', difficulty: 'Medium', year: 2025 },
    { question: 'A person who creates goods and services is called:', options: ['A. consumer', 'B. producer', 'C. seller', 'D. importer'], correctAnswer: 'B', explanation: 'Producers create goods and services to satisfy wants.', difficulty: 'Easy', year: 2025 },
    { question: 'The reward for labour is:', options: ['A. rent', 'B. wages', 'C. profit', 'D. interest'], correctAnswer: 'B', explanation: 'Wages are the reward for labour.', difficulty: 'Easy', year: 2025 },
  ],
  Commerce: [
    { question: 'Commerce involves the buying and selling of:', options: ['A. ideas only', 'B. goods and services', 'C. land only', 'D. personal feelings'], correctAnswer: 'B', explanation: 'Commerce covers trade in goods and services.', difficulty: 'Easy', year: 2025 },
    { question: 'A retailer buys goods from a wholesaler and sells to:', options: ['A. governments only', 'B. final consumers', 'C. banks', 'D. schools'], correctAnswer: 'B', explanation: 'Retailers sell to final consumers.', difficulty: 'Easy', year: 2025 },
    { question: 'The document that shows goods sold on credit is:', options: ['A. invoice', 'B. receipt', 'C. cheque', 'D. memo'], correctAnswer: 'A', explanation: 'An invoice records goods sold and amounts due.', difficulty: 'Medium', year: 2025 },
    { question: 'A cheque is used for:', options: ['A. receiving goods', 'B. transferring money', 'C. counting stock', 'D. advertising'], correctAnswer: 'B', explanation: 'A cheque is a payment instrument used to transfer money.', difficulty: 'Easy', year: 2025 },
    { question: 'The act of buying and selling goods with the aim of profit is called:', options: ['A. farming', 'B. trade', 'C. teaching', 'D. lawmaking'], correctAnswer: 'B', explanation: 'Trade is the exchange of goods and services for profit or value.', difficulty: 'Easy', year: 2025 },
    { question: 'A wholesaler sells mainly to:', options: ['A. final consumers', 'B. retailers', 'C. schools', 'D. hospitals'], correctAnswer: 'B', explanation: 'Wholesalers sell in bulk to retailers or other businesses.', difficulty: 'Easy', year: 2025 },
    { question: 'Money used for immediate purchase is called:', options: ['A. credit', 'B. cash', 'C. stock', 'D. debt'], correctAnswer: 'B', explanation: 'Cash is money available immediately for payment.', difficulty: 'Easy', year: 2025 },
    { question: 'The process of checking stock levels is called:', options: ['A. auditing', 'B. inventory control', 'C. advertising', 'D. pricing'], correctAnswer: 'B', explanation: 'Inventory control manages and monitors stock levels.', difficulty: 'Medium', year: 2025 },
    { question: 'Which is a service business?', options: ['A. bakery', 'B. transport company', 'C. shoe shop', 'D. farm'], correctAnswer: 'B', explanation: 'A transport company sells transport services.', difficulty: 'Easy', year: 2025 },
    { question: 'A receipt serves as proof of:', options: ['A. training', 'B. payment', 'C. production', 'D. invention'], correctAnswer: 'B', explanation: 'A receipt shows that payment has been made.', difficulty: 'Easy', year: 2025 },
  ],
  'Financial Accounting': [
    { question: 'Accounting is mainly used to:', options: ['A. entertain staff', 'B. record and report financial transactions', 'C. advertise goods', 'D. train workers'], correctAnswer: 'B', explanation: 'Accounting records and communicates financial information.', difficulty: 'Easy', year: 2025 },
    { question: 'The accounting equation is:', options: ['A. Assets = Liabilities + Capital', 'B. Revenue = Cost + Profit', 'C. Cash = Profit - Loss', 'D. Stock = Sales - Capital'], correctAnswer: 'A', explanation: 'The accounting equation is Assets = Capital + Liabilities.', difficulty: 'Medium', year: 2025 },
    { question: 'A book of original entry is called:', options: ['A. ledger', 'B. journal', 'C. invoice', 'D. statement'], correctAnswer: 'B', explanation: 'The journal is the first book for recording transactions.', difficulty: 'Easy', year: 2025 },
    { question: 'An amount owed by a business is called:', options: ['A. asset', 'B. liability', 'C. revenue', 'D. expense'], correctAnswer: 'B', explanation: 'Liabilities are obligations owed to others.', difficulty: 'Easy', year: 2025 },
    { question: 'The owner’s interest in the business is called:', options: ['A. sales', 'B. capital', 'C. stock', 'D. liability'], correctAnswer: 'B', explanation: 'Capital refers to the owner’s investment in the business.', difficulty: 'Easy', year: 2025 },
    { question: 'Which is a current asset?', options: ['A. land', 'B. cash', 'C. building', 'D. machinery'], correctAnswer: 'B', explanation: 'Cash is a current asset because it is readily convertible to cash.', difficulty: 'Medium', year: 2025 },
    { question: 'The sum of all expenses and losses is called:', options: ['A. revenue', 'B. profit', 'C. expenses', 'D. capital'], correctAnswer: 'C', explanation: 'Expenses represent the costs incurred in running the business.', difficulty: 'Easy', year: 2025 },
    { question: 'A debit entry normally increases:', options: ['A. revenue', 'B. liabilities', 'C. assets', 'D. capital'], correctAnswer: 'C', explanation: 'A debit increases assets, expenses, and drawings.', difficulty: 'Medium', year: 2025 },
    { question: 'The final account that shows profit or loss is:', options: ['A. trading account', 'B. profit and loss account', 'C. balance sheet', 'D. cash book'], correctAnswer: 'B', explanation: 'The profit and loss account summarizes income and expenses.', difficulty: 'Easy', year: 2025 },
    { question: 'An asset that lasts more than one year is a:', options: ['A. current asset', 'B. fixed asset', 'C. intangible asset', 'D. liability'], correctAnswer: 'B', explanation: 'Fixed assets are long-term items like equipment and buildings.', difficulty: 'Easy', year: 2025 },
  ],
  'Christian Religious Studies': [
    { question: 'The first book of the Bible is:', options: ['A. Exodus', 'B. Genesis', 'C. Leviticus', 'D. Deuteronomy'], correctAnswer: 'B', explanation: 'Genesis is the first book of the Bible.', difficulty: 'Easy', year: 2025 },
    { question: 'Who was the first man created by God?', options: ['A. Abel', 'B. Noah', 'C. Adam', 'D. Moses'], correctAnswer: 'C', explanation: 'Adam was the first man created by God.', difficulty: 'Easy', year: 2025 },
    { question: 'The Great Commission was given to:', options: ['A. Peter', 'B. Moses', 'C. Abraham', 'D. David'], correctAnswer: 'A', explanation: 'Jesus commissioned His disciples to go and make disciples.', difficulty: 'Medium', year: 2025 },
    { question: 'Who led the Israelites out of Egypt?', options: ['A. Joshua', 'B. Moses', 'C. Joseph', 'D. Aaron'], correctAnswer: 'B', explanation: 'Moses led the Israelites out of Egyptian bondage.', difficulty: 'Easy', year: 2025 },
    { question: 'The fruit in the Garden of Eden that Eve ate was:', options: ['A. guava', 'B. fig', 'C. apple', 'D. palm fruit'], correctAnswer: 'B', explanation: 'The Bible describes the fruit as the forbidden fruit, often symbolically represented as an apple.', difficulty: 'Medium', year: 2025 },
    { question: 'Which miracle was performed by Jesus at Cana?', options: ['A. walking on water', 'B. raising Lazarus', 'C. turning water into wine', 'D. healing the blind'], correctAnswer: 'C', explanation: 'Jesus turned water into wine at the wedding in Cana.', difficulty: 'Medium', year: 2025 },
    { question: 'The Sermon on the Mount was preached by:', options: ['A. John the Baptist', 'B. Jesus', 'C. Paul', 'D. Peter'], correctAnswer: 'B', explanation: 'Jesus taught the Sermon on the Mount.', difficulty: 'Easy', year: 2025 },
    { question: 'Who betrayed Jesus?', options: ['A. Judas Iscariot', 'B. John', 'C. Thomas', 'D. Simon'], correctAnswer: 'A', explanation: 'Judas Iscariot betrayed Jesus.', difficulty: 'Easy', year: 2025 },
    { question: 'The resurrection of Jesus is celebrated on:', options: ['A. Christmas', 'B. Easter', 'C. Pentecost', 'D. Advent'], correctAnswer: 'B', explanation: 'Easter celebrates the resurrection of Christ.', difficulty: 'Easy', year: 2025 },
    { question: 'Who was the king of Israel known for wisdom?', options: ['A. Saul', 'B. Solomon', 'C. Ahab', 'D. Jeroboam'], correctAnswer: 'B', explanation: 'King Solomon was renowned for his wisdom.', difficulty: 'Easy', year: 2025 },
  ],
  'Islamic Religious Studies': [
    { question: 'The first pillar of Islam is:', options: ['A. fasting', 'B. prayer', 'C. belief in one God', 'D. charity'], correctAnswer: 'C', explanation: 'The first pillar is the declaration of faith (Shahadah).', difficulty: 'Easy', year: 2025 },
    { question: 'The holy book of Islam is:', options: ['A. Torah', 'B. Bible', 'C. Quran', 'D. Psalms'], correctAnswer: 'C', explanation: 'The Quran is the final revealed book of Islam.', difficulty: 'Easy', year: 2025 },
    { question: 'The city of Makkah is important because it is the location of:', options: ['A. the Kaaba', 'B. the Vatican', 'C. Jerusalem temple', 'D. Mount Sinai'], correctAnswer: 'A', explanation: 'The Kaaba is located in Makkah and is the holiest site in Islam.', difficulty: 'Easy', year: 2025 },
    { question: 'The month of fasting in Islam is:', options: ['A. Shawwal', 'B. Ramadan', 'C. Muharram', 'D. Rajab'], correctAnswer: 'B', explanation: 'Muslims fast during the month of Ramadan.', difficulty: 'Easy', year: 2025 },
    { question: 'Who is the last prophet in Islam?', options: ['A. Musa', 'B. Ibrahim', 'C. Muhammad', 'D. Isa'], correctAnswer: 'C', explanation: 'Prophet Muhammad (SAW) is the last prophet.', difficulty: 'Easy', year: 2025 },
    { question: 'The five daily prayers are called:', options: ['A. Zakat', 'B. Sawm', 'C. Salah', 'D. Hajj'], correctAnswer: 'C', explanation: 'Salah is the obligatory prayer performed five times daily.', difficulty: 'Easy', year: 2025 },
    { question: 'The pilgrimage to Makkah is called:', options: ['A. Umrah', 'B. Hajj', 'C. Zakat', 'D. Fasting'], correctAnswer: 'B', explanation: 'Hajj is the annual pilgrimage to Makkah.', difficulty: 'Easy', year: 2025 },
    { question: 'The companion who accepted Islam in the early days was:', options: ['A. Abu Bakr', 'B. Umar', 'C. Bilal', 'D. Ali'], correctAnswer: 'C', explanation: 'Bilal was among the first to accept Islam and was known for his call to prayer.', difficulty: 'Medium', year: 2025 },
    { question: 'Al-Qadr means:', options: ['A. destiny', 'B. dawn prayer', 'C. fasting', 'D. pilgrimage'], correctAnswer: 'A', explanation: 'Al-Qadr is the night of decree and also means divine decree or destiny.', difficulty: 'Medium', year: 2025 },
    { question: 'The night journey of Prophet Muhammad is known as:', options: ['A. Isra and Mi’raj', 'B. Hegira', 'C. Fajr', 'D. Taqwa'], correctAnswer: 'A', explanation: 'Isra and Mi’raj refers to the Prophet’s night journey and ascension.', difficulty: 'Medium', year: 2025 },
  ],
  'History': [
    { question: 'The first president of Nigeria was:', options: ['A. Nnamdi Azikiwe', 'B. Yakubu Gowon', 'C. Olusegun Obasanjo', 'D. Muhammadu Buhari'], correctAnswer: 'A', explanation: 'Nnamdi Azikiwe became the first president of Nigeria in 1963.', difficulty: 'Easy', year: 2025 },
    { question: 'The slave trade involved trading in:', options: ['A. gold', 'B. labourers', 'C. books', 'D. machines'], correctAnswer: 'B', explanation: 'The transatlantic slave trade involved humans exploited as labour.', difficulty: 'Medium', year: 2025 },
    { question: 'The Berlin Conference was held in:', options: ['A. 1884', 'B. 1900', 'C. 1850', 'D. 1914'], correctAnswer: 'A', explanation: 'The Berlin Conference took place in 1884–1885.', difficulty: 'Medium', year: 2025 },
    { question: 'The first colonial governor-general in Nigeria was:', options: ['A. Lord Lugard', 'B. Lord Frederick', 'C. Lord Halifax', 'D. Lord Salisbury'], correctAnswer: 'A', explanation: 'Lord Lugard was the first governor-general of Nigeria.', difficulty: 'Medium', year: 2025 },
    { question: 'The Nigeria-Biafra war lasted from:', options: ['A. 1965-1967', 'B. 1967-1970', 'C. 1960-1963', 'D. 1970-1973'], correctAnswer: 'B', explanation: 'The war lasted from 1967 to 1970.', difficulty: 'Easy', year: 2025 },
    { question: 'The first African nation to achieve independence in 1957 was:', options: ['A. Ghana', 'B. Nigeria', 'C. Liberia', 'D. Kenya'], correctAnswer: 'A', explanation: 'Ghana gained independence in 1957.', difficulty: 'Easy', year: 2025 },
    { question: 'The famous ancient city of Rome was in:', options: ['A. Africa', 'B. Europe', 'C. Asia', 'D. America'], correctAnswer: 'B', explanation: 'Rome is in Europe.', difficulty: 'Easy', year: 2025 },
    { question: 'The Great Wall of China was built to defend against:', options: ['A. earthquakes', 'B. invaders', 'C. floods', 'D. pirates'], correctAnswer: 'B', explanation: 'The Great Wall was constructed to protect against invasion.', difficulty: 'Easy', year: 2025 },
    { question: 'Mungo Park is associated with:', options: ['A. football', 'B. exploration of the Niger River', 'C. invention of electricity', 'D. first world war'], correctAnswer: 'B', explanation: 'Mungo Park explored parts of West Africa, especially the Niger.', difficulty: 'Medium', year: 2025 },
    { question: 'The Industrial Revolution began in:', options: ['A. France', 'B. England', 'C. Egypt', 'D. Nigeria'], correctAnswer: 'B', explanation: 'The Industrial Revolution began in England in the late 18th century.', difficulty: 'Easy', year: 2025 },
  ],
  French: [
    { question: 'Bonjour means:', options: ['A. Good morning', 'B. Goodbye', 'C. Thank you', 'D. Please'], correctAnswer: 'A', explanation: 'Bonjour means good morning or hello.', difficulty: 'Easy', year: 2025 },
    { question: 'Merci means:', options: ['A. sorry', 'B. thanks', 'C. welcome', 'D. bye'], correctAnswer: 'B', explanation: 'Merci means thank you.', difficulty: 'Easy', year: 2025 },
    { question: 'Comment ça va? means:', options: ['A. How are you?', 'B. What is your name?', 'C. I am fine', 'D. Where are you?'], correctAnswer: 'A', explanation: 'This is the French phrase for “How are you?”', difficulty: 'Easy', year: 2025 },
    { question: 'La maison means:', options: ['A. school', 'B. house', 'C. tree', 'D. market'], correctAnswer: 'B', explanation: 'Maison means house.', difficulty: 'Easy', year: 2025 },
    { question: 'Le livre means:', options: ['A. pen', 'B. book', 'C. desk', 'D. door'], correctAnswer: 'B', explanation: 'Le livre is the French word for book.', difficulty: 'Easy', year: 2025 },
    { question: 'Mon ami means:', options: ['A. my teacher', 'B. my friend', 'C. my father', 'D. my brother'], correctAnswer: 'B', explanation: 'Mon ami means my friend.', difficulty: 'Easy', year: 2025 },
    { question: 'Oui means:', options: ['A. no', 'B. yes', 'C. please', 'D. sorry'], correctAnswer: 'B', explanation: 'Oui means yes.', difficulty: 'Easy', year: 2025 },
    { question: 'L’ecole means:', options: ['A. church', 'B. school', 'C. library', 'D. office'], correctAnswer: 'B', explanation: 'L’école means school.', difficulty: 'Easy', year: 2025 },
    { question: 'Le garçon means:', options: ['A. girl', 'B. boy', 'C. teacher', 'D. child'], correctAnswer: 'B', explanation: 'Le garçon translates to boy.', difficulty: 'Easy', year: 2025 },
    { question: 'Bonne nuit means:', options: ['A. good afternoon', 'B. good night', 'C. thank you', 'D. hello'], correctAnswer: 'B', explanation: 'Bonne nuit means good night.', difficulty: 'Easy', year: 2025 },
  ],
}

const builtQuestionBank = (() => {
  const bank = []
  Object.entries(subjectQuestionTemplates).forEach(([subject, templates]) => {
    for (let i = 0; i < 40; i += 1) {
      const template = templates[i % templates.length]
      const optionEntries = Array.isArray(template.options) ? template.options : Object.entries(template.options)
      bank.push({
        id: bank.length + 1,
        subject,
        department: departments.find((dept) => dept.subjects.includes(subject))?.name || 'Science',
        question: template.question,
        options: optionEntries.map((entry) => {
          if (Array.isArray(entry)) return entry[1]
          return entry
        }),
        correctAnswer: template.correctAnswer,
        explanation: template.explanation,
        difficulty: template.difficulty,
        year: template.year,
      })
    }
  })
  return bank
})()

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

const STORAGE_KEYS = {
  students: 'ar_rashaad_students',
  currentUser: 'ar_rashaad_current_user',
  questions: 'ar_rashaad_questions',
  results: 'ar_rashaad_results',
  settings: 'ar_rashaad_settings',
  admins: 'ar_rashaad_admins',
  examSession: 'ar_rashaad_exam_session',
}

const getDepartmentSubjects = (departmentName) => {
  const department = departments.find((item) => item.name === departmentName)
  return department ? department.subjects : []
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
  currentUser: null,
  students: [],
  exam: null,
  result: null,
  resultModalOpen: false,
  notification: null,
  practice: { department: 'Science', subject: 'Mathematics', count: 10, duration: 30 },
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
  if (screen === state.screen) return

  if (replaceCurrent) {
    if (state.screenHistory[state.screenHistory.length - 1] === screen) state.screenHistory.pop()
  } else {
    state.screenHistory.push(state.screen)
  }

  state.screen = screen
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

  if (!admins.length) {
    writeStorage(STORAGE_KEYS.admins, adminCredentials)
  }

  if (!questions.length) {
    writeStorage(STORAGE_KEYS.questions, builtQuestionBank)
  }

  if (!settings.scoreMessages) {
    writeStorage(STORAGE_KEYS.settings, { theme: settings.theme || 'light', scoreMessages })
  }

  state.students = readStorage(STORAGE_KEYS.students, [])
  state.currentUser = readStorage(STORAGE_KEYS.currentUser, null)
}

const getQuestionBank = () => readStorage(STORAGE_KEYS.questions, builtQuestionBank)

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
  const departmentSubjects = getDepartmentSubjects(department)
  const requestedSubject = options.subject || state.practice.subject
  const subject = departmentSubjects.includes(requestedSubject) ? requestedSubject : departmentSubjects[0]
  const count = Number(options.count || state.practice.count || 10)

  if (options.mode === 'full') {
    const subjects = ['Use of English', ...departmentSubjects.filter((entry) => entry !== 'Use of English').slice(0, 3)]
    return shuffle(subjects.flatMap((entry) => bank.filter((q) => q.subject === entry).slice(0, 40)))
  }

  const filtered = bank.filter((q) => q.subject === subject && departmentSubjects.includes(q.subject))
  return shuffle(filtered).slice(0, Math.min(count, filtered.length))
}

const createExam = (mode = 'Practice') => {
  if (!state.currentUser) {
    navigateToScreen('landing')
    return
  }

  const department = state.currentUser.department
  const departmentSubjects = getDepartmentSubjects(department)
  const subject = departmentSubjects.includes(state.practice.subject) ? state.practice.subject : departmentSubjects[0]
  state.practice.department = department
  state.practice.subject = subject
  const count = Number(state.practice.count) || 10
  const duration = Number(state.practice.duration) || 30

  const questions = mode === 'Full JAMB Mock' ? buildExamQuestions({ mode: 'full' }) : buildExamQuestions({ department, subject, count })

  state.exam = {
    id: Date.now(),
    mode,
    subject: mode === 'Full JAMB Mock' ? 'Full JAMB Practice' : subject,
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
      </nav>
    </header>

    <main class="hero-shell">
      <section class="hero-copy">
        <p class="eyebrow">Practice Smart. Build Confidence. Achieve Your Goal.</p>
        <h1>AR-RASHAAD ACADEMY</h1>
        <h2>JAMB CBT PRACTICE PORTAL</h2>
        <p class="subtext">Welcome to Ar-Rashaad Academy's JAMB CBT Practice Portal. Experience realistic examinations, track your performance and prepare confidently for your UTME.</p>
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
          <ul>
            <li>40 questions per subject</li>
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
                <select name="department">
                  ${departments.map((dept) => `<option value="${dept.name}">${dept.name}</option>`).join('')}
                </select>
              </label>
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
            <input type="text" name="username" value="admin" required />
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
  state.practice.department = user.department
  const departmentSubjects = getDepartmentSubjects(user.department)
  if (!departmentSubjects.includes(state.practice.subject)) {
    state.practice.subject = departmentSubjects[0]
  }
  const subjectOptions = getDepartmentSubjects(state.practice.department)

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
          ${['START FULL JAMB MOCK', 'START PRACTICE TEST', 'VIEW MY RESULTS', 'SUBJECT PRACTICE', 'EXAMINATION HISTORY'].map((card) => `<button class="dashboard-card" data-action="dashboard-card" data-card="${card}" type="button">${card}</button>`).join('')}
        </div>

        <section class="practice-panel">
          <div class="practice-form-head"><h3>Practice Setup</h3></div>
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
                ${[10, 20, 30, 40, 60].map((count) => `<option value="${count}" ${Number(state.practice.count) === count ? 'selected' : ''}>${count}</option>`).join('')}
              </select>
            </label>
            <label>Duration (mins)
              <select data-field="duration">
                ${[10, 20, 30, 45, 60, 120].map((mins) => `<option value="${mins}" ${Number(state.practice.duration) === mins ? 'selected' : ''}>${mins}</option>`).join('')}
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
              const status = state.exam.currentIndex === index ? 'current' : state.exam.flagged[index] ? 'flagged' : state.exam.answers[index] ? 'answered' : 'unanswered'
              return `<button class="nav-question ${status}" data-action="navigate-to" data-index="${index}" type="button">${index + 1}</button>`
            }).join('')}
          </div>
        </aside>

        <section class="question-panel">
          <div class="question-topline"><span>Question ${state.exam.currentIndex + 1} of ${state.exam.questions.length}</span><span>${currentQuestion.subject || state.exam.subject}</span></div>
          <h3>${currentQuestion.question}</h3>
          <div class="options-list">
            ${['A', 'B', 'C', 'D'].map((optionKey, index) => `
              <button class="answer-option ${state.exam.answers[state.exam.currentIndex] === optionKey ? 'selected' : ''}" data-action="answer" data-option="${optionKey}" type="button">
                <span class="answer-label">${optionKey}</span>
                <span>${currentQuestion.options[index].replace(/^[A-D]\.?\s*/, '')}</span>
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
  if (!state.result) return '<div></div>'

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
                  <p>${question.question}</p>
                  <p><strong>Your answer:</strong> ${safeSelected}</p>
                  <p><strong>Correct answer:</strong> ${question.correctAnswer}</p>
                  <p><strong>Explanation:</strong> ${question.explanation}</p>
                </div>
              `
            }).join('')}
          </div>
        </section>
      </main>
    </div>
  `
}

const renderAdmin = () => {
  const allStudents = getStudents()
  const allResults = getResults()
  const totalStudents = allStudents.length
  const totalCompleted = allResults.length
  const average = totalCompleted ? Math.round(allResults.reduce((sum, item) => sum + item.score, 0) / totalCompleted) : 0

  return `
    <div class="page admin-page">
      <header class="topbar">
        <div class="brand-block">
          <img src="${schoolLogo}" alt="Ar-Rashaad Academy logo" class="brand-mark" />
        </div>
        <div class="topbar-actions">
          ${renderBackButton()}
          <button class="pill-button" data-action="logout">Logout</button>
        </div>
      </header>

      <main class="admin-main">
        <section class="admin-overview">
          <div class="summary-card"><span>Total Students</span><strong>${totalStudents}</strong></div>
          <div class="summary-card"><span>Science Students</span><strong>${allStudents.filter((s) => s.department === 'Science').length}</strong></div>
          <div class="summary-card"><span>Art Students</span><strong>${allStudents.filter((s) => s.department === 'Art').length}</strong></div>
          <div class="summary-card"><span>Commercial Students</span><strong>${allStudents.filter((s) => s.department === 'Commercial').length}</strong></div>
          <div class="summary-card"><span>Total Exams</span><strong>${totalCompleted}</strong></div>
          <div class="summary-card"><span>Average Score</span><strong>${average}</strong></div>
        </section>

        <section class="admin-grid">
          <div class="admin-panel">
            <h3>Student Management</h3>
            <ul>
              <li>Add student</li>
              <li>Edit student</li>
              <li>Delete student</li>
              <li>Search students</li>
              <li>View examination history</li>
            </ul>
          </div>
          <div class="admin-panel">
            <h3>Question Management</h3>
            <ul>
              <li>Add question</li>
              <li>Edit question</li>
              <li>Delete question</li>
              <li>Filter by subject</li>
              <li>Add explanations</li>
            </ul>
          </div>
          <div class="admin-panel">
            <h3>Exam Management</h3>
            <ul>
              <li>Create mock examination</li>
              <li>Set duration</li>
              <li>Manage subjects</li>
              <li>Enable or disable exams</li>
              <li>View result reports</li>
            </ul>
          </div>
        </section>

        <section class="admin-panel large-panel">
          <h3>Recent Results</h3>
          <table>
            <thead>
              <tr><th>Student</th><th>Department</th><th>Score</th><th>Percentage</th></tr>
            </thead>
            <tbody>
              ${allResults.slice(0, 8).map((result) => `
                <tr>
                  <td>${result.student.fullName}</td>
                  <td>${result.department}</td>
                  <td>${result.score}</td>
                  <td>${result.percentage}%</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  `
}

const render = () => {
  const app = document.querySelector('#app')
  if (!app) return

  if (state.screen === 'landing') app.innerHTML = renderLanding()
  else if (state.screen === 'login') app.innerHTML = renderAuthLayout('login')
  else if (state.screen === 'register') app.innerHTML = renderAuthLayout('register')
  else if (state.screen === 'forgot-password') app.innerHTML = renderPasswordRecovery()
  else if (state.screen === 'dashboard') app.innerHTML = renderDashboard()
  else if (state.screen === 'exam') app.innerHTML = renderExam()
  else if (state.screen === 'results') app.innerHTML = renderResults()
  else if (state.screen === 'admin') app.innerHTML = renderAdminLogin()
  else if (state.screen === 'admin-dashboard') app.innerHTML = renderAdmin()

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
  if (target === 'dashboard' && !state.currentUser) {
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
    saveCurrentUser()
    state.screenHistory = []
    state.screen = 'landing'
    render()
  }

  if (action === 'dashboard-card') {
    const card = target.dataset.card
    if (card.includes('RESULT')) {
      navigateToScreen('results')
      return
    }
    if (card.includes('FULL')) {
      state.practice.department = state.currentUser.department
      state.practice.subject = 'Use of English'
      state.practice.count = 180
      state.practice.duration = 120
      createExam('Full JAMB Mock')
      return
    }
    if (card.includes('PRACTICE')) {
      state.practice.department = state.currentUser.department
      const subjects = getDepartmentSubjects(state.currentUser.department)
      state.practice.subject = subjects.includes('Mathematics') ? 'Mathematics' : subjects[0]
      state.practice.count = 20
      state.practice.duration = 30
      createExam('Practice Test')
    }
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
      navigateToScreen('dashboard', { replaceCurrent: true })
      return
    }
    state.resultModalOpen = false
    navigateToScreen('dashboard', { replaceCurrent: true })
  }
})

document.addEventListener('submit', (event) => {
  const form = event.target
  if (!(form instanceof HTMLFormElement)) return

  event.preventDefault()

  if (form.id === 'student-recovery-form') {
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

  if (form.id === 'student-register-form') {
    const formData = new FormData(form)
    const fullName = formData.get('fullName')?.toString().trim().replace(/\s+/g, ' ')
    const department = formData.get('department')?.toString()
    const password = formData.get('password')?.toString()
    const confirmPassword = formData.get('confirmPassword')?.toString()

    if (!fullName || !department || !password || !confirmPassword) {
      showNotification('Please complete all required registration fields.')
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
    const newStudent = { fullName, regNumber, department, password, createdAt: new Date().toISOString() }
    students.push(newStudent)
    writeStorage(STORAGE_KEYS.students, students)
    state.currentUser = newStudent
    saveCurrentUser()
    navigateToScreen('dashboard', { replaceCurrent: true })
    return
  }

  if (form.id === 'student-login-form') {
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

  if (form.id === 'admin-login-form') {
    const formData = new FormData(form)
    const username = formData.get('username')?.toString().trim()
    const password = formData.get('password')?.toString()

    if (!username || !password) {
      showNotification('Enter the admin username and password to sign in.')
      return
    }

    const admin = readStorage(STORAGE_KEYS.admins, []).find((entry) => entry.username === username && entry.password === password)
    if (!admin) {
      showNotification('We couldn’t sign in to the admin account. Check the username and password, then try again.')
      return
    }

    navigateToScreen('admin-dashboard')
  }
})

document.addEventListener('change', (event) => {
  const target = event.target
  if (!(target instanceof HTMLSelectElement)) return

  const field = target.dataset.field
  if (!field) return

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
