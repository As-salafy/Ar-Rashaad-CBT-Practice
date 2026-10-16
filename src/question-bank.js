const questionTemplates = {
  'Use of English': [
    { question: 'Choose the word nearest in meaning to “meticulous” as used in the sentence: The editor was meticulous in checking every reference.', options: ['Careless', 'Thorough', 'Impatient', 'Uncertain'], correctAnswer: 'B', explanation: 'Meticulous means showing great care and attention to detail.', difficulty: 'Medium' },
    { question: 'Choose the option that best completes the sentence: Neither the coach nor the players ____ willing to cancel the match.', options: ['was', 'were', 'is', 'has been'], correctAnswer: 'B', explanation: 'With neither...nor, the verb agrees with the nearer subject, “players”.', difficulty: 'Medium' },
    { question: 'Choose the option opposite in meaning to “transient”.', options: ['Brief', 'Temporary', 'Permanent', 'Uncertain'], correctAnswer: 'C', explanation: 'Transient means lasting only a short time; permanent means lasting indefinitely.', difficulty: 'Easy' },
    { question: 'In the sentence “The committee called off the meeting,” the phrasal verb “called off” means', options: ['announced', 'postponed indefinitely', 'cancelled', 'attended'], correctAnswer: 'C', explanation: 'To call off an event is to cancel it.', difficulty: 'Easy' },
    { question: 'Choose the correctly punctuated sentence.', options: ['After the rain stopped, the children returned to the field.', 'After the rain stopped the children, returned to the field.', 'After, the rain stopped the children returned to the field.', 'After the rain, stopped the children returned to the field.'], correctAnswer: 'A', explanation: 'The introductory clause is correctly separated from the main clause by a comma.', difficulty: 'Easy' },
    { question: 'Choose the word that best completes the sentence: The witness gave a ____ account of the events, leaving no important detail out.', options: ['comprehensive', 'reluctant', 'casual', 'ambiguous'], correctAnswer: 'A', explanation: 'A comprehensive account is complete and covers the important details.', difficulty: 'Medium' },
  ],
  Mathematics: [
    { question: 'Solve the simultaneous equations 2x + y = 11 and x - y = 1.', options: ['x = 3, y = 5', 'x = 4, y = 3', 'x = 5, y = 1', 'x = 6, y = -1'], correctAnswer: 'B', explanation: 'Adding the equations gives 3x = 12, so x = 4 and y = 3.', difficulty: 'Medium' },
    { question: 'A trader buys an article for ₦8,000 and sells it for ₦9,200. What is the percentage profit?', options: ['12%', '15%', '18%', '20%'], correctAnswer: 'B', explanation: 'Profit = ₦1,200; percentage profit = (1,200 / 8,000) × 100 = 15%.', difficulty: 'Medium' },
    { question: 'Find the sum of the first 12 terms of the arithmetic progression 5, 8, 11, ...', options: ['234', '246', '258', '270'], correctAnswer: 'C', explanation: 'S12 = 12/2 × [2(5) + 11(3)] = 6 × 43 = 258.', difficulty: 'Hard' },
    { question: 'If sin θ = 3/5 and θ is acute, find cos θ.', options: ['2/5', '3/4', '4/5', '5/4'], correctAnswer: 'C', explanation: 'Using sin²θ + cos²θ = 1 gives cos θ = √(1 - 9/25) = 4/5.', difficulty: 'Medium' },
    { question: 'A bag contains 4 red and 6 blue balls. One ball is selected at random. What is the probability that it is red?', options: ['1/5', '2/5', '3/5', '4/5'], correctAnswer: 'B', explanation: 'There are 4 red balls out of 10, so the probability is 4/10 = 2/5.', difficulty: 'Easy' },
    { question: 'The interior angles of a polygon sum to 1,080°. How many sides has the polygon?', options: ['6', '7', '8', '9'], correctAnswer: 'C', explanation: '(n - 2) × 180° = 1,080°, so n - 2 = 6 and n = 8.', difficulty: 'Medium' },
  ],
  Physics: [
    { question: 'A car increases its velocity uniformly from 5 m/s to 25 m/s in 4 s. What is its acceleration?', options: ['4 m/s²', '5 m/s²', '6 m/s²', '7.5 m/s²'], correctAnswer: 'B', explanation: 'Acceleration = change in velocity / time = (25 - 5) / 4 = 5 m/s².', difficulty: 'Easy' },
    { question: 'A 2 kg object is lifted vertically through 5 m. Taking g = 10 m/s², what is the gain in gravitational potential energy?', options: ['25 J', '50 J', '100 J', '250 J'], correctAnswer: 'C', explanation: 'Potential energy gained = mgh = 2 × 10 × 5 = 100 J.', difficulty: 'Easy' },
    { question: 'A 12 V battery is connected across a 4 Ω resistor. What current flows?', options: ['0.33 A', '2 A', '3 A', '48 A'], correctAnswer: 'C', explanation: 'By Ohm’s law, I = V/R = 12/4 = 3 A.', difficulty: 'Easy' },
    { question: 'A wave has frequency 50 Hz and wavelength 0.8 m. Find its speed.', options: ['40 m/s', '50 m/s', '62.5 m/s', '80 m/s'], correctAnswer: 'A', explanation: 'Wave speed = frequency × wavelength = 50 × 0.8 = 40 m/s.', difficulty: 'Medium' },
    { question: 'Which change will increase the capacitance of a parallel-plate capacitor?', options: ['Increasing plate separation', 'Reducing plate area', 'Inserting a dielectric between the plates', 'Removing the dielectric'], correctAnswer: 'C', explanation: 'A dielectric increases the permittivity between the plates and therefore increases capacitance.', difficulty: 'Medium' },
    { question: 'An object is placed beyond 2F of a converging lens. Its image is', options: ['virtual, upright and enlarged', 'real, inverted and diminished', 'real, upright and same size', 'virtual, inverted and diminished'], correctAnswer: 'B', explanation: 'For an object beyond 2F, a converging lens forms a real, inverted, diminished image between F and 2F.', difficulty: 'Medium' },
  ],
  Chemistry: [
    { question: 'How many moles are present in 9.0 g of water? (H = 1, O = 16)', options: ['0.25 mol', '0.50 mol', '1.0 mol', '2.0 mol'], correctAnswer: 'B', explanation: 'Molar mass of water is 18 g/mol; 9/18 = 0.50 mol.', difficulty: 'Easy' },
    { question: 'Which substance will turn damp red litmus paper blue?', options: ['Hydrogen chloride gas', 'Ammonia gas', 'Carbon dioxide', 'Sulphur dioxide'], correctAnswer: 'B', explanation: 'Ammonia is alkaline and turns damp red litmus paper blue.', difficulty: 'Easy' },
    { question: 'What is the oxidation number of sulphur in H₂SO₄?', options: ['+2', '+4', '+6', '+8'], correctAnswer: 'C', explanation: '2(+1) + S + 4(-2) = 0, so S = +6.', difficulty: 'Medium' },
    { question: 'Which method is most suitable for separating a mixture of ethanol and water?', options: ['Filtration', 'Separating funnel', 'Fractional distillation', 'Sublimation'], correctAnswer: 'C', explanation: 'Ethanol and water are miscible liquids with different boiling points, so fractional distillation is suitable.', difficulty: 'Medium' },
    { question: 'The rate of a chemical reaction is generally increased by', options: ['lowering the temperature', 'decreasing the reactant concentration', 'adding a suitable catalyst', 'using larger pieces of solid reactant'], correctAnswer: 'C', explanation: 'A catalyst provides an alternative pathway with lower activation energy.', difficulty: 'Easy' },
    { question: 'Which pair of substances can form an ester?', options: ['An alcohol and a carboxylic acid', 'An alkane and an alkene', 'A ketone and an alkane', 'An aldehyde and a salt'], correctAnswer: 'A', explanation: 'An alcohol reacts with a carboxylic acid in esterification to form an ester and water.', difficulty: 'Medium' },
  ],
  Biology: [
    { question: 'Which cell structure controls the movement of substances into and out of the cell?', options: ['Cell wall', 'Cell membrane', 'Nucleolus', 'Vacuole'], correctAnswer: 'B', explanation: 'The cell membrane is selectively permeable and regulates exchange with the surroundings.', difficulty: 'Easy' },
    { question: 'In a food chain, green plants are described as producers because they', options: ['feed on decomposers', 'make organic food from simple substances', 'obtain energy by eating animals', 'return minerals to the soil'], correctAnswer: 'B', explanation: 'Producers make organic food, usually by photosynthesis, using inorganic materials and an energy source.', difficulty: 'Easy' },
    { question: 'If T represents the allele for tallness and t for shortness, what proportion of offspring from Tt × Tt is expected to be short?', options: ['0', '1/4', '1/2', '3/4'], correctAnswer: 'B', explanation: 'The genotypes are TT, Tt, Tt and tt; one out of four is short (tt).', difficulty: 'Medium' },
    { question: 'Which blood vessel carries oxygenated blood from the lungs to the heart?', options: ['Pulmonary artery', 'Pulmonary vein', 'Vena cava', 'Aorta'], correctAnswer: 'B', explanation: 'Pulmonary veins return oxygenated blood from the lungs to the left atrium.', difficulty: 'Easy' },
    { question: 'The main role of decomposers in an ecosystem is to', options: ['capture sunlight', 'recycle nutrients from dead organisms', 'produce oxygen by respiration', 'convert consumers into producers'], correctAnswer: 'B', explanation: 'Decomposers break down dead matter and return nutrients to the environment.', difficulty: 'Easy' },
    { question: 'Which part of a flowering plant develops into a fruit after fertilization?', options: ['Anther', 'Stigma', 'Ovary', 'Petal'], correctAnswer: 'C', explanation: 'After fertilization, the ovary develops into the fruit while the ovules become seeds.', difficulty: 'Easy' },
  ],
  'Agricultural Science': [
    { question: 'Which soil property most directly affects the amount of water a soil can hold?', options: ['Soil texture', 'Soil colour', 'Soil temperature', 'Soil pH only'], correctAnswer: 'A', explanation: 'Texture, especially the proportions of sand, silt and clay, strongly affects water-holding capacity.', difficulty: 'Medium' },
    { question: 'A farmer plants legumes in rotation mainly to improve soil', options: ['salinity', 'nitrogen content', 'acidity', 'temperature'], correctAnswer: 'B', explanation: 'Rhizobium bacteria in legume root nodules fix atmospheric nitrogen into forms that enrich the soil.', difficulty: 'Easy' },
    { question: 'Which farm practice helps reduce soil erosion on a steep slope?', options: ['Ploughing up and down the slope', 'Removing all crop residues', 'Contour ploughing', 'Overgrazing the land'], correctAnswer: 'C', explanation: 'Contour ploughing follows the land contours and slows runoff down a slope.', difficulty: 'Easy' },
    { question: 'The gestation period of an animal is the time between', options: ['birth and weaning', 'mating and giving birth', 'weaning and maturity', 'laying and hatching'], correctAnswer: 'B', explanation: 'Gestation is the period of development in the uterus between conception and birth.', difficulty: 'Easy' },
    { question: 'A balanced ration for livestock must contain', options: ['only carbohydrates', 'all required nutrients in suitable proportions', 'only protein and water', 'more minerals than energy'], correctAnswer: 'B', explanation: 'A balanced ration supplies all essential nutrients in amounts appropriate to the animal.', difficulty: 'Easy' },
    { question: 'Which implement is most suitable for breaking large soil clods after ploughing?', options: ['Harrow', 'Milking machine', 'Planter', 'Incubator'], correctAnswer: 'A', explanation: 'A harrow breaks clods and further prepares the soil surface after ploughing.', difficulty: 'Easy' },
  ],
  Geography: [
    { question: 'At 15° longitude, what is the approximate difference in local time from Greenwich?', options: ['15 minutes', '30 minutes', '1 hour', '2 hours'], correctAnswer: 'C', explanation: 'Earth rotates 15° in one hour, so 15° longitude corresponds to one hour.', difficulty: 'Medium' },
    { question: 'Which process is mainly responsible for the formation of a delta?', options: ['Deposition at a river mouth', 'Abrasion along a cliff', 'Wind deflation in a desert', 'Solution in limestone'], correctAnswer: 'A', explanation: 'A delta forms where a river deposits sediment as it enters a standing body of water.', difficulty: 'Easy' },
    { question: 'A map has a scale of 1:50,000. What ground distance is represented by 4 cm?', options: ['0.5 km', '1 km', '2 km', '20 km'], correctAnswer: 'C', explanation: '4 cm × 50,000 = 200,000 cm, which is 2 km.', difficulty: 'Medium' },
    { question: 'Which instrument is used to measure atmospheric pressure?', options: ['Anemometer', 'Barometer', 'Hygrometer', 'Rain gauge'], correctAnswer: 'B', explanation: 'A barometer measures atmospheric pressure.', difficulty: 'Easy' },
    { question: 'The leeward side of a mountain is often dry because', options: ['air descends and warms after losing moisture on the windward side', 'the sun never reaches it', 'all winds stop at the summit', 'it receives more ocean currents'], correctAnswer: 'A', explanation: 'Descending air warms and becomes drier, creating a rain-shadow effect.', difficulty: 'Medium' },
    { question: 'Which activity is classified as a primary economic activity?', options: ['Banking', 'Car assembly', 'Fishing', 'Retail trade'], correctAnswer: 'C', explanation: 'Fishing directly obtains natural resources and is a primary activity.', difficulty: 'Easy' },
  ],
  'Computer Studies': [
    { question: 'Which component temporarily stores data and instructions currently being used by a computer?', options: ['ROM', 'RAM', 'DVD', 'Flash drive'], correctAnswer: 'B', explanation: 'RAM is volatile working memory used for active programs and data.', difficulty: 'Easy' },
    { question: 'In a spreadsheet, which formula adds the values in cells B2 through B6?', options: ['=ADD(B2:B6)', '=SUM(B2:B6)', '=TOTAL(B2-B6)', '=PLUS(B2;B6)'], correctAnswer: 'B', explanation: 'The SUM function adds all values in the specified cell range.', difficulty: 'Easy' },
    { question: 'Which of the following is an example of system software?', options: ['A word processor', 'An operating system', 'A presentation slide', 'A database record'], correctAnswer: 'B', explanation: 'An operating system manages hardware and provides services for application software.', difficulty: 'Easy' },
    { question: 'The binary number 1010 is equal to which decimal number?', options: ['8', '9', '10', '12'], correctAnswer: 'C', explanation: '1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10.', difficulty: 'Medium' },
    { question: 'Which security practice best protects an account from password guessing?', options: ['Using a short familiar word', 'Reusing one password everywhere', 'Using a long unique password and multi-factor authentication', 'Sharing the password only by email'], correctAnswer: 'C', explanation: 'A unique long password limits reuse risks, while multi-factor authentication adds another verification step.', difficulty: 'Easy' },
    { question: 'A network device that forwards data between different networks is a', options: ['router', 'keyboard', 'scanner', 'plotter'], correctAnswer: 'A', explanation: 'A router forwards packets between separate networks.', difficulty: 'Easy' },
  ],
  'Further Mathematics': [
    { question: 'Find the determinant of the matrix [[2, 1], [5, 3]].', options: ['1', '2', '6', '11'], correctAnswer: 'A', explanation: 'The determinant is (2 × 3) - (1 × 5) = 1.', difficulty: 'Medium' },
    { question: 'Differentiate y = 3x² - 4x + 7 with respect to x.', options: ['3x - 4', '6x - 4', '6x + 7', '3x² - 4'], correctAnswer: 'B', explanation: 'Applying the power rule gives dy/dx = 6x - 4.', difficulty: 'Easy' },
    { question: 'Evaluate ∫(2x + 3) dx.', options: ['x² + 3x + C', '2x² + 3 + C', 'x² + 3 + C', '2 + 3x + C'], correctAnswer: 'A', explanation: 'Integrating term by term gives x² + 3x + C.', difficulty: 'Medium' },
    { question: 'The roots of x² - 5x + 6 = 0 are', options: ['1 and 6', '2 and 3', '-2 and -3', '-1 and -6'], correctAnswer: 'B', explanation: 'Factorizing gives (x - 2)(x - 3) = 0, so x = 2 or 3.', difficulty: 'Easy' },
    { question: 'If z = 3 + 4i, what is the modulus of z?', options: ['1', '5', '7', '25'], correctAnswer: 'B', explanation: '|z| = √(3² + 4²) = 5.', difficulty: 'Medium' },
    { question: 'A geometric progression has first term 3 and common ratio 2. What is its fifth term?', options: ['24', '32', '48', '96'], correctAnswer: 'C', explanation: 'The fifth term is ar⁴ = 3 × 2⁴ = 48.', difficulty: 'Medium' },
  ],
  'Literature in English': [
    { question: 'A speech by a character alone on stage that reveals private thoughts is a', options: ['aside', 'soliloquy', 'dialogue', 'chorus'], correctAnswer: 'B', explanation: 'A soliloquy is an extended speech in which a character speaks thoughts aloud, usually alone.', difficulty: 'Easy' },
    { question: 'The repetition of initial consonant sounds in nearby words is called', options: ['assonance', 'alliteration', 'metonymy', 'euphemism'], correctAnswer: 'B', explanation: 'Alliteration is the repetition of initial consonant sounds in neighbouring words.', difficulty: 'Easy' },
    { question: 'A character whose main purpose is to contrast with another character is a', options: ['foil', 'protagonist', 'narrator', 'confidant'], correctAnswer: 'A', explanation: 'A foil highlights qualities of another character through contrast.', difficulty: 'Medium' },
    { question: 'A poem of fourteen lines with a structured rhyme scheme is commonly called a', options: ['ballad', 'sonnet', 'ode', 'elegy'], correctAnswer: 'B', explanation: 'A sonnet is a fourteen-line poetic form, often with a regular rhyme scheme.', difficulty: 'Easy' },
    { question: 'When the audience knows a danger that a character does not know, the device is', options: ['dramatic irony', 'paradox', 'pun', 'hyperbole'], correctAnswer: 'A', explanation: 'Dramatic irony occurs when the audience has information unknown to a character.', difficulty: 'Medium' },
    { question: 'The sequence of events that forms the main story of a play is its', options: ['setting', 'plot', 'diction', 'mood'], correctAnswer: 'B', explanation: 'Plot is the connected sequence of events in a literary work.', difficulty: 'Easy' },
  ],
  Government: [
    { question: 'The principle that the powers of government are divided among separate organs is', options: ['popular sovereignty', 'separation of powers', 'collective responsibility', 'judicial review'], correctAnswer: 'B', explanation: 'Separation of powers distributes legislative, executive and judicial functions among different organs.', difficulty: 'Easy' },
    { question: 'A legislature with two chambers is described as', options: ['unicameral', 'bicameral', 'federal', 'confederal'], correctAnswer: 'B', explanation: 'A bicameral legislature has two chambers or houses.', difficulty: 'Easy' },
    { question: 'The main purpose of an independent judiciary is to', options: ['conduct elections', 'interpret the law impartially', 'draft the national budget', 'appoint ministers'], correctAnswer: 'B', explanation: 'Judicial independence supports impartial interpretation and application of the law.', difficulty: 'Easy' },
    { question: 'In a federal system, constitutional powers are shared between', options: ['the ruling party and opposition', 'national and regional governments', 'the police and the courts', 'voters and political parties'], correctAnswer: 'B', explanation: 'Federalism constitutionally divides authority between central and component governments.', difficulty: 'Medium' },
    { question: 'A pressure group primarily seeks to', options: ['form a government after winning an election', 'influence public policy without directly seeking political office', 'replace all courts', 'administer the civil service'], correctAnswer: 'B', explanation: 'Pressure groups try to influence policy while not usually contesting to form government.', difficulty: 'Easy' },
    { question: 'The right of citizens to vote in an election is known as', options: ['franchise', 'immunity', 'caucus', 'veto'], correctAnswer: 'A', explanation: 'Franchise is the right to vote in public elections.', difficulty: 'Easy' },
  ],
  'Christian Religious Studies': [
    { question: 'In the parable of the Good Samaritan, the neighbour is identified as the person who', options: ['belongs to the same town', 'shows mercy to someone in need', 'holds a religious office', 'travels with the injured man'], correctAnswer: 'B', explanation: 'Jesus uses the Samaritan’s compassionate action to show who acts as a neighbour.', difficulty: 'Easy' },
    { question: 'According to the account in Acts, who was chosen to replace Judas among the apostles?', options: ['Barnabas', 'Matthias', 'Stephen', 'Silas'], correctAnswer: 'B', explanation: 'Matthias was chosen by lot to join the eleven apostles (Acts 1:26).', difficulty: 'Medium' },
    { question: 'The covenant sign given to Noah after the flood was the', options: ['rainbow', 'burning bush', 'stone tablets', 'pillar of fire'], correctAnswer: 'A', explanation: 'The rainbow was given as the sign of God’s covenant with Noah and the earth.', difficulty: 'Easy' },
    { question: 'In the Sermon on the Mount, “Blessed are the peacemakers” means that they', options: ['avoid every disagreement', 'actively work to make peace', 'always win arguments', 'refuse to help opponents'], correctAnswer: 'B', explanation: 'Peacemakers seek reconciliation and harmony between people.', difficulty: 'Easy' },
    { question: 'Paul and Silas were imprisoned in Philippi after', options: ['healing a man born blind', 'an earthquake destroyed the city', 'Paul cast a spirit from a slave girl', 'they refused to pay taxes'], correctAnswer: 'C', explanation: 'Paul’s healing of the slave girl led her owners to bring Paul and Silas before the authorities (Acts 16).', difficulty: 'Medium' },
    { question: 'The central message of the parable of the prodigal son is that', options: ['wealth always brings happiness', 'repentance is met with a father’s forgiving welcome', 'older children inherit nothing', 'travel is dangerous'], correctAnswer: 'B', explanation: 'The father’s welcome illustrates forgiveness and joy when the lost son returns.', difficulty: 'Easy' },
  ],
  'Islamic Religious Studies': [
    { question: 'The migration of Prophet Muhammad (peace be upon him) and his companions from Makkah to Madinah is called', options: ['Hijrah', 'Zakah', 'Hajj', 'Sawm'], correctAnswer: 'A', explanation: 'The Hijrah is the migration from Makkah to Madinah and marks the beginning of the Islamic calendar.', difficulty: 'Easy' },
    { question: 'The obligatory charity given by eligible Muslims is called', options: ['Salah', 'Zakah', 'Sawm', 'Adhan'], correctAnswer: 'B', explanation: 'Zakah is the obligatory almsgiving due from Muslims who meet its conditions.', difficulty: 'Easy' },
    { question: 'Which angel conveyed revelation to Prophet Muhammad (peace be upon him)?', options: ['Mikail', 'Israfil', 'Jibril', 'Malik'], correctAnswer: 'C', explanation: 'Angel Jibril (Gabriel) conveyed the Qur’anic revelation to the Prophet.', difficulty: 'Easy' },
    { question: 'The term “Sawm” during Ramadan refers to', options: ['fasting', 'pilgrimage', 'charity', 'the call to prayer'], correctAnswer: 'A', explanation: 'Sawm is fasting from dawn until sunset during Ramadan.', difficulty: 'Easy' },
    { question: 'The first revelation began with the command to', options: ['travel', 'read or recite', 'give charity', 'build a mosque'], correctAnswer: 'B', explanation: 'The opening command of the first revealed verses is “Read” (Iqra’).', difficulty: 'Medium' },
    { question: 'A Muslim who performs Hajj must travel to', options: ['Madinah only', 'Jerusalem only', 'Makkah', 'Cairo'], correctAnswer: 'C', explanation: 'The rites of Hajj are performed in and around Makkah.', difficulty: 'Easy' },
  ],
  History: [
    { question: 'The trans-Saharan trade connected West African states most directly with', options: ['North Africa and the Mediterranean world', 'South America', 'East Asia across the Pacific', 'southern Africa by sea'], correctAnswer: 'A', explanation: 'Caravan routes across the Sahara linked West African centres to North African and Mediterranean markets.', difficulty: 'Easy' },
    { question: 'The Berlin Conference of 1884–1885 is associated with the', options: ['abolition of the trans-Atlantic slave trade', 'European partition of Africa', 'formation of the League of Nations', 'independence of Ghana'], correctAnswer: 'B', explanation: 'European powers negotiated rules for territorial claims during the Scramble for Africa.', difficulty: 'Easy' },
    { question: 'An important result of the abolition of the trans-Atlantic slave trade was the growth of', options: ['legitimate commerce in products such as palm oil', 'the Roman Empire', 'the Atlantic slave trade', 'the Sahara desert'], correctAnswer: 'A', explanation: 'Trade in commodities such as palm oil expanded as European commerce shifted away from slave trading.', difficulty: 'Medium' },
    { question: 'A primary source for studying a past society could be', options: ['a recently written textbook summary', 'a contemporary letter from that period', 'a modern fictional film', 'a present-day opinion poll'], correctAnswer: 'B', explanation: 'A letter produced during the period under study is direct evidence from that time.', difficulty: 'Easy' },
    { question: 'The main purpose of an armistice is to', options: ['form a permanent constitution', 'suspend fighting between opposing forces', 'annex a neighbouring state', 'collect customs duties'], correctAnswer: 'B', explanation: 'An armistice is an agreement to stop or suspend hostilities, usually temporarily.', difficulty: 'Easy' },
    { question: 'The industrial revolution first began in', options: ['Britain', 'Brazil', 'Japan', 'Egypt'], correctAnswer: 'A', explanation: 'The industrial revolution began in Britain in the eighteenth century before spreading elsewhere.', difficulty: 'Easy' },
  ],
  Economics: [
    { question: 'If the price of a good rises and quantity demanded falls, this illustrates', options: ['the law of demand', 'the law of supply', 'economies of scale', 'diminishing returns'], correctAnswer: 'A', explanation: 'Other things being equal, the law of demand states that higher prices reduce quantity demanded.', difficulty: 'Easy' },
    { question: 'A country’s opportunity cost of producing one more unit of a good is', options: ['the money spent on advertising', 'the next best alternative output forgone', 'the total value of all imports', 'the tax collected on the good'], correctAnswer: 'B', explanation: 'Opportunity cost is the value of the next best alternative sacrificed.', difficulty: 'Easy' },
    { question: 'Which change is most likely to shift the demand curve for a normal good to the right?', options: ['A fall in consumers’ income', 'A rise in consumers’ income', 'A rise in the price of the good itself', 'A fall in the number of buyers'], correctAnswer: 'B', explanation: 'For a normal good, higher income increases demand at each price.', difficulty: 'Medium' },
    { question: 'Inflation is best described as a sustained', options: ['fall in the general price level', 'rise in the general price level', 'increase in a single firm’s output', 'reduction in the labour force'], correctAnswer: 'B', explanation: 'Inflation is a persistent increase in the general level of prices.', difficulty: 'Easy' },
    { question: 'A central bank can reduce commercial banks’ ability to create credit by', options: ['lowering the cash reserve requirement', 'raising the cash reserve requirement', 'printing more cheques', 'reducing the currency in circulation abroad'], correctAnswer: 'B', explanation: 'A higher reserve requirement leaves banks with less money available for lending.', difficulty: 'Medium' },
    { question: 'A market with many sellers offering identical products is closest to', options: ['perfect competition', 'monopoly', 'monopsony', 'bilateral monopoly'], correctAnswer: 'A', explanation: 'Perfect competition is characterized by many buyers and sellers and a homogeneous product.', difficulty: 'Medium' },
  ],
  French: [
    { question: 'Choose the correct French translation of “We are going to the market.”', options: ['Nous allons au marché.', 'Nous allez au marché.', 'Nous sommes au marché hier.', 'Nous va au marché.'], correctAnswer: 'A', explanation: '“Nous allons” is the present tense of aller for “we go/are going”; “au marché” means “to the market”.', difficulty: 'Easy' },
    { question: 'Complete the sentence: Marie ____ une lettre à son amie.', options: ['écris', 'écrit', 'écrivent', 'écrire'], correctAnswer: 'B', explanation: 'For the third-person singular subject “Marie”, écrire is conjugated “écrit”.', difficulty: 'Medium' },
    { question: 'The opposite of “ancien” is', options: ['jeune', 'moderne', 'grand', 'lent'], correctAnswer: 'B', explanation: '“Moderne” means modern and is a common opposite of “ancien” (old/former).', difficulty: 'Easy' },
    { question: 'Choose the correct response to “Comment vous appelez-vous ?”', options: ['J’ai quinze ans.', 'Je m’appelle Amina.', 'Je vais à l’école.', 'Il est midi.'], correctAnswer: 'B', explanation: 'The question asks for a person’s name; “Je m’appelle...” means “My name is...”.', difficulty: 'Easy' },
    { question: 'Choose the correct article: ____ école est près de la gare.', options: ['L’', 'Le', 'La', 'Les'], correctAnswer: 'A', explanation: 'The feminine singular article “la” is elided to “l’” before a vowel sound.', difficulty: 'Easy' },
    { question: '“Il fait froid” means', options: ['It is raining.', 'It is cold.', 'It is late.', 'It is windy.'], correctAnswer: 'B', explanation: 'The expression “il fait froid” means “it is cold”.', difficulty: 'Easy' },
  ],
  Commerce: [
    { question: 'A retailer buys goods mainly from a wholesaler and sells them to', options: ['manufacturers', 'final consumers', 'central banks', 'export councils'], correctAnswer: 'B', explanation: 'Retailers sell goods in small quantities to the final consumers.', difficulty: 'Easy' },
    { question: 'Which document is commonly sent by a seller to request payment for goods supplied on credit?', options: ['Invoice', 'Receipt', 'Cheque', 'Delivery van'], correctAnswer: 'A', explanation: 'An invoice lists the goods supplied and the amount due for payment.', difficulty: 'Easy' },
    { question: 'The main function of warehousing in commerce is to', options: ['store goods until they are needed', 'determine exchange rates', 'insure every customer', 'manufacture currency'], correctAnswer: 'A', explanation: 'Warehouses store goods and help regulate supply between production and demand.', difficulty: 'Easy' },
    { question: 'A wholesaler who buys goods in bulk from producers and sells them to retailers performs', options: ['retailing', 'wholesaling', 'insurance', 'advertising'], correctAnswer: 'B', explanation: 'Wholesaling involves buying in bulk and reselling mainly to retailers or other businesses.', difficulty: 'Easy' },
    { question: 'Which form of communication provides a permanent written record of a business transaction?', options: ['Telephone conversation', 'Business letter', 'Unrecorded announcement', 'Casual discussion'], correctAnswer: 'B', explanation: 'A business letter provides a written record that can be filed and referred to later.', difficulty: 'Easy' },
    { question: 'A retailer uses after-sales service mainly to', options: ['support customers after a purchase', 'increase the wholesale price', 'avoid keeping accounts', 'replace all advertising'], correctAnswer: 'A', explanation: 'After-sales service assists customers with maintenance, installation or problems after purchase.', difficulty: 'Easy' },
  ],
  'Financial Accounting': [
    { question: 'A business buys office equipment for cash. Which accounts are affected?', options: ['Debit equipment; credit cash', 'Debit cash; credit equipment', 'Debit purchases; credit sales', 'Debit capital; credit drawings'], correctAnswer: 'A', explanation: 'Equipment, an asset, increases on the debit side; cash, also an asset, decreases on the credit side.', difficulty: 'Medium' },
    { question: 'A trial balance is prepared mainly to check the', options: ['arithmetical agreement of ledger balances', 'market value of every asset', 'profit earned by competitors', 'physical condition of stock'], correctAnswer: 'A', explanation: 'A trial balance checks whether total debit balances equal total credit balances.', difficulty: 'Easy' },
    { question: 'Goods returned by a credit customer are recorded in the', options: ['sales returns journal', 'purchases journal', 'cash book only', 'petty cash book'], correctAnswer: 'A', explanation: 'Sales returns record goods returned to the business by its customers.', difficulty: 'Easy' },
    { question: 'A credit balance on a supplier’s personal account usually represents', options: ['a debt owed by the business to the supplier', 'cash owned by the supplier in the till', 'a fixed asset', 'the owner’s drawings'], correctAnswer: 'A', explanation: 'A supplier is a creditor; the credit balance shows the amount the business owes.', difficulty: 'Medium' },
    { question: 'Depreciation is the systematic allocation of the cost of a non-current asset over its', options: ['useful life', 'purchase day only', 'resale value only', 'invoice number'], correctAnswer: 'A', explanation: 'Depreciation allocates an asset’s depreciable amount over the periods expected to benefit from its use.', difficulty: 'Easy' },
    { question: 'The accounting equation is correctly stated as', options: ['Assets = Capital + Liabilities', 'Assets = Revenue - Expenses', 'Capital = Assets + Liabilities', 'Liabilities = Assets + Expenses'], correctAnswer: 'A', explanation: 'The basic accounting equation is Assets = Capital + Liabilities.', difficulty: 'Easy' },
  ],
}

const buildQuestionBank = (departments) => {
  const availableSubjects = new Set(departments.flatMap((department) => department.subjects))
  const missingSubjects = [...availableSubjects].filter((subject) => !questionTemplates[subject])
  if (missingSubjects.length) {
    throw new Error(`Missing original practice questions for: ${missingSubjects.join(', ')}`)
  }

  const bank = []
  departments.forEach((department) => {
    department.subjects.forEach((subject) => {
      questionTemplates[subject].forEach((template) => {
        bank.push({
          id: bank.length + 1,
          department: department.name,
          subject,
          ...template,
          year: null,
          source: 'Original JAMB-style practice (unofficial)',
          sourceKey: `${department.name}|${subject}|${template.question}`,
        })
      })
    })
  })
  return bank
}

export { buildQuestionBank }
