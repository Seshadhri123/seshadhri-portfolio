import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import signature from './assets/seshadhri-signature.png'
import resumePdf from './assets/seshadhri-murugavel-resume.pdf'
import portrait from './assets/seshadhri-portrait.jpg'
import introVideo from './assets/seshadhri-intro.mov'
import loaderCharacter from './assets/loader-character.png'
import journeyRoad from './assets/journey-road-empty.png'
import certificateMathMachineLearning from './assets/certificate-mathematics-for-machine-learning-linear-algebra-coursera.png'
import certificateIntroductionToLargeLanguageModels from './assets/certificate-introduction-to-large-language-models.png'
import certificateIntroductionToGitAndGithub from './assets/certificate-introduction-to-git-and-github.png'
import certificateIntroductionToGenerativeAi from './assets/certificate-introduction-to-generative-ai.png'
import certificateIntroductionToGenerativeAiPdf from './assets/certificate-introduction-to-generative-ai.pdf'
import certificateSucceedAi from './assets/certificate-succeed-ai.png'
import certificatePythonFunctions from './assets/certificate-python-functions.png'
import certificatePythonVisualization from './assets/certificate-python-visualization.png'
import certificateIndustryIot from './assets/certificate-industry-iot.png'
import synkOfficialLogo from './assets/synk-official-logo-hq.png'
import kryosRunItBackPoster from './assets/kryos-run-it-back-poster.png'
import nextChapterEditing from './assets/next-chapter-editing.mp4'
import definingBuildOne from './assets/defining-build-1.jpg'
import definingBuildTwo from './assets/defining-build-2.jpeg'
import definingBuildThree from './assets/defining-build-3.jpeg'
import peopleFirstOne from './assets/people-first-1.jpeg'
import peopleFirstTwo from './assets/people-first-2.jpeg'
import peopleFirstThree from './assets/people-first-3.png'
import synkNavikaOnsite from './assets/synk-navika-onsite.jpg'
import synkLetterOfRecommendation from './assets/synk-letter-of-recommendation.png'
import navikaWomenAchieverAward from './assets/navika-women-achiever-award-2025.png'
import eliteClubLogo from './assets/elite-club-logo-hq.png'
import eliteDesignSummit2024 from './assets/elite-design-summit-2024.png'
import eliteDesignSummitEvents from './assets/elite-design-summit-events.png'
import eliteMentalHealthWeek from './assets/elite-mental-health-week.mp4'
import innovision2025Pdf from './assets/innovision-2025.pdf'
import voiMuralPainting from './assets/voi-mural-painting.jpg'
import voiSpaceMural from './assets/voi-space-mural.jpg'
import voiClassroomMural from './assets/voi-classroom-mural.jpg'
import pamperedPawsCarnival from './assets/pampered-paws-carnival.jpg'
import pamperedPawsDogs from './assets/pampered-paws-dogs.jpg'
import adoptInPuppy from './assets/adopt-in-puppy.jpg'
import volunteersOfIndiaLogo from './assets/volunteers-of-india-logo.png'
import pamperedPawsLogo from './assets/pampered-paws-logo.png'
import adoptInLogo from './assets/adopt-in-logo.png'
import aboutPortrait from './assets/about-seshadhri.png'
import playSeashore from './assets/play-seashore.png'
import soupWithSeshaTeam from './assets/soup-with-sesha-team.png'
import playMountain from './assets/play-mountain.png'
import watchlistRobertDowneyJr from './assets/watchlist-robert-downey-jr.mp4'
import watchlistRickRubin from './assets/watchlist-rick-rubin.mp4'
import watchlistKungFuPandaTrilogy from './assets/watchlist-kung-fu-panda-trilogy.mp4'
import watchlistShiHengYi from './assets/watchlist-shi-heng-yi.mp4'
import watchlistTdJakes from './assets/watchlist-td-jakes.mp4'
import watchlistPoGrowth from './assets/watchlist-po-growth.mp4'
import watchlistYouAreMoreCapable from './assets/watchlist-you-are-more-capable.mp4'
import watchlistVogueWorldV from './assets/watchlist-vogue-world-v.mp4'
import watchlistRobertDowneyJrStory from './assets/watchlist-robert-downey-jr-story.mp4'
import watchlistOnePieceElbaphPv from './assets/watchlist-one-piece-elbaph-pv.mp4'
import codezeeHero from './assets/codezee-hero.png'
import codezeeHowItWorks from './assets/codezee-how-it-works.png'
import codezeeFeatures from './assets/codezee-features.png'
import codezeeTestimonials from './assets/codezee-testimonials.png'
import codezeeUpload from './assets/codezee-upload.png'
import codezeeAnalysis from './assets/codezee-analysis.png'
import codezeeJsResults from './assets/codezee-js-results.png'
import codezeePythonResults from './assets/codezee-python-results.png'
import telehealthIntegratedPrototype from './assets/telehealth-integrated-prototype.jpeg'
import telehealthBoardOverview from './assets/telehealth-board-overview.jpeg'
import telehealthSensorLayout from './assets/telehealth-sensor-layout.jpeg'
import telehealthInitialization from './assets/telehealth-initialization.jpeg'
import telehealthLiveReadings from './assets/telehealth-live-readings.jpeg'
import telehealthAlertState from './assets/telehealth-alert-state.jpeg'
import healthtrackWelcome from './assets/healthtrack-welcome.png'
import healthtrackPatientDashboard from './assets/healthtrack-patient-dashboard.jpg'
import healthtrackDoctorDashboard from './assets/healthtrack-doctor-dashboard.png'
import healthtrackDoctorAvailability from './assets/healthtrack-doctor-availability.png'
import healthtrackAppointmentBooking from './assets/healthtrack-appointment-booking.png'
import healthtrackDoctorAppointments from './assets/healthtrack-doctor-appointments.jpg'
import healthtrackPatientChat from './assets/healthtrack-patient-chat.jpg'
import weatherDashboardSearch from './assets/weather-dashboard-search.png'
import weatherDashboardResult from './assets/weather-dashboard-result.png'
import weatherDashboardUiState from './assets/weather-dashboard-ui-state.png'
import weatherDashboardLayoutStyles from './assets/weather-dashboard-layout-styles.png'
import weatherDashboardInteractionStyles from './assets/weather-dashboard-interaction-styles.png'
import gojoLineArtClean from './assets/gojo-line-art-clean.png'
import gojoBlindfoldTriptych from './assets/gojo-blindfold-triptych.png'
import gojoBlindfoldColour from './assets/gojo-blindfold-colour.png'
import gojoStationScene from './assets/gojo-station-scene.png'
import gojoFlowStrength from './assets/gojo-flow-strength.png'
import gojoFlowSmile from './assets/gojo-flow-smile.png'
import gojoFlowTriptych from './assets/gojo-flow-triptych.png'
import harveyFlowBaseball from './assets/harvey-flow-baseball.png'
import harveyFlowMike from './assets/harvey-flow-mike.png'
import harveyFlowLife from './assets/harvey-flow-life.png'
import dekuFlowPortrait from './assets/deku-flow-portrait.png'
import dekuFlowSunrise from './assets/deku-flow-sunrise.png'
import dekuFlowSky from './assets/deku-flow-sky.png'
import manikandanFlowCare from './assets/manikandan-flow-care.png'
import manikandanFlowPortrait from './assets/manikandan-flow-portrait.png'
import manikandanFlowGrounded from './assets/manikandan-flow-grounded.png'
import arjunFlowPortrait from './assets/arjun-flow-portrait.png'
import arjunFlowFamily from './assets/arjun-flow-family.png'
import arjunFlowStation from './assets/arjun-flow-station.png'
import astaFlowLiebe from './assets/asta-flow-liebe.png'
import astaFlowFocus from './assets/asta-flow-focus.png'
import astaFlowQuote from './assets/asta-flow-quote.png'
import './styles.css'
import './responsive.css'
import './play.css'
import './admin.css'

const navItems = ['Home', 'Experience', 'Projects', 'About', 'Contact']

const darkNavMenus = {
  Home: [
    { label: 'Start here', target: 'home', detail: 'The opening frame' },
    { label: 'The journey', target: 'journey', detail: 'A map of the path so far' },
  ],
  Projects: [
    { label: 'Projects', target: 'projects', detail: 'Work, filed with intent' },
    { label: 'Research papers', target: 'research-notes', detail: 'Thoughts in public' },
    { label: 'Learning archive', target: 'learning-archive', detail: 'Proof of progress' },
  ],
  Experience: [
    { label: 'Work experience', target: 'experience', detail: 'Built with people' },
    { label: 'Leadership & community', target: 'leadership', detail: 'Make room for people' },
  ],
  About: [
    { label: 'About Seshadhri', target: 'about', detail: 'The person behind the work' },
    { label: 'The journey', target: 'journey', detail: 'The story in motion' },
  ],
  Contact: [
    { label: 'Get in touch', target: 'contact', detail: 'Start a conversation' },
    { label: 'Project enquiry', target: 'contact', detail: 'Build something together' },
  ],
}

const playNavItems = [
  { label: 'Story', target: 'story' },
  { label: 'My journey', target: 'journey' },
  { label: 'Soup with Sesha', target: 'soup' },
  { label: 'Screen lessons', target: 'screen-lessons' },
]

const lightHomeNavItems = [
  { label: 'Beyond AI', target: 'home' },
  { label: 'Pocket oracle', target: 'light-inspiration' },
  { label: 'On repeat', target: 'light-reels' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/sesharelates/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/seshadhri-murugavel-0a81872ba/' },
  { label: 'X', href: 'https://x.com/Sesharelates' },
  { label: 'GitHub', href: 'https://github.com/Seshadhri123' },
]

const lightModeRoles = [
  'Creator',
  'Podcaster',
  'Designer',
  'Student',
  'Volunteer',
  'Innovator',
  'Technophile',
  'Editor',
  'Explorer',
  'Cinephile',
  'Traveler',
  'Videographer',
]

// This is intentionally CMS-shaped: the future admin area can create, edit, reorder,
// or remove a chit without needing to change the light-mode experience.
const motivationChits = [
  {
    id: 'think-different',
    quote: 'The people crazy enough to think they can change the world are the ones who do.',
    attribution: 'Apple · Think Different',
    sourceUrl: 'https://www.apple.com/50-years-of-thinking-different/',
    note: 'For the days when a big idea feels a little too loud.',
  },
  {
    id: 'anne-frank',
    quote: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
    attribution: 'Anne Frank · The Diary of a Young Girl',
    sourceUrl: 'https://www.annefrank.org/en/anne-frank/quotes/',
    note: 'A reminder that useful beginnings do not need permission.',
  },
  {
    id: 'malala',
    quote: 'One child, one teacher, one book, one pen can change the world.',
    attribution: 'Malala Yousafzai · UN Youth Assembly address',
    sourceUrl: 'https://www.un.org/en/chronicle/article/malala-yousafzai-girl-who-demanded-school',
    note: 'Small tools can still carry a large future.',
  },
  {
    id: 'mlk',
    quote: 'The time is always right to do what is right.',
    attribution: 'Dr. Martin Luther King Jr.',
    sourceUrl: 'https://thekingcenter.org/about-tkc/martin-luther-king-jr/',
    note: 'For the moment when waiting feels easier than acting.',
  },
  {
    id: 'helen-keller',
    quote: 'Alone we can do so little; together we can do so much.',
    attribution: 'Helen Keller',
    sourceUrl: 'https://www.afb.org/about-afb/history/helen-keller/quotes',
    note: 'A note to keep good people close to the work.',
  },
  {
    id: 'nelson-mandela',
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    attribution: 'Nelson Mandela',
    sourceUrl: 'https://www.nelsonmandela.org/selected-quotes',
    note: 'Curiosity is not a side quest. It is the tool.',
  },
  {
    id: 'make-the-next-version',
    quote: 'Make the next version a little kinder and a little truer.',
    attribution: 'Pocket reminder',
    sourceUrl: '',
    note: 'Progress can be quiet. It still counts when it is honest.',
  },
  {
    id: 'begin-before-ready',
    quote: 'You do not need to feel ready to begin. You need a first small move.',
    attribution: 'Pocket reminder',
    sourceUrl: '',
    note: 'For breaking the long pause between an idea and the work.',
  },
  {
    id: 'build-the-room',
    quote: 'Build the room you wish you had walked into sooner.',
    attribution: 'Pocket reminder',
    sourceUrl: '',
    note: 'A reminder to make space for other people as you grow.',
  },
  {
    id: 'one-clear-thing',
    quote: 'When everything feels loud, do one clear thing well.',
    attribution: 'Pocket reminder',
    sourceUrl: '',
    note: 'Focus is often less dramatic than motivation, and more useful.',
  },
  {
    id: 'story-in-the-try',
    quote: 'There is a story in every try, even the ones that do not work yet.',
    attribution: 'Pocket reminder',
    sourceUrl: '',
    note: 'Keep the draft, the attempt, and the lesson close.',
  },
  {
    id: 'make-room-for-joy',
    quote: 'Leave a little room for joy while you are becoming who you want to be.',
    attribution: 'Pocket reminder',
    sourceUrl: '',
    note: 'Ambition works better when life is still allowed to feel lived.',
  },
]

// Reels are managed from /admin. A reel can contain an uploaded video (videoAssetId),
// a direct video URL, or an image thumbnail.
const inspirationReels = [
  { id: 'you-are-more-capable', title: 'You are more capable than you think', creator: 'Chris Hemsworth', description: 'A straightforward reminder that you are more capable than you think—especially on the days when you need to hear it.', videoUrl: watchlistYouAreMoreCapable, videoAssetId: '', thumbnailUrl: '' },
  { id: 'vogue-world-v', title: 'Wait when things go wrong', creator: 'On repeat', description: 'A pause before reacting: when things go wrong, slow down long enough to see what the moment is trying to teach you.', videoUrl: watchlistVogueWorldV, videoAssetId: '', thumbnailUrl: '' },
  { id: 'robert-downey-jr', title: 'Robert Downey Jr. — reinvention and resilience', creator: 'On repeat', description: 'A reminder that the work of becoming yourself can take time, courage, and another chance.', videoUrl: watchlistRobertDowneyJr, videoAssetId: '', thumbnailUrl: '' },
  { id: 'robert-downey-jr-story', title: 'Smile, though your heart is aching', creator: 'Iron Man', description: 'A quiet Tony Stark moment built around the line: “Smile, though your heart is aching.”', videoUrl: watchlistRobertDowneyJrStory, videoAssetId: '', thumbnailUrl: '' },
  { id: 'rick-rubin', title: 'Rick Rubin — make space for the work', creator: 'On repeat', description: 'A short reflection from a producer known for paying close attention to the creative process.', videoUrl: watchlistRickRubin, videoAssetId: '', thumbnailUrl: '' },
  { id: 'kung-fu-panda-trilogy', title: 'Kung Fu Panda — the lesson beneath the laughs', creator: 'On repeat', description: 'A closer look at the growth, discipline, and heart running through the trilogy.', videoUrl: watchlistKungFuPandaTrilogy, videoAssetId: '', thumbnailUrl: '' },
  { id: 'shi-heng-yi', title: 'Shi Heng Yi — strength with stillness', creator: 'On repeat', description: 'A Shaolin perspective on focus, self-mastery, and moving with intention.', videoUrl: watchlistShiHengYi, videoAssetId: '', thumbnailUrl: '' },
  { id: 'td-jakes', title: 'T. D. Jakes — purpose and persistence', creator: 'On repeat', description: 'A message about staying grounded while growing into the life you are building.', videoUrl: watchlistTdJakes, videoAssetId: '', thumbnailUrl: '' },
  { id: 'po-growth', title: 'Po — growth, self-belief, and belonging', creator: 'On repeat', description: 'A reminder that becoming capable begins with believing there is a place for you.', videoUrl: watchlistPoGrowth, videoAssetId: '', thumbnailUrl: '' },
  { id: 'one-piece-elbaph-pv', title: 'Spider-Man — still get back up', creator: 'Spider-Man', description: 'How it genuinely feels getting beaten down by life, but still getting back up anyway.', videoUrl: watchlistOnePieceElbaphPv, videoAssetId: '', thumbnailUrl: '' },
]

// Kept as one collection so the future admin API can replace this source without changing the UI.
const projectShelf = [
  {
    slug: 'code-quality-checker',
    folderId: 'technical',
    title: 'CodeZee — Code Quality Checker',
    category: 'Web app · Developer tool',
    status: 'Featured project',
    summary: 'A developer-friendly web tool for analysing code quality, finding code smells, and producing cleaner output for Python and JavaScript files.',
    accent: '#62d56b',
    tint: '#123f24',
    role: 'Product design · Front-end build · Analysis flow',
    year: '2025',
    headline: 'A cleaner path from code upload to useful feedback.',
    walkthroughLabel: 'PRODUCT WALKTHROUGH',
    walkthroughLead: 'From upload to',
    walkthroughEmphasis: 'useful feedback.',
    overview: 'CodeZee turns a confusing quality check into a simple workflow: choose a Python or JavaScript file, select optimisation or analysis, and receive clear findings or cleaned output. The goal was to make code review approachable for students and early-career developers without hiding the technical detail they need to improve.',
    problem: 'Code quality tools can feel too technical or intimidating when someone only needs to understand what is wrong, why it matters, and what to try next.',
    outcome: 'A focused interface that surfaces code smells, unused variables, and deprecated rules in plain language, while also giving users a downloadable optimised version and lightweight performance details.',
    tools: ['JavaScript', 'Python', 'Static analysis', 'Responsive web UI'],
    highlights: ['Python and JavaScript file support', 'Code optimisation and quality-analysis modes', 'Clear issue groups and suggested fixes', 'Downloadable optimised code with performance metrics'],
    gallery: [
      { image: codezeeHero, label: 'Landing page', caption: 'A clear entry point for a technical task: upload, choose a mode, and begin.' },
      { image: codezeeHowItWorks, label: 'Workflow', caption: 'The three-step flow explains the product before the user needs it.' },
      { image: codezeeFeatures, label: 'Feature overview', caption: 'Core capabilities are presented as a quick, readable scan.' },
      { image: codezeeUpload, label: 'Upload flow', caption: 'Users can choose code optimisation or quality analysis before processing a file.' },
      { image: codezeeAnalysis, label: 'Issue analysis', caption: 'Grouped feedback makes code smells, unused variables, and deprecated rules easier to understand.' },
      { image: codezeeJsResults, label: 'JavaScript output', caption: 'Optimised code and performance information are kept together in one result view.' },
      { image: codezeePythonResults, label: 'Python output', caption: 'The same result pattern adapts cleanly for Python files.' },
      { image: codezeeTestimonials, label: 'Trust signals', caption: 'Social proof closes the page with a human reason to try the tool.' },
    ],
  },
  {
    slug: 'next-gen-telehealth',
    folderId: 'technical',
    title: 'Next-Gen Telehealth: A Low-Latency IoT and Edge AI Framework for Personalized Remote Diagnosis',
    folderTitle: 'Smartwatch Care System',
    category: 'IoT · Edge AI · Healthcare prototype',
    status: 'Hardware systems',
    summary: 'An ESP32-based health-monitoring prototype that brings multi-sensor data, local risk classification, on-device alerts, and location-aware communication into one portable system.',
    accent: '#6ed9ff',
    tint: '#0f3b58',
    role: 'IoT prototyping · Embedded systems · Edge AI research',
    year: '2025',
    headline: 'A portable health-monitoring prototype that keeps critical decisions close to the edge.',
    walkthroughLabel: 'PROTOTYPE WALKTHROUGH',
    walkthroughLead: 'From sensing to',
    walkthroughEmphasis: 'visible alerts.',
    overview: 'This project explores a low-latency telehealth framework built around an ESP32. The prototype combines heart-rate and SpO₂ sensing, a DHT11 environmental sensor, GPS, an OLED screen, alert LEDs, and an experimental NIR-based glucose-estimation path. Instead of treating the cloud as the first destination for every reading, the system is designed to process signals locally and show a clear safe, moderate, or danger state before a connection is needed.',
    problem: 'Remote health-monitoring systems can become slow or unavailable when they depend on continuous cloud connectivity. The challenge was to prototype a low-cost, portable alternative that can gather several signals, surface an understandable local status, and support emergency communication while being explicit about its limits as a research prototype rather than a clinical diagnostic device.',
    outcome: 'The result is a working hardware prototype with live sensor display states, LED feedback, GPS hardware, and a visible danger alert. It demonstrates an edge-first direction for personal monitoring, while identifying clinical validation, long-term power optimisation, and careful privacy controls as necessary next steps.',
    tools: ['ESP32', 'TinyML / edge AI', 'Heart-rate & SpO₂ sensing', 'DHT11', 'GPS', 'OLED display', 'IoT communication'],
    highlights: ['Local ESP32 processing for lower-latency health-state classification', 'Multimodal prototype: vital signals, environmental data, and GPS', 'OLED feedback with initialisation, live-reading, and danger states', 'Location-aware emergency-alert concept for caregivers or responders', 'Experimental NIR glucose-estimation module presented as research, not a clinical measurement'],
    gallery: [
      { image: telehealthIntegratedPrototype, label: 'Integrated prototype', caption: 'The complete working board brings sensing, display, GPS, and alert modules together.' },
      { image: telehealthBoardOverview, label: 'Early hardware layout', caption: 'An early layout mapped the controller, sensing modules, display, GPS, and wiring paths.' },
      { image: telehealthSensorLayout, label: 'Sensor architecture', caption: 'A closer view of the physical system used to coordinate the different health and environment inputs.' },
      { image: telehealthInitialization, label: 'Device start-up', caption: 'The OLED confirms that the monitoring system is initialised before live readings begin.' },
      { image: telehealthLiveReadings, label: 'Local status screen', caption: 'The display presents a compact snapshot of captured values directly on the device.' },
      { image: telehealthAlertState, label: 'Danger alert', caption: 'A clear on-device alert state is designed to make an abnormal condition immediately visible.' },
    ],
  },
  {
    slug: 'healthtrack',
    folderId: 'technical',
    title: 'HealthTrack — Telehealth & Remote Health Monitoring Application',
    category: 'Flutter · Firebase · Digital health',
    status: 'Connected care',
    summary: 'A companion telehealth application that extends wearable monitoring into an accessible, role-based care experience for patients, doctors, and family members.',
    accent: '#8063ff',
    tint: '#322875',
    role: 'Mobile product design · Flutter development · Firebase integration',
    year: '2025',
    headline: 'Turning live wearable signals into a connected, human health-care workflow.',
    walkthroughLabel: 'APPLICATION WALKTHROUGH',
    walkthroughLead: 'From live health data to',
    walkthroughEmphasis: 'proactive care.',
    overview: 'HealthTrack is a Flutter companion application designed to extend an Edge AI-enabled smartwatch into a connected remote-care ecosystem. Processed health information can be synchronised through Firebase and presented through role-based experiences for patients, doctors, and family members. The focus is not only on seeing readings: it is on helping people schedule care, communicate clearly, receive reminders, and act when an alert matters.',
    problem: 'Wearable data is most useful when it is understandable and reaches the right people. HealthTrack addresses the gap between a local monitoring device and the everyday people around it, bringing vital summaries, appointments, doctor availability, messaging, SOS notifications, Text-to-Speech reminders, and live GPS sharing into one proactive-care concept.',
    outcome: 'The result is a polished cross-platform app flow that makes health information easier to follow for a patient, manageable for a doctor, and shareable with trusted family members. It is a connected healthcare-management prototype, not a substitute for professional medical diagnosis or emergency services.',
    tools: ['Flutter', 'Firebase', 'Role-based UX', 'Real-time data sync', 'GPS sharing', 'Text-to-Speech', 'SOS alerts'],
    highlights: ['Dedicated patient, doctor, and family-oriented experiences', 'Health dashboard for real-time wearable information and active alerts', 'Appointment booking and doctor availability management', 'Doctor-patient messaging and appointment actions', 'Text-to-Speech reminders, SOS notifications, and live GPS-sharing concept'],
    gallery: [
      { image: healthtrackWelcome, label: 'Welcome & sign-in', caption: 'A calm, clear entry screen establishes the app as a reassuring care companion.' },
      { image: healthtrackPatientDashboard, label: 'Patient dashboard', caption: 'At-a-glance health score, active alerts, vitals, and quick actions centre the patient experience.' },
      { image: healthtrackDoctorDashboard, label: 'Doctor portal', caption: 'A role-specific dashboard gives doctors a concise view of appointment activity.' },
      { image: healthtrackDoctorAvailability, label: 'Doctor availability', caption: 'Weekly working hours let clinicians communicate their available appointment windows.' },
      { image: healthtrackAppointmentBooking, label: 'Appointment booking', caption: 'Patients can select a doctor, date, and time through a structured booking flow.' },
      { image: healthtrackDoctorAppointments, label: 'Appointment management', caption: 'Doctors can review patient vitals, accept appointments, and continue care from one screen.' },
      { image: healthtrackPatientChat, label: 'Patient chat', caption: 'A direct messaging space supports follow-up conversations between patient and doctor.' },
    ],
  },
  {
    slug: 'weather-dashboard',
    folderId: 'technical',
    title: 'Weather Dashboard — Real-Time Weather Web Application',
    category: 'React · API integration · Web application',
    status: 'Live data',
    summary: 'A clean city-search weather application that turns a live API response into a focused snapshot of current temperature, conditions, humidity, and wind speed.',
    accent: '#79bbff',
    tint: '#153d65',
    role: 'Front-end development · API integration · Interface design',
    year: '2025',
    headline: 'A simple weather search made clear, fast, and easy to read.',
    walkthroughLabel: 'BUILD WALKTHROUGH',
    walkthroughLead: 'From city search to',
    walkthroughEmphasis: 'live conditions.',
    overview: 'Weather Dashboard is a React-based real-time weather finder built around one clear interaction: enter a city and receive the conditions that matter. The interface calls a weather service for current conditions, then turns the response into a compact card with location, weather state, temperature, humidity, and wind speed. The goal was to practise building an API-driven product without making the experience feel heavy or technical.',
    problem: 'Live-data interfaces need to be useful even before a successful response arrives. The challenge was to keep the search action simple while handling empty inputs, loading states, unavailable cities, and network errors without breaking the calm, visual rhythm of the product.',
    outcome: 'The result is a lightweight weather dashboard with a focused search experience, clear response hierarchy, and state-aware React UI. It demonstrates the core pattern behind many live-data products: take an external response, handle the edge cases, and present the useful part with clarity.',
    tools: ['React', 'JavaScript', 'OpenWeather API', 'CSS', 'Responsive UI', 'Async state handling'],
    highlights: ['City-based weather search with real-time API data', 'Current temperature, condition, humidity, and wind-speed display', 'Loading and error states for incomplete or unavailable requests', 'Keyboard-friendly search interaction', 'Clean gradient-led interface designed for quick scanning'],
    gallery: [
      { image: weatherDashboardSearch, label: 'Search entry', caption: 'The initial screen gives the user one obvious action: search for a city.' },
      { image: weatherDashboardResult, label: 'Weather result', caption: 'A compact card translates the live response into current conditions for Chennai.' },
      { image: weatherDashboardUiState, label: 'React UI states', caption: 'The rendering flow manages error, loading, and successful weather states around the same simple interface.' },
      { image: weatherDashboardLayoutStyles, label: 'Layout styling', caption: 'The core CSS establishes the full-height gradient, centred layout, and readable search hierarchy.' },
      { image: weatherDashboardInteractionStyles, label: 'Interaction styling', caption: 'Small details such as button states and loading feedback keep the experience responsive.' },
    ],
  },
  {
    folderId: 'technical',
    title: 'Technical Projects',
    category: 'AI · Web · Systems',
    status: 'Engineering',
    summary: 'AI, machine learning, web applications, IoT builds, data work, and the useful tools created along the way.',
    accent: '#83c9e0',
    tint: '#0c5875',
  },
  {
    folderId: 'creative',
    title: 'Creative Projects',
    category: 'UI/UX · Visual Design',
    status: 'Design',
    summary: 'Interfaces, branding, visual explorations, design systems, and the experiments where an idea becomes something tangible.',
    accent: '#bfe765',
    tint: '#52732f',
  },
  {
    folderId: 'media',
    title: 'Media & Storytelling',
    category: 'Podcast · Video · Content',
    status: 'Stories',
    summary: 'Podcasts, video work, editing, and content that gives the overlooked turning points in people’s lives a place to be heard.',
    accent: '#f0b4cf',
    tint: '#8e174e',
  },
  {
    folderId: 'impact',
    title: 'Impact & Leadership',
    category: 'Community · Initiatives',
    status: 'People first',
    summary: 'Volunteer work, NGO initiatives, student leadership, and projects built around community, collaboration, and real-world impact.',
    accent: '#f6d576',
    tint: '#826317',
  },
]

// This collection is intentionally shaped like future CMS data. The admin API can replace it
// with published posts without requiring a redesign of the notes section.
const researchNotes = [
  {
    title: 'Meta glasses: the next interface is already on your face.',
    topic: 'Wearable AI',
    readTime: '07 min read',
    excerpt: 'What is changing in Meta’s glasses, what still feels unresolved, and why the public may be more willing to wear AI than use another screen.',
    slug: 'meta-glasses-and-the-public',
    accent: '#76d7e8',
    date: '16 August 2026',
    cover: 'https://media.lenscrafters.com/2025/Calendar/Week_38_September/MetaRayban/LP/D_Carousel_Transitions.jpg',
    coverAlt: 'Meta Ray-Ban Display smart glasses',
    thesis: 'Meta is making AI feel less like an app and more like an accessory. The interesting question is not whether the glasses can do more — it is whether people will trust them enough to wear them everywhere.',
    sections: [
      { title: 'What is improving', copy: 'The 2025 generation moved the product from a camera-and-speaker experiment toward a more useful wearable: improved video capture, longer battery life, live translation, and a display-led model controlled through a wristband. The direction is clear: less phone reaching, more ambient help.' },
      { title: 'The public question', copy: 'The utility is compelling when it is hands-free — translation, navigation, capture, calls — but public acceptance depends on consent and social clarity. A device that looks ordinary must also make its recording and AI behaviour feel ordinary, legible, and respectful.' },
      { title: 'My take', copy: 'The win is not a futuristic heads-up display. It is making moments easier to understand without making the person wearing it feel removed from the people around them. That is a design problem as much as an AI problem.' },
    ],
    metrics: [
      { value: '3K', label: 'video capture on Ray-Ban Meta Gen 2' },
      { value: '2×', label: 'battery-life claim versus the prior generation' },
      { value: '1', label: 'core adoption test: useful without being intrusive' },
    ],
    chart: {
      label: 'Wearable AI readiness — qualitative signal',
      note: 'An editorial assessment of the factors shaping adoption; not a market-share measurement.',
      points: [{ label: 'Utility', value: 88 }, { label: 'Comfort', value: 72 }, { label: 'Trust', value: 48 }, { label: 'Social consent', value: 41 }],
    },
    sources: [
      { label: 'Meta — Ray-Ban Display announcement', url: 'https://about.fb.com/news/2025/09/meta-ray-ban-display-ai-glasses-emg-wristband/' },
      { label: 'Meta — Ray-Ban Meta Gen 2 update', url: 'https://about.fb.com/news/2025/09/ray-ban-meta-gen-2-better-battery-life-video-capture/' },
      { label: 'The Independent — launch and public-demand context', url: 'https://www.independent.co.uk/extras/indybest/gadgets-tech/ray-ban-meta-smart-glasses-display-release-date-uk-b2950880.html' },
    ],
  },
  {
    title: 'The AI chip bill: why everyday tech is getting more expensive.',
    topic: 'Semiconductors',
    readTime: '06 min read',
    excerpt: 'AI data centres are competing for the same memory supply that feeds our phones, laptops, storage, and gaming devices.',
    slug: 'the-ai-chip-bill',
    accent: '#b8e36b',
    date: '16 August 2026',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=88',
    coverAlt: 'Close-up of a computer circuit board',
    thesis: 'The cost of AI is not only paid by the companies building models. When data centres compete aggressively for high-performance memory, consumer hardware can inherit the price pressure.',
    sections: [
      { title: 'Why the squeeze is happening', copy: 'AI servers need far more memory bandwidth than conventional systems. Suppliers have shifted capacity toward high-margin HBM, server DRAM, and enterprise SSDs — leaving less flexibility for standard DRAM and storage used in consumer products.' },
      { title: 'The price signal', copy: 'TrendForce forecast sharp contract-memory increases in 2Q 2026 as suppliers prioritised AI and server demand. These are memory contract forecasts, not a universal price increase for every product — but they are an early warning for laptop, phone, SSD, and gaming-device bill-of-materials pressure.' },
      { title: 'What I am watching', copy: 'The important signal is not just the percentage. It is where brands respond: higher retail prices, smaller storage configurations, delayed upgrades, or stronger vertical supply agreements. AI hardware is becoming a supply-chain story.' },
    ],
    metrics: [
      { value: '58–63%', label: 'projected conventional DRAM contract rise, QoQ / 2Q26' },
      { value: '70–75%', label: 'projected NAND Flash contract rise, QoQ / 2Q26' },
      { value: 'AI', label: 'data-centre demand reorders capacity priorities' },
    ],
    chart: {
      label: 'Projected memory contract price movement — 2Q 2026',
      note: 'Ranges visualise TrendForce’s contract-price forecast. They do not represent a retail-price forecast for every consumer device.',
      points: [{ label: 'Conventional DRAM', value: 63 }, { label: 'NAND Flash', value: 75 }, { label: 'HBM demand', value: 91 }, { label: 'Consumer impact', value: 54 }],
    },
    sources: [
      { label: 'TrendForce — AI server demand and 2Q26 memory pricing', url: 'https://www.trendforce.com/presscenter/news/20260331-12995.html' },
      { label: 'TrendForce — the memory wall and consumer impact', url: 'https://www.trendforce.com/insights/memory-wall' },
      { label: 'Counterpoint — device pricing pressure from memory', url: 'https://counterpointresearch.com/en/reports/ai-is-breaking-the-cheap-phone' },
      { label: 'Micron 2025 Form 10-K — AI-driven memory demand', url: 'https://www.sec.gov/Archives/edgar/data/723125/000072312525000028/mu-20250828.htm' },
    ],
  },
  {
    title: 'Apple Intelligence: from missed promise to a cautious reset.',
    topic: 'Apple Intelligence',
    readTime: '08 min read',
    excerpt: 'Apple’s AI rollout lost trust when its most personal Siri promises slipped. The newer operating-system work looks more deliberate — but the comeback still has to earn belief.',
    slug: 'apple-intelligence-a-cautious-reset',
    accent: '#f2a6c6',
    cover: 'https://www.apple.com/newsroom/images/2024/09/apple-intelligence-comes-to-iphone-ipad-and-mac-starting-next-month/article/Apple-Intelligence-starting-next-month_big.jpg.large.jpg',
    coverAlt: 'iPhone, iPad, and Mac displaying Apple Intelligence features',
    date: '16 August 2026',
    thesis: 'Apple Intelligence is not a clean success story. The original promise moved faster than the product, but the latest operating-system roadmap suggests a more careful attempt to rebuild the experience around integration, privacy, and a genuinely more capable Siri.',
    sections: [
      { title: 'Where the promise broke', copy: 'The personalized Siri capabilities Apple promoted were delayed, and errors in AI-generated news summaries damaged confidence in the idea that “helpful” automatically means dependable. The gap was not only technical — it was a product-trust gap.' },
      { title: 'What changed', copy: 'iOS 26 expanded Apple Intelligence features across compatible devices. In June 2026, Apple introduced its new Siri AI for developer testing with iOS 27. That is a sign of progress, not proof of a finished turnaround: developer testing and public availability are different milestones.' },
      { title: 'The standard now', copy: 'For Apple, the next version cannot simply be clever. It needs to be predictable, clear about limits, and integrated so well that the user never has to wonder whether an “intelligent” action will be right, private, or available.' },
    ],
    metrics: [
      { value: '2024', label: 'Apple Intelligence announced' },
      { value: 'iOS 26', label: 'broader features became available in 2025' },
      { value: 'iOS 27', label: 'new Siri AI entered developer testing in 2026' },
    ],
    chart: {
      label: 'Apple Intelligence confidence curve — editorial reading',
      note: 'A directional timeline of product confidence, not user-survey data.',
      points: [{ label: 'Launch promise', value: 82 }, { label: 'Siri delay', value: 31 }, { label: 'iOS 26', value: 56 }, { label: 'iOS 27 testing', value: 68 }],
    },
    sources: [
      { label: 'Apple — iOS 26 and Apple Intelligence', url: 'https://www.apple.com/newsroom/2025/06/apple-elevates-the-iphone-experience-with-ios-26/' },
      { label: 'Apple — new Apple Intelligence features, iOS 26', url: 'https://www.apple.com/newsroom/2025/09/new-apple-intelligence-features-are-available-today/' },
      { label: 'Apple — Siri AI announcement for iOS 27 developer testing', url: 'https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/' },
      { label: 'Associated Press — the delayed Siri AI rollout', url: 'https://apnews.com/article/5d18df90b03e4e98ac528c8802e2b531' },
    ],
  },
]

// A careful enrichment for the earlier Samsung S12 Ultra draft created in the
// local editor. Samsung does not list an S12 Ultra as a current model, so this
// note is framed as a product-thinking concept rather than unverified specs.
const samsungS12UltraResearchEnrichment = {
  topic: 'Mobile product thinking',
  readTime: '06 min read',
  excerpt: 'A concept-led look at what an Ultra phone would need to make its size, intelligence, and camera ambition feel genuinely useful every day.',
  thesis: 'The most convincing “Ultra” phone is not the one with the longest specification sheet. It is the one that gives a creative or busy person a clear reason to carry a larger, more capable tool without making every interaction feel heavier.',
  sections: [
    { title: 'Start with a reason, not a feature list', copy: 'An Ultra model has to earn the extra price and scale. The strongest case is not another headline feature; it is a dependable combination of screen space, camera confidence, battery endurance, and a workflow that removes small bits of friction from a full day.' },
    { title: 'AI should be quiet enough to trust', copy: 'Helpful intelligence should feel like a shortcut, not a performance. The product opportunity is in practical moments: cleaning up a note, finding something in a photo library, translating a conversation, or making a complex camera setting easier to understand. Every suggestion should stay reviewable and easy to undo.' },
    { title: 'The camera is the emotional reason to upgrade', copy: 'For an Ultra buyer, the camera has to be reliable in the moments people cannot repeat: a low-light dinner, a long-distance detail, a fast-moving friend, or a quick video that needs to look intentional. Consistency matters more than a single impressive lab result.' },
    { title: 'What I would measure', copy: 'I would judge the concept by how often it makes the phone feel calmer and more capable: fewer missed shots, less battery anxiety, fewer repetitive taps, and more confidence that personal information stays personal. That is a better product story than raw benchmark numbers alone.' },
  ],
  metrics: [
    { value: '01', label: 'clear reason to choose Ultra over the standard model' },
    { value: '04', label: 'moments that matter: capture, create, organise, protect' },
    { value: '0', label: 'unverified specifications presented as fact' },
  ],
  chart: {
    label: 'Ultra-phone concept priorities — editorial weighting',
    note: 'A product-design point of view, not measured market research or a Samsung specification sheet.',
    points: [{ label: 'Camera confidence', value: 90 }, { label: 'All-day endurance', value: 84 }, { label: 'Useful AI', value: 76 }, { label: 'Privacy clarity', value: 82 }],
  },
  sources: [
    { label: 'Samsung — current Galaxy smartphone line-up', url: 'https://www.samsung.com/us/smartphones/' },
  ],
}

// This will become the course/certification collection managed by the future admin dashboard.
const learningArchive = [
  {
    slug: 'mathematics-for-machine-learning-linear-algebra',
    title: 'Mathematics for Machine Learning: Linear Algebra',
    provider: 'Imperial College London · Coursera',
    completed: 'August 2026',
    length: 'Course certificate',
    focus: ['Linear algebra', 'Machine learning'],
    overview: 'A focused introduction to the mathematical language behind machine learning models, with emphasis on the ideas that make vectors, matrices, and transformations useful in practice.',
    lessons: ['Represent data and transformations with vectors and matrices.', 'Recognise how linear algebra supports model inputs, weights, and feature spaces.', 'Approach machine learning concepts with stronger mathematical intuition.'],
    certificate: certificateMathMachineLearning,
    accent: '#849bff',
  },
  {
    slug: 'introduction-to-large-language-models',
    title: 'Introduction to Large Language Models',
    provider: 'Google Cloud · Coursera',
    completed: 'August 2026',
    length: 'Course certificate',
    focus: ['Large language models', 'Generative AI'],
    overview: 'A concise foundation in how large language models fit into the generative-AI landscape, what they can help with, and how to think about their use with clarity and responsibility.',
    lessons: ['Recognise the role large language models play in modern generative-AI products.', 'Connect language-model capabilities to practical use cases and everyday workflows.', 'Evaluate AI tools with attention to usefulness, limits, and responsible use.'],
    certificate: certificateIntroductionToLargeLanguageModels,
    accent: '#66b6e8',
  },
  {
    slug: 'introduction-to-git-and-github',
    title: 'Introduction to Git and GitHub',
    provider: 'Google · Coursera',
    completed: 'August 2026',
    length: 'Course certificate',
    focus: ['Git', 'GitHub', 'Version control'],
    overview: 'A practical introduction to the version-control habits that make software work safer, easier to revisit, and far more collaborative.',
    lessons: ['Track changes with Git so experiments and progress remain understandable.', 'Use GitHub as a shared home for projects, collaboration, and review.', 'Build a more deliberate workflow around versions, branches, and project history.'],
    certificate: certificateIntroductionToGitAndGithub,
    accent: '#e9906d',
  },
  {
    slug: 'introduction-to-generative-ai',
    title: 'Introduction to Generative AI',
    provider: 'Google Cloud · Coursera',
    completed: 'August 2026',
    length: 'Course certificate',
    focus: ['Generative AI', 'AI foundations'],
    overview: 'A foundational Google Cloud course that frames generative AI as a practical field: what it creates, where it can be useful, and why thoughtful application matters as much as the technology itself.',
    lessons: ['Understand the central idea behind generative AI and the kinds of content it can create.', 'Recognise where generative tools can support real products and creative work.', 'Approach emerging AI capabilities with a practical, human-centred perspective.'],
    certificate: certificateIntroductionToGenerativeAi,
    certificateFile: certificateIntroductionToGenerativeAiPdf,
    accent: '#7dce98',
  },
  {
    slug: 'succeed-in-the-age-of-ai',
    title: 'Succeed in the Age of AI',
    provider: 'Udemy',
    completed: 'December 2025',
    length: '8.5 hours',
    focus: ['AI strategy', 'Career growth'],
    overview: 'An overview of how AI is reshaping work and how to stay thoughtful, adaptable, and useful while building a career around emerging technology.',
    lessons: ['Frame AI as a tool for better work rather than a replacement for judgment.', 'Identify the human skills that become more valuable alongside AI.', 'Build a learning mindset for a fast-moving technical landscape.'],
    certificate: certificateSucceedAi,
    accent: '#b578ff',
  },
  {
    slug: 'python-functions-for-data-science',
    title: 'Python Functions for Data Science',
    provider: 'LinkedIn Learning',
    completed: 'April 2025',
    length: '1 hour 30 minutes',
    focus: ['Python', 'Data analysis'],
    overview: 'A practical refresh on writing reusable Python functions that make data work more structured, readable, and easier to scale.',
    lessons: ['Break repeated analysis tasks into clean, reusable functions.', 'Use parameters and return values to make data code easier to test.', 'Write more maintainable Python workflows for analysis.'],
    certificate: certificatePythonFunctions,
    accent: '#5fa9e8',
  },
  {
    slug: 'python-for-data-visualization',
    title: 'Python for Data Visualization',
    provider: 'LinkedIn Learning',
    completed: 'April 2025',
    length: '1 hour 21 minutes',
    focus: ['Python', 'Data visualization'],
    overview: 'A short course on translating raw information into visual stories that help people see patterns, comparisons, and insights quickly.',
    lessons: ['Select visual forms that match the question being asked.', 'Use Python to turn data into clear, readable charts.', 'Treat visualisation as communication, not decoration.'],
    certificate: certificatePythonVisualization,
    accent: '#81c5d4',
  },
  {
    slug: 'introduction-to-industry-4-and-industrial-iot',
    title: 'Introduction to Industry 4.0 and Industrial IoT',
    provider: 'NPTEL · IIT Kharagpur',
    completed: 'July — October 2025',
    length: '12-week course · 62%',
    focus: ['Industry 4.0', 'Industrial IoT'],
    overview: 'A broad foundation in connected industrial systems, showing how sensors, data, automation, and intelligent decision-making work together.',
    lessons: ['Understand the core ideas behind Industry 4.0 and Industrial IoT.', 'Connect IoT data flows to real operational use cases.', 'See how intelligent systems can improve physical-world processes.'],
    certificate: certificateIndustryIot,
    accent: '#e9ae57',
  },
]

// Experience will use this same structured shape when it is moved into the future admin dashboard.
const experienceChapters = [
  {
    slug: 'synk-official',
    kind: 'Internship',
    organisation: 'Synk Official',
    role: 'Web Developer & Designer',
    period: '5 June — 5 August 2025',
    location: 'Chennai, India',
    copy: 'At Synk Official, I worked across web design, development, and on-site content shoots — helping shape polished digital experiences for client brands and products.',
    overview: 'A two-month agency internship that taught me how detailed product websites, brand identity, and social storytelling come together. From web design and development to on-site client shoots, I learned to approach every deliverable as part of a wider brand story.',
    lessons: ['Design and build product websites with the detail a client brand needs.', 'Support brand narratives beyond the screen through on-site visual content.', 'Learn from a supportive team culture while turning beginner curiosity into dependable delivery.'],
    skills: ['Web design', 'Web development', 'On-site shoots', 'Brand strategy'],
    note: 'LOR · 5 Jun — 5 Aug 2025',
    accent: '#69c8d6',
    visual: synkOfficialLogo,
    visualAlt: 'Synk Official logo',
    detailVisual: synkNavikaOnsite,
    detailVisualAlt: 'Seshadhri with Navika Menon during a Synk Official client shoot',
  },
  {
    slug: 'kryos-gaming',
    kind: 'Startup',
    organisation: 'Kryos Gaming',
    role: 'Head of Marketing & Website Development',
    period: 'Completed chapter',
    location: 'National-level esports tournament',
    copy: 'Led marketing and website development for Run It Back, Kryos Gaming’s four-day national-level VALORANT tournament. From promotion to match coverage, I helped turn a fast-moving tournament with 64 teams into a finished, shared experience.',
    overview: 'My Kryos chapter concluded with Run It Back — a four-day national-level VALORANT tournament built with a small team and a lot of momentum. As Head of Marketing and the technical lead for the website, I worked across the campaign, the digital home for the event, and the coverage required to keep a packed run of matches visible. Seeing all 64 teams take the stage and carrying the tournament through to the finish is something I am genuinely proud of.',
    lessons: ['Led the marketing direction for a national-level tournament and built momentum around Run It Back.', 'Owned the tournament website work, turning event information into a clear digital experience for players and viewers.', 'Supported coverage across a demanding four-day match schedule while coordinating with the team through the final game.'],
    skills: ['Tournament marketing', 'Website development', 'Match coverage', 'Esports operations'],
    note: '64 teams · 4 days · Run It Back',
    accent: '#e47ec1',
    visual: kryosRunItBackPoster,
    visualAlt: 'Kryos Gaming Run It Back VALORANT tournament winners poster',
  },
]

const leadershipChapters = [
  { number: '01', slug: 'elite-club', title: 'Elite Club', role: 'President', copy: 'Emerging Leaders of Information Technology and Engineering — a chapter that taught me technical community, people leadership, and how to grow with a team.', tags: ['Leadership', 'Mentoring', 'Events'], accent: '#c7ef66', visual: eliteClubLogo, visualAlt: 'Elite Club logo', visualVariant: 'logo' },
  { number: '02', slug: 'volunteers-of-india', title: 'Volunteers of India', role: 'Volunteer', copy: 'Helped bring colour to Chennai government-school walls through hands-on mural work with fellow volunteers.', tags: ['Community', 'School murals', 'Chennai'], accent: '#f4bb71', visual: volunteersOfIndiaLogo, visualAlt: 'Volunteers of India logo', visualVariant: 'logo-light' },
  { number: '03', slug: 'pampered-paws-adopt-in', title: 'Pampered Paws × iadopt.in', role: 'Volunteer', copy: 'Supported a dog-adoption event built around care, connection, and finding loving homes for dogs.', tags: ['Animal welfare', 'Adoption event', 'Community'], accent: '#ffac4d', visual: pamperedPawsLogo, visualAlt: 'Pampered Paws logo', visualVariant: 'logo-light' },
]

const definingBuildSlides = [
  { src: peopleFirstOne, alt: 'Realtime weather finder web application' },
  { src: definingBuildTwo, alt: 'Edge AI health watch display and sensor test' },
  { src: definingBuildThree, alt: 'Edge AI health watch model initialisation screen' },
]

const peopleFirstSlides = [
  { src: definingBuildOne, alt: 'Seshadhri with a group at a community event' },
  { src: peopleFirstTwo, alt: 'Design Summit coordinator badge' },
  { src: peopleFirstThree, alt: 'Students playing table tennis together' },
]

const characterInspirations = [
  {
    slug: 'gojo-satoru',
    name: 'Gojo Satoru',
    source: 'Jujutsu Kaisen',
    marker: 'GS',
    accent: '#8f8cff',
    summary: 'Power can feel effortless from the outside, but Gojo carries the weight of being the person everyone expects to have the answer.',
    lens: 'His confidence, humour, and commitment to changing the system through the next generation are what stay with me.',
    takeaway: 'Be capable, but use that capability to make room for other people to grow.',
    image: gojoFlowSmile,
    imageSource: 'User-supplied Gojo artwork',
    imageSourceUrl: '',
    gallery: [gojoFlowSmile, gojoFlowStrength, gojoFlowTriptych],
  },
  {
    slug: 'harvey-specter',
    name: 'Harvey Specter',
    source: 'Suits',
    marker: 'HS',
    accent: '#f2b15b',
    summary: 'Harvey is known for his composure under pressure, sharp preparation, and refusal to let doubt speak louder than his own belief.',
    lens: 'I admire the self-belief, but also the loyalty beneath the confidence and the willingness to learn when he gets it wrong.',
    takeaway: 'Walk into the room prepared, back your people, and keep your word.',
    image: harveyFlowBaseball,
    imageSource: 'User-supplied Harvey Specter image',
    imageSourceUrl: '',
    gallery: [harveyFlowBaseball, harveyFlowMike, harveyFlowLife],
  },
  {
    slug: 'izuku-midoriya',
    name: 'Izuku “Deku” Midoriya',
    source: 'My Hero Academia',
    marker: 'DM',
    accent: '#55ba8a',
    summary: 'Deku begins with a dream people dismiss, then earns every step forward through observation, effort, empathy, and grit.',
    lens: 'His story reminds me that ambition is strongest when it stays kind and when it is willing to keep learning.',
    takeaway: 'You do not need to start with everything. Start with heart, then keep showing up.',
    image: dekuFlowSunrise,
    imageSource: 'User-supplied Deku image',
    imageSourceUrl: '',
    gallery: [dekuFlowSunrise, dekuFlowPortrait, dekuFlowSky],
  },
  {
    slug: 'manikandan-dada',
    name: 'Manikandan',
    source: 'Dada · Kavin',
    marker: 'DK',
    accent: '#e96e64',
    summary: 'Kavin’s Manikandan is imperfect and overwhelmed, yet he gradually chooses responsibility and care when life asks more of him.',
    lens: 'The character is a reminder that growing up is not about pretending to be perfect; it is about stepping up when it matters.',
    takeaway: 'Own the hard parts of your story and become dependable through your actions.',
    image: manikandanFlowPortrait,
    imageSource: 'User-supplied Manikandan image',
    imageSourceUrl: '',
    gallery: [manikandanFlowPortrait, manikandanFlowCare, manikandanFlowGrounded],
  },
  {
    slug: 'arjun-jersey',
    name: 'Arjun',
    source: 'Jersey · Nani',
    marker: 'JN',
    accent: '#6c99d8',
    summary: 'Arjun’s return to cricket is about a second chance, not just at a dream, but at becoming someone his son can believe in.',
    lens: 'His quiet persistence and love for family connect deeply with my own wish to make my parents proud.',
    takeaway: 'A dream can be delayed. It does not have to be abandoned.',
    image: arjunFlowPortrait,
    imageSource: 'User-supplied Arjun image',
    imageSourceUrl: '',
    gallery: [arjunFlowPortrait, arjunFlowFamily, arjunFlowStation],
  },
  {
    slug: 'asta', name: 'Asta', source: 'Black Clover', marker: 'AS', accent: '#c83c3c',
    summary: 'Born without magic in a world built around it, Asta answers every limitation with training, loyalty, and an almost impossible amount of belief.',
    lens: 'What stays with me is how loudly he believes in the people around him. His confidence is not about being above others; it is about refusing to leave anyone behind.',
    takeaway: 'A disadvantage does not get the final word when effort, discipline, and belief keep speaking.',
    context: 'Asta makes persistence feel active. He turns the gap between where he is and where he wants to be into a daily practice, while keeping his friendships and promise to his squad at the centre.',
    traits: ['Unbreakable effort', 'Loyalty to the squad', 'Belief before proof'],
    image: astaFlowLiebe, imageSource: 'User-supplied Asta image', imageSourceUrl: '', gallery: [astaFlowLiebe, astaFlowFocus, astaFlowQuote],
  },
  {
    slug: 'rock-lee', name: 'Rock Lee', source: 'Naruto', marker: 'RL', accent: '#6b9c4b',
    summary: 'Rock Lee cannot rely on the abilities most shinobi take for granted, so he chooses a harder craft: relentless training, physical discipline, and a spirit that refuses embarrassment.',
    lens: 'Lee is proof that sincerity can be powerful. He puts in the work where people can see it, keeps going after setbacks, and honours the teachers and friends who believe in him.',
    takeaway: 'Let effort become your signature. What you practise with care eventually speaks for you.',
    context: 'Lee is not written as naturally gifted, and that is exactly why his victories land. He makes the hard route look meaningful: repetition, humility, recovery, then another try.',
    traits: ['Discipline over shortcuts', 'Optimism under pressure', 'Respect for the craft'],
    image: 'https://www.tv-tokyo.co.jp/anime/naruto/images/chara/chara_08_1.png', imageSource: 'TV Tokyo · Naruto character profile', imageSourceUrl: 'https://www.tv-tokyo.co.jp/anime/naruto/chara/', gallery: [],
  },
  {
    slug: 'kabilan', name: 'Kabilan', source: 'Sarpatta Parambarai', marker: 'KP', accent: '#ad5830',
    summary: 'Kabilan is a boxer shaped by North Madras, pride, community, and a fight that becomes bigger than the ring. His fall and return give the story its pulse.',
    lens: 'I connect with the way he learns that raw talent is not enough. He has to rebuild his discipline, listen to the people who love him, and earn his place again.',
    takeaway: 'A comeback is not one dramatic moment. It is the decision to train, listen, and return every day.',
    context: 'Kabilan carries the weight of a whole world around him: his coach, family, locality, and the history in the ring. That makes his resilience feel collective rather than individual.',
    traits: ['Grit after defeat', 'Community and identity', 'Earned redemption'],
    image: 'https://m.media-amazon.com/images/M/MV5BOTc5NWI0NWMtMzJlYS00NTRlLTkyNDYtZjhmYzRiOWRjNjBlXkEyXkFqcGc%40._V1_.jpg', imageSource: 'Sarpatta Parambarai promotional still', imageSourceUrl: 'https://www.imdb.com/name/nm1942134/news/', gallery: [],
  },
  {
    slug: 'raghuvaran', name: 'Raghuvaran', source: 'Velaiilla Pattadhari', marker: 'RV', accent: '#3d76c8',
    summary: 'Raghuvaran starts as an unemployed graduate trying to prove that his degree, ambition, and self-respect still mean something in a world that keeps dismissing him.',
    lens: 'His frustration is recognisable, but so is his refusal to stay there. He keeps learning, adapts to the work in front of him, and holds onto the people who ground him.',
    takeaway: 'Your starting position is not your final identity. Keep building the proof of what you can do.',
    context: 'Raghuvaran makes the in-between stage feel seen: the time when expectations are high, opportunities feel small, and you have to create momentum before anyone else notices it.',
    traits: ['Self-respect', 'Adaptability', 'Persistence through uncertainty'],
    image: 'https://1.bp.blogspot.com/-J55iZL5mFKY/U7POXdukYpI/AAAAAAAAIB4/qDKdZK4fR9U/s1600/VIP_DHANUSH%2B%2B%286%29.jpg', imageSource: 'Velaiilla Pattadhari promotional still', imageSourceUrl: 'https://tipforangoodhealth.blogspot.com/2014/07/velaiyilla-pattathari-movie-dhanush.html', gallery: [],
  },
  {
    slug: 'nedumaaran-maara-rajangam', name: 'Nedumaaran “Maara” Rajangam', source: 'Soorarai Pottru', marker: 'MR', accent: '#b56c32',
    summary: 'Maara sees flying not as a luxury, but as something ordinary people should be able to reach. That idea asks him to fight class, bureaucracy, loss, and disbelief.',
    lens: 'I admire the scale of his dream and the stubborn humanity inside it. He does not only want to win; he wants to make the door wider for people like him.',
    takeaway: 'Let your ambition solve a real problem for someone beyond yourself.',
    context: 'Maara is at his best when the dream gets expensive. The story keeps returning to resilience, but also to partnership, humility, and the courage to restart with less than before.',
    traits: ['Purpose-led ambition', 'Courage to restart', 'Making access wider'],
    image: 'https://images.indianexpress.com/2020/11/suriya.jpg', imageSource: 'Indian Express · Soorarai Pottru still', imageSourceUrl: 'https://indianexpress.com/article/entertainment/tamil/suriya-soorarai-pottru-is-an-important-story-to-tell-7047365/', gallery: [],
  },
  {
    slug: 'tanjiro-kamado', name: 'Kamado Tanjiro', source: 'Demon Slayer', marker: 'TK', accent: '#4f8b73',
    summary: 'Tanjiro carries grief without letting it close his heart. He trains fiercely to protect his sister and meets even his enemies with an unusual amount of compassion.',
    lens: 'His kindness never makes him passive. It becomes a source of clarity: he knows what he is fighting for, treats people with dignity, and still acts when action is needed.',
    takeaway: 'Keep your heart soft and your resolve strong. The two can belong together.',
    context: 'Tanjiro’s journey is powerful because his empathy survives the worst moments. He reminds me that strength can be patient, observant, and deeply caring without losing its edge.',
    traits: ['Compassion with courage', 'Patient discipline', 'Family-first resolve'],
    image: 'https://cms.dmpcdn.com/moviearticle/2021/02/19/31ebfc50-7263-11eb-9057-2d10fb4d0cf4_original.jpg', imageSource: 'Demon Slayer character art', imageSourceUrl: 'https://entertainment.trueid.net/detail/vD7LKNr253yR', gallery: [],
  },
  {
    slug: 'naruto-uzumaki', name: 'Naruto Uzumaki', source: 'Naruto', marker: 'NU', accent: '#ee8b2b',
    summary: 'Naruto begins as the person most people underestimate and avoid, then slowly turns loneliness into connection, purpose, and a promise to protect his village.',
    lens: 'His confidence has scars behind it. What makes him inspiring is not only that he dreams big, but that he keeps reaching for people who have given up on themselves.',
    takeaway: 'Being seen can begin with seeing other people first. Keep your promise and keep going.',
    context: 'Naruto’s optimism is hard-earned. He makes room for rivalry, friendship, failure, and grief, then refuses to let any of them shrink the future he imagines.',
    traits: ['Hope that persists', 'Loyalty to friends', 'Dreams made practical'],
    image: 'https://static.zerochan.net/Uzumaki.Naruto.full.3416551.png', imageSource: 'Naruto character art', imageSourceUrl: 'https://www.zerochan.net/3416551', gallery: [],
  },
  {
    slug: 'spider-man-peter-parker', name: 'Spider-Man / Peter Parker', source: 'Marvel', marker: 'SP', accent: '#d9484d',
    summary: 'Peter Parker is always balancing ordinary pressure with extraordinary responsibility. The mask gives him power, but his choices reveal the person beneath it.',
    lens: 'I like that he is not perfect or endlessly confident. He makes mistakes, feels the cost, and still decides to show up for people who need help.',
    takeaway: 'Responsibility is not about never failing. It is about returning to what matters after you do.',
    context: 'Spider-Man’s story makes heroism feel close to everyday life: helping where you can, carrying consequences, and keeping your humour when the day becomes too heavy.',
    traits: ['Responsibility', 'Everyday courage', 'Humour under pressure'],
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg', imageSource: 'Marvel comic cover art', imageSourceUrl: 'https://en.wikipedia.org/wiki/Spider-Man', gallery: [],
  },
]

const characterGallerySeeds = {
  'gojo-satoru': [gojoLineArtClean, gojoBlindfoldTriptych, gojoBlindfoldColour, gojoStationScene],
  'harvey-specter': ['https://fandomwire.com/wp-content/uploads/2023/10/harvey.webp', 'https://media.gq-magazin.de/photos/5c9cdbd5ec8d0e6e9f4053f9/master/pass/suits-song-quer.jpg', 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/03/ustv-suits-season-4-gabriel-macht-1.jpg?crop=0.8888888888888888xw%3A1xh%3Bcenter%2Ctop&resize=1200%3A%2A'],
  'izuku-midoriya': ['https://static.zerochan.net/Midoriya.Izuku.full.2301520.jpg', 'https://grizly.club/uploads/posts/2023-08/1692216572_grizly-club-p-kartinki-deku-bez-fona-36.jpg', 'https://www.animeunited.com.br/oomtumtu/2015/11/41.png'],
  'manikandan-dada': ['https://img.newsbricks.com/root_upld/general-news/2023/02/02587/org_93740202302101122.webp', 'https://image.tmdb.org/t/p/w780/8SLW8lr2mQaHNJtw2PwGwUCcw3h.jpg', 'https://media.senscritique.com/media/000021194926/1200/dada.jpg'],
  'arjun-jersey': ['https://media.newindianexpress.com/TNIE/import/2019/4/23/original/Jersey.jpg?auto=format%2Ccompress&enlarge=true&fit=max&h=675&w=1200', 'https://images.indianexpress.com/2019/03/nani-jersey-759.jpeg', 'https://media.assettype.com/gulfnews%2Fimport%2F2019%2F04%2F16%2Ftab-Nani-in-Jersey-%282019%29-1555422733104_16a4505e68f_medium.jpg?ar=40%3A21&auto=format%2Ccompress&enlarge=true&mode=crop&ogImage=true&overlay=false&overlay_position=bottom&overlay_width=100&w=1200'],
  asta: ['https://wibu.com.vn/wp-content/uploads/2024/10/Asta.png', 'https://static.wikia.nocookie.net/blackclover/images/6/6b/Asta_anime_profile.png/revision/latest?cb=20210305052646', 'https://i.pinimg.com/736x/36/3f/cf/363fcf08ccbe42e10bdba8898885185f.jpg'],
  'rock-lee': ['https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=%2Fnaruto%2Fimport%2Fimages%2Fnaruto01%2F101%EF%BD%9E200%2F152%2FC048.jpg', 'https://fictionhorizon.com/wp-content/uploads/2023/02/GuyBoruto.jpg', 'https://prod.assets.earlygamecdn.com/images/Gaara-vs-Rock-Lee.jpg?transform=Gallery+Item+Webp'],
  kabilan: ['https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/arya_1200x768.jpeg?size=1200%3A675', 'https://images.indianexpress.com/2021/07/Sarpatta-Parambarai.jpg?w=1200', 'https://images.livemint.com/img/2023/09/01/optimize/sarpatta_1693571167617_1693571168126.jpg'],
  raghuvaran: ['https://static.toiimg.com/thumb.cms?height=600&msid=52291433&width=600', 'https://www.tamilnow.com/movies/gallery/velai-illa-pattathari/saranya-ponvannan-dhanush-in-vip-movie-461.jpg', 'https://data1.ibtimes.co.in/en/full/528100/vip.jpg'],
  'nedumaaran-maara-rajangam': ['https://media.assettype.com/thequint/2020-11/d6461137-ac07-4293-8729-afda6d2f15d6/Screenshot_2020_11_06_at_6_15_39_PM.png', 'https://media.cinemaexpress.com/cinemaexpress%2Fimport%2F2020%2F10%2F22%2Foriginal%2FSuriya1.JPG?ar=40%3A21&auto=format%2Ccompress&enlarge=true&mode=crop&ogImage=true&overlay=false&overlay_position=bottom&overlay_width=100&w=1200', 'https://media.assettype.com/tnm/import/sites/default/files/Soorarai_Pottru.jpg?auto=format%2Ccompress&enlarge=true&fit=max&h=675&w=1200'],
  'tanjiro-kamado': ['https://kimetsu.com/anime/assets/img/main/pc/chara_01.png', 'https://i.pinimg.com/originals/9c/e8/e6/9ce8e67e7d3938a71f81c1c361381646.jpg?nii=t', 'https://www.shonenjump.com/j/img/_news/180806kimetsu_1.jpg'],
  'naruto-uzumaki': ['https://www.youloveit.ru/uploads/gallery/main/46/youloveit_ru_naruto106.jpg', 'https://static.zerochan.net/Uzumaki.Naruto.full.1290710.jpg', 'https://pngimg.com/uploads/naruto/naruto_PNG40.png'],
  'spider-man-peter-parker': ['https://i.pinimg.com/originals/71/76/ff/7176ff56175aa8a15dd8a782e38c78a9.png', 'https://cdn.marvel.com/content/1x/amazing-fantasy-spider-man-cover.jpg', 'https://www.comicbookherald.com/wp-content/uploads/2021/03/Todd-spidey-1.png'],
}

const characterCinematicVisuals = {
  asta: {
    image: 'https://media.distractify.com/brand-img/nBqP-cqbw/2160x1130/asta-black-clover-1650917780898.png',
    gallery: ['https://gdm-universal-media.b-cdn.net/epicstream/aa6e188fcf174b22b9ea07a3feb7137be1ae2e01-760x400.jpg?height=840&width=1600', 'https://pictures.betaseries.com/banners/series/331753/episodes/5fe22a79d5911.jpg', 'https://www.animesenpai.net/wp-content/uploads/2022/02/Black-Clover-Sad-Asta.jpg'],
  },
  'rock-lee': {
    image: 'https://images.plex.tv/photo?scale=2&size=large-720&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F4gpJWjIQqI9bxhzupttFUdycU6m.jpg',
    gallery: ['https://pbs.twimg.com/media/E0uaQO8VoAIJheH.jpg', 'https://pbs.twimg.com/media/E0uaUwfWYAAbSn0.jpg', 'https://static.wikia.nocookie.net/naruto/images/9/9c/Front_Lotus_Lee.png/revision/latest/scale-to-width-down/1200?cb=20240901230614'],
  },
  kabilan: {
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/arya_1200x768.jpeg?size=1200%3A675',
    gallery: ['https://images.indianexpress.com/2021/07/Sarpatta-Parambarai.jpg?w=1200', 'https://media.newindianexpress.com/TNIE/import/2021/7/24/original/Sarpatta_Paramarai_YouTube.jpg?auto=format%2Ccompress&enlarge=true&fit=max&h=675&w=1200', 'https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2FSarpattaParambarai_Screengrab_28032021_1200.jpg'],
  },
  raghuvaran: {
    image: 'https://m.media-amazon.com/images/S/pv-target-images/2daded07a3fd30f42514ca2e2522a06cbc8e539c3ed42679bac8a7ad534b5ee0._SX1080_FMpng_.png',
    gallery: ['https://www.cinejosh.com/gallereys/movies/normal/velaiyilla_pattathari_tamil_movie_stills_0807141003/velaiyilla_pattathari_tamil_movie_stills_0807141003_012.jpg', 'https://static.toiimg.com/photo/63877875.cms', 'https://www.tamilnow.com/movies/gallery/velai-illa-pattathari/saranya-ponvannan-dhanush-in-vip-movie-461.jpg'],
  },
  'nedumaaran-maara-rajangam': {
    image: 'https://static.moviecrow.com/marquee/will-soorarai-pottru-release-in-theaters/183965_thumb_665.jpg',
    gallery: ['https://media.newindianexpress.com/TNIE/import/2020/11/12/original/suriya.PNG?auto=format%2Ccompress&enlarge=true&fit=max&h=900&w=1200', 'https://media.assettype.com/thequint%2F2020-11%2Fd6461137-ac07-4293-8729-afda6d2f15d6%2FScreenshot_2020_11_06_at_6_15_39_PM.png?rect=0%2C0%2C737%2C387', 'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/10/26/Pictures/_71abe8e0-1751-11eb-8018-0bdbc3b69c17.jpg'],
  },
  'tanjiro-kamado': {
    image: 'https://img.asmedia.epimg.net/resizer/v2/DJ7G4RG3P5CPTD75A2AXFEECCY.jpg?auth=a1ead5e6224191c79d3caa1e078c777bf27780c5194d872a1c014462b804e0cd&height=828&smart=true&width=1472',
    gallery: ['https://hips.hearstapps.com/hmg-prod/images/demon-slayer-kimetsu-no-yaiba-the-movie-mugen-train-1621953249.jpg?crop=0.9106151847915929xw%3A1xh%3Bcenter%2Ctop&resize=1200%3A%2A', 'https://cdni.fancaps.net/file/fancaps-movieimages/6044871.jpg', 'https://i3.ruliweb.com/img/21/10/10/17c6a4f9f24533147.jpg'],
  },
  'naruto-uzumaki': {
    image: 'https://a.storyblok.com/f/178900/960x540/3c17a5dff4/naruto.jpg',
    gallery: ['https://images.plex.tv/photo?scale=2&size=large-720&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F754Qrt6RuRblgazi8LiZ26AkmzK.jpg', 'https://m.media-amazon.com/images/M/MV5BNjFmMGM2NjMtNTA5MC00ZDVlLTkyNWQtOTljOGNhNWI4MjhmXkEyXkFqcGc%40._V1_.jpg', 'https://i.ytimg.com/vi/zDvSAkouyq0/hq720.jpg'],
  },
  'spider-man-peter-parker': {
    image: 'https://www.looper.com/img/gallery/the-most-unexpected-things-to-happen-in-the-mcu/peter-parkers-decision-to-have-the-world-forget-him-in-spider-man-no-way-home-1643049211.jpg',
    gallery: ['https://www.looper.com/img/gallery/every-spider-man-movies-final-scene-ranked/spider-man-no-way-home-2021-1651671081.jpg', 'https://elcomercio.pe/resizer/v2/3RH7SMDXS5HN7IBCOEXRYEMVDA.jpg?auth=36c9235e720c0498cfdf460bb40b6447971493ef908e0836ccfac1d89e85a183&height=800&quality=75&smart=true&width=1200', 'https://imgix.bustle.com/uploads/image/2021/10/25/d7cbb411-9722-4f99-ab06-c612f4c8b372-the-emotional-damage-mysterio-has-on-peter-parker-1200x800.jpeg?crop=faces&fit=crop&fm=jpg&h=1200&w=1200'],
  },
}

const getCharacterLeadImage = (character) => characterCinematicVisuals[character.slug]?.image || character.image

const characterFlowNotes = {
  'gojo-satoru': {
    identity: 'The teacher who walks into every room like he already knows how the story ends.',
    story: 'Gojo is fun because he is impossibly confident, but I love that the confidence is not empty. Beneath all the jokes, he is trying to give his students the future that his own generation never really had.',
    noticed: ['Playful confidence', 'Sharp humour', 'Fierce protection', 'Future-minded'],
    returnTo: 'He makes strength look exciting, but also responsible. His best moments are not only when he wins — they are when he makes someone else believe they can.',
    carry: 'Be powerful if you can, but make that power useful to the people around you.',
  },
  'harvey-specter': {
    identity: 'The closer — the person you want beside you when the room gets difficult.',
    story: 'Harvey has the suits, the comebacks, and the confidence, but that is not why he works for me. I like seeing the man behind the polish: someone who learns that winning matters less when you lose the people who made the fight worth having.',
    noticed: ['Preparation', 'Composure', 'Loyalty', 'Accountability'],
    returnTo: 'He reminds me that confidence is most convincing when it is backed by work, loyalty, and the courage to own a mistake.',
    carry: 'Do the preparation, stand by your people, and say what you mean.',
  },
  'izuku-midoriya': {
    identity: 'A boy who cared about being a hero long before anyone thought he could become one.',
    story: 'Deku never loses the part of himself that notices people. Even when he gets stronger, he is still the kid who studies everyone around him because he genuinely wants to understand how to help.',
    noticed: ['Curiosity', 'Empathy', 'Stubborn effort', 'Courage to move first'],
    returnTo: 'I love that his ambition has a heart. He does not chase strength just to be admired; he wants to be the person who arrives when someone is scared.',
    carry: 'Keep learning, stay kind, and let effort turn into confidence.',
  },
  'manikandan-dada': {
    identity: 'A young man who is asked to grow up before he has figured himself out.',
    story: 'His journey hits because he does not become a perfect person overnight. He stumbles, gets things wrong, and still chooses to care when it would be easier to disappear.',
    noticed: ['Messiness', 'Tenderness', 'Resilience', 'Responsibility'],
    returnTo: 'I respect the way his love becomes visible through small actions. He proves that being dependable is not a personality trait you are born with; it is something you practise.',
    carry: 'You do not need to have everything figured out to show up for the people who need you.',
  },
  'arjun-jersey': {
    identity: 'A cricketer returning to a dream that everyone else thinks has already passed him by.',
    story: 'Arjun’s return never feels like a simple sports comeback. It feels like watching someone fight to recover his own sense of worth — and to become a person his son can look at with pride.',
    noticed: ['Quiet fire', 'Vulnerability', 'Pride', 'Love for family'],
    returnTo: 'I love that the dream is never separate from his family. Every time he walks back onto the field, it feels personal.',
    carry: 'A delayed dream is still a dream worth showing up for.',
  },
  asta: {
    identity: 'The loudest believer in the room, even when the world gives him every reason not to be.',
    story: 'Asta could have accepted the label of being powerless. Instead, he turns every disadvantage into another reason to train. His energy is impossible not to root for because it comes from pure belief in himself and his people.',
    noticed: ['Discipline', 'Optimism', 'Loyalty', 'Refusal to quit'],
    returnTo: 'He does not wait for someone to tell him he belongs. He works until the world has to make room for him.',
    carry: 'Keep going loudly. Sometimes belief has to arrive before proof.',
  },
  'rock-lee': {
    identity: 'A fighter who made effort his greatest talent.',
    story: 'Lee has always meant more to me than an underdog story. He makes training, failure, recovery, and trying again feel heroic. He never treats hard work as a consolation prize.',
    noticed: ['Discipline', 'Sincerity', 'Optimism', 'Love for the craft'],
    returnTo: 'His best moments make me want to work harder. He is proof that the path with no shortcuts can still be the most inspiring one.',
    carry: 'Let effort become your signature.',
  },
  kabilan: {
    identity: 'A boxer whose fight belongs to an entire neighbourhood, not just to him.',
    story: 'Kabilan’s strength is never only about his fists. I love how the film lets his failures hurt and makes his return something he has to earn — through discipline, humility, and the people who refuse to stop believing in him.',
    noticed: ['Pride', 'Grit', 'Loyalty to his roots', 'Will to return'],
    returnTo: 'His comeback feels lived-in. It carries his coach, his family, his street, and every lesson he ignored before he was ready to hear it.',
    carry: 'A comeback is not one big moment. It is the choice to return to the work every day.',
  },
  raghuvaran: {
    identity: 'An engineer trying to hold onto his self-respect while the world keeps asking him to wait.',
    story: 'Raghuvaran understands the uncomfortable part of ambition: having the degree, the dream, and the ability, but still not getting the chance. I like that he is frustrated, proud, and imperfect — it makes his determination feel honest.',
    noticed: ['Self-respect', 'Impatience', 'Humour', 'Resilience'],
    returnTo: 'His story gives dignity to the waiting stage. He does not pretend it is easy, but he refuses to let it define him forever.',
    carry: 'Where you begin is not where you have to stay.',
  },
  'nedumaaran-maara-rajangam': {
    identity: 'A dreamer who wants the sky to belong to ordinary people too.',
    story: 'Maara dreams at a scale most people would call unrealistic, and that is exactly what I love about him. His ambition is not only about proving himself; it is about opening a door that has stayed closed for too many people.',
    noticed: ['Courage', 'Resourcefulness', 'Restlessness', 'Conviction'],
    returnTo: 'He keeps choosing the bigger purpose, even when it costs him comfort, approval, and certainty.',
    carry: 'Dream big enough that someone else benefits when you get there.',
  },
  'tanjiro-kamado': {
    identity: 'A brother whose love becomes his reason to keep moving.',
    story: 'Tanjiro is one of the kindest characters I know, but his kindness is never weakness. He can understand someone’s pain and still do what must be done. That balance is what makes him special to me.',
    noticed: ['Compassion', 'Patience', 'Bravery', 'Devotion to family'],
    returnTo: 'He carries so much grief without letting it turn his heart cold. Every battle feels connected to the promise he made to his sister.',
    carry: 'Keep your heart soft and your resolve strong.',
  },
  'naruto-uzumaki': {
    identity: 'The lonely kid who turned the need to be seen into a promise to see everyone else.',
    story: 'Naruto’s dream is huge, but what gets me every time is how much pain sits behind his smile. He knows what it feels like to be left out, so he keeps reaching for people who think they are beyond saving.',
    noticed: ['Hope', 'Loyalty', 'Humour', 'Empathy'],
    returnTo: 'His optimism never feels naive. He earns it through every loss, every friendship, and every promise he refuses to break.',
    carry: 'Sometimes the first way to be seen is to truly see someone else.',
  },
  'spider-man-peter-parker': {
    identity: 'A regular person trying to do the right thing while life keeps getting complicated.',
    story: 'Peter is easy to love because he does not have a perfect life or perfect answers. He misses things, gets overwhelmed, and pays a real price for being Spider-Man — then he still puts the mask back on.',
    noticed: ['Responsibility', 'Humour', 'Compassion', 'Everyday courage'],
    returnTo: 'He makes heroism feel close to home. It is not about being fearless; it is choosing to help when you could have looked away.',
    carry: 'Failing does not remove your responsibility. It gives you another chance to return to what matters.',
  },
}

const characterTraitDetails = {
  'gojo-satoru': {
    'Playful confidence': 'He can make a serious room feel lighter without ever losing control of it.',
    'Sharp humour': 'The jokes are part of the armour, but they also make his presence impossible to ignore.',
    'Fierce protection': 'When it matters, his strength turns outward — especially for the students he wants to protect.',
    'Future-minded': 'What stays with me is that he fights for a better generation, not only another win.',
  },
  'harvey-specter': {
    Preparation: 'His confidence lands because the work happened before he walked into the room.',
    Composure: 'Even under pressure, he gives people the feeling that there is still a way through.',
    Loyalty: 'The people he chooses become part of the reason he is willing to fight so hard.',
    Accountability: 'His best growth is learning to own the damage, not just the victory.',
  },
  'izuku-midoriya': {
    Curiosity: 'He pays attention to people with the care of someone who genuinely wants to understand them.',
    Empathy: 'He sees fear and pain before he sees an opponent, which makes his heroism feel human.',
    'Stubborn effort': 'Every bit of progress feels earned because he never lets being behind become an excuse.',
    'Courage to move first': 'He has the instinct to step in before anyone asks him to, even when he is scared.',
  },
  'manikandan-dada': {
    Messiness: 'He is not written as a finished person, and that roughness makes every better choice feel real.',
    Tenderness: 'The care is quiet — in the small ways he stays, listens, and tries again.',
    Resilience: 'He keeps moving after mistakes instead of letting shame become the whole story.',
    Responsibility: 'Growing up, for him, means choosing to be present when disappearing would be easier.',
  },
  'arjun-jersey': {
    'Quiet fire': 'He carries the urge to prove himself without needing to announce it to everyone.',
    Vulnerability: 'The dream matters because you can see how much it costs him to try one more time.',
    Pride: 'His pride wounds him sometimes, but it is also the spark that makes him return to the field.',
    'Love for family': 'Every run feels connected to the people he wants to make proud, especially his son.',
  },
  asta: {
    Discipline: 'He makes repetition feel meaningful — every ordinary day of training becomes part of the answer.',
    Optimism: 'His belief is loud because he refuses to let other people decide what is possible for him.',
    Loyalty: 'He celebrates his friends and treats their dreams as seriously as his own.',
    'Refusal to quit': 'When the story tells him no, he treats it as the next thing he has to outwork.',
  },
  'rock-lee': {
    Discipline: 'He treats practice with the same respect other people give natural talent.',
    Sincerity: 'Nothing about his effort is performative; he truly loves getting better at the craft.',
    Optimism: 'Even pain and failure become reasons for him to train with more purpose.',
    'Love for the craft': 'He proves that caring deeply about the work can be its own kind of power.',
  },
  kabilan: {
    Pride: 'His pride is complicated — it hurts him, but it also refuses to let him accept being counted out.',
    Grit: 'The comeback is built through stubborn, unglamorous work rather than one lucky moment.',
    'Loyalty to his roots': 'His fights carry the people and places that shaped him, not just his own name.',
    'Will to return': 'The strongest thing about him is his decision to come back after he has every reason not to.',
  },
  raghuvaran: {
    'Self-respect': 'He will bend for the people he loves, but he never wants to lose himself in the process.',
    Impatience: 'The frustration matters because it comes from knowing he has more to give than his situation allows.',
    Humour: 'His humour keeps the difficult parts relatable instead of turning them into a speech.',
    Resilience: 'He keeps looking for another opening, even when the waiting has clearly worn him down.',
  },
  'nedumaaran-maara-rajangam': {
    Courage: 'He takes on rooms that were designed to make someone like him feel small.',
    Resourcefulness: 'When doors close, he finds another route instead of waiting for permission.',
    Restlessness: 'He cannot comfortably accept a system that leaves ordinary people outside the gate.',
    Conviction: 'The dream survives because it is rooted in something bigger than his own reputation.',
  },
  'tanjiro-kamado': {
    Compassion: 'He can understand someone’s suffering without allowing that suffering to excuse what they do.',
    Patience: 'His kindness has endurance; it stays with him even when the road is exhausting.',
    Bravery: 'His courage is not loud — it is the decision to keep moving while carrying grief.',
    'Devotion to family': 'Everything he does is tied to the promise that his sister will not be left alone.',
  },
  'naruto-uzumaki': {
    Hope: 'His optimism has weight because he had to build it after being denied it himself.',
    Loyalty: 'He holds on to people long enough for them to believe they are worth holding on to.',
    Humour: 'The childish jokes keep him open-hearted when the story could have made him bitter.',
    Empathy: 'He understands loneliness so well that he keeps reaching for people everyone else has abandoned.',
  },
  'spider-man-peter-parker': {
    Responsibility: 'He keeps showing up because he knows that ability means something only when it helps someone.',
    Humour: 'The jokes are how he stays himself when being a hero becomes heavy.',
    Compassion: 'He never forgets that the person in front of him might be having the worst day of their life.',
    'Everyday courage': 'His bravery feels close to home: he is tired, scared, imperfect, and still chooses to help.',
  },
}

const characterVisualOverrideSlugs = new Set(['gojo-satoru', 'harvey-specter', 'izuku-midoriya', 'manikandan-dada', 'arjun-jersey', 'asta'])

// Content is deliberately kept in one local, portable store. The admin page can
// update any of these collections without changing the presentation code.
const CONTENT_STORAGE_KEY = 'seshadhri-portfolio-content-v1'
const REEL_SHELF_SEED_VERSION_KEY = 'seshadhri-portfolio-reel-shelf-seed-version'
const REEL_SHELF_SEED_VERSION = '2026-08-28-personal-reel-additions'
const REEL_COPY_CORRECTION_VERSION_KEY = 'seshadhri-portfolio-reel-copy-correction-version'
const REEL_COPY_CORRECTION_VERSION = '2026-08-28-verified-reel-copy'
const CHIT_MACHINE_SEED_VERSION_KEY = 'seshadhri-portfolio-chit-machine-seed-version'
const CHIT_MACHINE_SEED_VERSION = '2026-08-25-expanded'
const CHARACTER_SHELF_SEED_VERSION_KEY = 'seshadhri-portfolio-character-shelf-seed-version'
const CHARACTER_SHELF_SEED_VERSION = '2026-08-27-flow-character-studies'
const PROJECT_SHELF_SEED_VERSION_KEY = 'seshadhri-portfolio-project-shelf-seed-version'
const PROJECT_SHELF_SEED_VERSION = '2026-08-25-codezee-telehealth-healthtrack-weather'
const RESEARCH_VISUAL_SEED_VERSION_KEY = 'seshadhri-portfolio-research-visual-seed-version'
const RESEARCH_VISUAL_SEED_VERSION = '2026-08-27-apple-intelligence-cover'
const SAMSUNG_RESEARCH_ENRICHMENT_VERSION_KEY = 'seshadhri-portfolio-samsung-research-enrichment-version'
const SAMSUNG_RESEARCH_ENRICHMENT_VERSION = '2026-08-28-s12-ultra-content'
const KRYOS_EXPERIENCE_SEED_VERSION_KEY = 'seshadhri-portfolio-kryos-experience-seed-version'
const KRYOS_EXPERIENCE_SEED_VERSION = '2026-08-27-run-it-back'
const LEARNING_ARCHIVE_SEED_VERSION_KEY = 'seshadhri-portfolio-learning-archive-seed-version'
const LEARNING_ARCHIVE_SEED_VERSION = '2026-08-27-google-cloud-certificate-set'
const defaultPortfolioContent = {
  chits: motivationChits,
  reels: inspirationReels,
  research: researchNotes,
  courses: learningArchive,
  experience: experienceChapters,
  projects: projectShelf,
  leadership: leadershipChapters,
  characters: characterInspirations,
}

const adminCollections = [
  { key: 'chits', label: 'Pocket oracle quotes', shortLabel: 'Quotes', description: 'The random quotes inside the chit machine.' },
  { key: 'reels', label: 'The reel shelf', shortLabel: 'Reels', description: 'A title, description, creator and thumbnail for every clip you want to keep.' },
  { key: 'research', label: 'Thoughts in public', shortLabel: 'Research', description: 'Research papers, reading notes, sources and visual details.' },
  { key: 'courses', label: 'Proof of progress', shortLabel: 'Courses', description: 'Courses, certificates, skills and course-page details.' },
  { key: 'projects', label: 'Work, filed with intent', shortLabel: 'Projects', description: 'The project drawer categories and their copy.' },
  { key: 'experience', label: 'Built with people', shortLabel: 'Experience', description: 'Professional and collaborative experience chapters.' },
  { key: 'leadership', label: 'Make room for people', shortLabel: 'Leadership', description: 'Leadership, volunteering and community chapters.' },
  { key: 'characters', label: 'Movie & anime characters', shortLabel: 'Characters', description: 'The character sketches shown on the PLAY page, each with its own detail page.' },
]

const getStoredPortfolioContent = () => {
  try {
    const saved = window.localStorage.getItem(CONTENT_STORAGE_KEY)
    if (!saved) return defaultPortfolioContent
    const parsed = JSON.parse(saved)
    const content = {
      ...defaultPortfolioContent,
      ...parsed,
    }
    // Existing admin data stays intact; this one-time migration adds the six supplied clips.
    if (window.localStorage.getItem(REEL_SHELF_SEED_VERSION_KEY) !== REEL_SHELF_SEED_VERSION) {
      const existingReels = Array.isArray(content.reels) ? content.reels : []
      const existingIds = new Set(existingReels.map((reel) => reel.id))
      content.reels = [...existingReels, ...inspirationReels.filter((reel) => !existingIds.has(reel.id))]
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
      window.localStorage.setItem(REEL_SHELF_SEED_VERSION_KEY, REEL_SHELF_SEED_VERSION)
    }
    if (window.localStorage.getItem(REEL_COPY_CORRECTION_VERSION_KEY) !== REEL_COPY_CORRECTION_VERSION) {
      const verifiedReels = new Map(inspirationReels.map((reel) => [reel.id, reel]))
      const correctedIds = new Set(['you-are-more-capable', 'vogue-world-v', 'robert-downey-jr-story', 'one-piece-elbaph-pv'])
      content.reels = (Array.isArray(content.reels) ? content.reels : []).map((reel) => {
        const verified = verifiedReels.get(reel.id)
        if (!verified || !correctedIds.has(reel.id)) return reel
        return { ...reel, title: verified.title, creator: verified.creator, description: verified.description }
      })
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
      window.localStorage.setItem(REEL_COPY_CORRECTION_VERSION_KEY, REEL_COPY_CORRECTION_VERSION)
    }
    if (window.localStorage.getItem(CHIT_MACHINE_SEED_VERSION_KEY) !== CHIT_MACHINE_SEED_VERSION) {
      const existingChits = Array.isArray(content.chits) ? content.chits : []
      const existingIds = new Set(existingChits.map((chit) => chit.id))
      content.chits = [...existingChits, ...motivationChits.filter((chit) => !existingIds.has(chit.id))]
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
      window.localStorage.setItem(CHIT_MACHINE_SEED_VERSION_KEY, CHIT_MACHINE_SEED_VERSION)
    }
    if (window.localStorage.getItem(CHARACTER_SHELF_SEED_VERSION_KEY) !== CHARACTER_SHELF_SEED_VERSION) {
      const existingCharacters = Array.isArray(content.characters) ? content.characters : []
      const existingSlugs = new Set(existingCharacters.map((character) => character.slug))
      content.characters = [
        ...existingCharacters.map((character) => {
          const suppliedCharacter = characterVisualOverrideSlugs.has(character.slug) ? characterInspirations.find((item) => item.slug === character.slug) : null
          return {
            ...character,
            ...(suppliedCharacter ? { image: suppliedCharacter.image, imageSource: suppliedCharacter.imageSource, imageSourceUrl: suppliedCharacter.imageSourceUrl, gallery: suppliedCharacter.gallery } : {}),
            context: character.context || character.lens || 'A story that keeps giving me something to think about.',
            gallery: suppliedCharacter?.gallery || (Array.isArray(character.gallery) && character.gallery.length ? character.gallery : (characterGallerySeeds[character.slug] || [])),
          }
        }),
        ...characterInspirations.filter((character) => !existingSlugs.has(character.slug)).map((character) => ({
          ...character,
          gallery: character.gallery?.length ? character.gallery : (characterGallerySeeds[character.slug] || []),
        })),
      ]
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
      window.localStorage.setItem(CHARACTER_SHELF_SEED_VERSION_KEY, CHARACTER_SHELF_SEED_VERSION)
    }
    if (window.localStorage.getItem(PROJECT_SHELF_SEED_VERSION_KEY) !== PROJECT_SHELF_SEED_VERSION) {
      const existingProjects = Array.isArray(content.projects) ? content.projects : []
      const existingProjectSlugs = new Set(existingProjects.map((project) => project.slug))
      const seededProjects = projectShelf.slice(0, 4).filter((project) => !existingProjectSlugs.has(project.slug))
      content.projects = [...seededProjects, ...existingProjects]
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
      window.localStorage.setItem(PROJECT_SHELF_SEED_VERSION_KEY, PROJECT_SHELF_SEED_VERSION)
    }
    if (window.localStorage.getItem(RESEARCH_VISUAL_SEED_VERSION_KEY) !== RESEARCH_VISUAL_SEED_VERSION) {
      const researchDefaults = new Map(researchNotes.map((note) => [note.slug, note]))
      content.research = (Array.isArray(content.research) ? content.research : []).map((note) => {
        const defaultNote = researchDefaults.get(note.slug)
        if (!defaultNote?.cover || note.cover) return note
        return { ...note, cover: defaultNote.cover, coverAlt: defaultNote.coverAlt }
      })
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
      window.localStorage.setItem(RESEARCH_VISUAL_SEED_VERSION_KEY, RESEARCH_VISUAL_SEED_VERSION)
    }
    if (window.localStorage.getItem(SAMSUNG_RESEARCH_ENRICHMENT_VERSION_KEY) !== SAMSUNG_RESEARCH_ENRICHMENT_VERSION) {
      const hasItems = (value) => Array.isArray(value) && value.length > 0
      const hasText = (value) => typeof value === 'string' && value.trim().length > 0
      content.research = (Array.isArray(content.research) ? content.research : []).map((note) => {
        const identifier = `${note.title || ''} ${note.slug || ''}`.toLowerCase()
        const isSamsungS12UltraDraft = identifier.includes('samsung') && (identifier.includes('s12') || identifier.includes('s 12')) && identifier.includes('ultra')
        if (!isSamsungS12UltraDraft) return note
        return {
          ...note,
          topic: hasText(note.topic) ? note.topic : samsungS12UltraResearchEnrichment.topic,
          readTime: hasText(note.readTime) ? note.readTime : samsungS12UltraResearchEnrichment.readTime,
          excerpt: hasText(note.excerpt) ? note.excerpt : samsungS12UltraResearchEnrichment.excerpt,
          thesis: hasText(note.thesis) ? note.thesis : samsungS12UltraResearchEnrichment.thesis,
          sections: hasItems(note.sections) ? note.sections : samsungS12UltraResearchEnrichment.sections,
          metrics: hasItems(note.metrics) ? note.metrics : samsungS12UltraResearchEnrichment.metrics,
          chart: hasItems(note.chart?.points) ? note.chart : samsungS12UltraResearchEnrichment.chart,
          sources: hasItems(note.sources) ? note.sources : samsungS12UltraResearchEnrichment.sources,
        }
      })
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
      window.localStorage.setItem(SAMSUNG_RESEARCH_ENRICHMENT_VERSION_KEY, SAMSUNG_RESEARCH_ENRICHMENT_VERSION)
    }
    if (window.localStorage.getItem(KRYOS_EXPERIENCE_SEED_VERSION_KEY) !== KRYOS_EXPERIENCE_SEED_VERSION) {
      const kryosExperience = experienceChapters.find((experience) => experience.slug === 'kryos-gaming')
      content.experience = (Array.isArray(content.experience) ? content.experience : []).map((experience) => {
        if (experience.slug !== 'kryos-gaming' || !kryosExperience) return experience
        return { ...experience, ...kryosExperience }
      })
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
      window.localStorage.setItem(KRYOS_EXPERIENCE_SEED_VERSION_KEY, KRYOS_EXPERIENCE_SEED_VERSION)
    }
    if (window.localStorage.getItem(LEARNING_ARCHIVE_SEED_VERSION_KEY) !== LEARNING_ARCHIVE_SEED_VERSION) {
      const existingCourses = Array.isArray(content.courses) ? content.courses : []
      const existingCourseSlugs = new Set(existingCourses.map((course) => course.slug))
      const mathCertificate = learningArchive.find((course) => course.slug === 'mathematics-for-machine-learning-linear-algebra')
      content.courses = [
        ...existingCourses.map((course) => course.slug === mathCertificate?.slug ? { ...course, certificate: mathCertificate.certificate } : course),
        ...learningArchive.filter((course) => !existingCourseSlugs.has(course.slug)),
      ]
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
      window.localStorage.setItem(LEARNING_ARCHIVE_SEED_VERSION_KEY, LEARNING_ARCHIVE_SEED_VERSION)
    }
    return content
  } catch {
    return defaultPortfolioContent
  }
}

const getStarterItem = (key) => {
  const id = `${key}-${Date.now()}`
  const starters = {
    chits: { id, quote: 'Write the line you want someone to find today.', attribution: 'Name · Source', sourceUrl: '', note: 'A small note about why it belongs here.' },
    reels: { id, title: 'A reel worth keeping', creator: 'Creator name', description: 'Why this clip stayed with me.', videoAssetId: '', videoUrl: '', thumbnailUrl: '' },
    research: { slug: `new-research-${Date.now()}`, title: 'A new research note', topic: 'Topic', readTime: '05 min read', excerpt: 'A short preview of the idea.', accent: '#76d7e8', date: 'Draft', thesis: 'The main thought behind this research note.', body: 'Add the full thought here. This creates the first section of the research page automatically.', sections: [], metrics: [], chart: { label: 'Signal', note: '', points: [] }, sources: [] },
    courses: { slug: `new-course-${Date.now()}`, courseNumber: '', title: 'A new course', provider: 'Provider', completed: 'In progress', length: 'Course', focus: [], overview: 'What this course helped me learn.', lessons: [], certificate: '', certificateType: 'image', accent: '#849bff' },
    projects: {
      slug: `new-project-${Date.now()}`,
      title: 'A new project',
      category: 'Category',
      status: 'In progress',
      summary: 'A short preview for the project drawer.',
      headline: 'The clear idea behind this project.',
      overview: 'Describe the project in detail: the goal, the process, and the people it is for.',
      problem: 'What problem does this project solve?',
      outcome: 'What changed after building it?',
      role: 'Your role',
      year: new Date().getFullYear().toString(),
      tools: [],
      highlights: [],
      gallery: [],
      accent: '#83c9e0',
      tint: '#0c5875',
    },
    experience: { slug: `new-experience-${Date.now()}`, title: 'A new experience', role: 'Role', period: 'Date range', copy: 'What I learned and contributed.', accent: '#83c9e0', skills: [], lessons: [] },
    leadership: { number: '00', slug: `new-chapter-${Date.now()}`, title: 'A new community chapter', role: 'Role', copy: 'What this chapter meant to me.', tags: [], accent: '#c7ef66', visual: '', visualAlt: '' },
    characters: { slug: `new-character-${Date.now()}`, name: 'A new character', source: 'Film, show, or anime', marker: 'NC', accent: '#8f8cff', summary: 'The character in a few words.', lens: 'What I notice in this character.', takeaway: 'The lesson I carry with me.', context: 'Why this character stays with me.', motivation: 'What inspires me to keep going.', learning: 'What I learned and carry into my own life.', traits: [], image: '', gallery: [], imageSource: '', imageSourceUrl: '' },
  }
  return starters[key]
}

const usePortfolioContent = () => {
  const [content, setContent] = useState(getStoredPortfolioContent)

  useEffect(() => {
    window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
  }, [content])

  return [content, setContent]
}

// Videos are kept as browser files instead of base64 text in localStorage. This avoids
// the small storage limit that would otherwise make normal video uploads unreliable.
const MEDIA_DATABASE = 'seshadhri-portfolio-media-v1'
const MEDIA_STORE = 'videos'

const openMediaDatabase = () => new Promise((resolve, reject) => {
  if (!window.indexedDB) {
    reject(new Error('This browser does not support local video storage.'))
    return
  }
  const request = window.indexedDB.open(MEDIA_DATABASE, 1)
  request.onupgradeneeded = () => {
    if (!request.result.objectStoreNames.contains(MEDIA_STORE)) request.result.createObjectStore(MEDIA_STORE)
  }
  request.onsuccess = () => resolve(request.result)
  request.onerror = () => reject(request.error || new Error('Could not open local video storage.'))
})

const storeVideoAsset = async (file) => {
  const database = await openMediaDatabase()
  const id = `video-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  await new Promise((resolve, reject) => {
    const transaction = database.transaction(MEDIA_STORE, 'readwrite')
    transaction.objectStore(MEDIA_STORE).put(file, id)
    transaction.oncomplete = resolve
    transaction.onerror = () => reject(transaction.error || new Error('Could not save this video.'))
  })
  database.close()
  return id
}

const getVideoAsset = async (id) => {
  const database = await openMediaDatabase()
  const video = await new Promise((resolve, reject) => {
    const request = database.transaction(MEDIA_STORE, 'readonly').objectStore(MEDIA_STORE).get(id)
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error || new Error('Could not load this video.'))
  })
  database.close()
  return video
}

const createVideoThumbnail = (file) => new Promise((resolve) => {
  const video = document.createElement('video')
  const sourceUrl = URL.createObjectURL(file)
  const finish = (image = '') => {
    URL.revokeObjectURL(sourceUrl)
    resolve(image)
  }
  video.preload = 'metadata'
  video.muted = true
  video.playsInline = true
  video.src = sourceUrl
  video.onloadedmetadata = () => {
    video.currentTime = Math.min(1, Math.max(0, (video.duration || 0) * 0.1))
  }
  video.onseeked = () => {
    try {
      const canvas = document.createElement('canvas')
      const width = video.videoWidth || 720
      const height = video.videoHeight || 1280
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d')?.drawImage(video, 0, 0, width, height)
      finish(canvas.toDataURL('image/jpeg', 0.82))
    } catch {
      finish()
    }
  }
  video.onerror = () => finish()
})

const getCourseSlugFromPath = () => {
  const match = window.location.pathname.match(/^\/learning\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

const getExperienceSlugFromPath = () => {
  const match = window.location.pathname.match(/^\/experience\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

const getResearchSlugFromPath = () => {
  const match = window.location.pathname.match(/^\/research\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

const getLeadershipSlugFromPath = () => {
  const match = window.location.pathname.match(/^\/leadership\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

const getProjectSlugFromPath = () => {
  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)
  return match ? decodeURIComponent(match[1]) : null
}

const getPlayPageFromPath = () => {
  if (window.location.pathname === '/play') return 'story'
  const match = window.location.pathname.match(/^\/play\/characters\/([^/]+)\/?$/)
  return match ? `character:${decodeURIComponent(match[1])}` : null
}

const journeyMilestones = [
  {
    year: '2008 — 2020',
    title: "Bhavan's Rajaji Vidyashram",
    meta: 'LKG — Class X · 12 years',
    copy: 'Twelve formative years that built discipline, curiosity, resilience, and a love for continuous improvement.',
    quote: 'Every great journey begins with a strong foundation.',
    x: '4%', y: '26%', yearDirection: 'below', yearAlign: 'start',
  },
  {
    year: '2020 — 2022',
    title: 'Velammal Main School (Annexure)',
    meta: 'Higher Secondary Education · 2 years',
    copy: 'A focused chapter of analytical thinking and problem-solving that prepared the path towards engineering and technology.',
    quote: 'Preparation creates opportunity.',
    x: '31%', y: '88%', yearDirection: 'above',
  },
  {
    year: '2022',
    title: 'Rajalakshmi Engineering College',
    meta: 'B.Tech — Information Technology',
    copy: 'The beginning of a four-year degree and an exploration of software development, programming, and emerging technology.',
    quote: 'The beginning.',
    x: '39%', y: '61%', yearDirection: 'above',
  },
  {
    year: '2023',
    title: 'Building Technical Foundations',
    meta: 'Programming · Software · Web development',
    copy: 'Expanded programming skills through practical software and web projects while exploring the breadth of computer science.',
    quote: 'Learning by building.',
    x: '45%', y: '50%', yearDirection: 'below',
  },
  {
    year: '2024',
    title: 'President — Elite Club',
    meta: 'Department of IT · Leadership',
    copy: 'Organised technical events, mentored juniors, encouraged collaborative learning, and grew as a communicator and leader.',
    quote: 'Leadership through community.',
    x: '60%', y: '24%', yearDirection: 'below',
  },
  {
    year: '2025',
    title: 'Enactus',
    meta: 'Social impact · Teamwork · Innovation',
    copy: 'Contributed to initiatives focused on creating positive social impact through teamwork, innovation, and project execution.',
    quote: 'Technology works best when it creates impact.',
    x: '69%', y: '60%', yearDirection: 'above',
  },
  {
    year: 'Early — May 2026',
    title: 'Edge AI Smart Health Watch',
    meta: 'Edge AI · IoT · Real-time health monitoring',
    copy: 'Designed an Edge AI watch with real-time monitoring, emergency alerts, on-device inference, and IoT connectivity — then graduated in Information Technology.',
    quote: "Graduation wasn't the finish line — it was the launch pad.",
    x: '76%', y: '76%', yearDirection: 'above',
  },
  {
    year: 'July 2026 — Present',
    title: 'Continuous Learning',
    meta: 'AI · ML · Full-stack · System design',
    copy: 'Building production-ready AI projects through professional courses, hands-on experiments, open source, and portfolio development.',
    quote: 'The classroom may have ended, but the learning never will.',
    x: '84%', y: '52%', yearDirection: 'below',
  },
  {
    year: '2027+',
    title: 'Next Chapter',
    meta: 'AI Engineer · Opportunity · Meaningful impact',
    copy: 'Looking for opportunities to contribute, innovate, and grow as an AI engineer while building technology that matters.',
    quote: 'The road continues.',
    x: '98%', y: '14%', yearDirection: 'below', yearAlign: 'end',
  },
]

function App() {
  const [portfolioContent, setPortfolioContent] = usePortfolioContent()
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightMode, setLightMode] = useState(false)
  const [activeNavIndex, setActiveNavIndex] = useState(0)
  const [lightHomeNavIndex, setLightHomeNavIndex] = useState(0)
  const [hoveredNavIndex, setHoveredNavIndex] = useState(null)
  const [openNavMenu, setOpenNavMenu] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaderExiting, setIsLoaderExiting] = useState(false)
  const [loadProgress, setLoadProgress] = useState(1)
  const [isNavReady, setIsNavReady] = useState(false)
  const [isCursorVisible, setIsCursorVisible] = useState(false)
  const [isCursorInteractive, setIsCursorInteractive] = useState(false)
  const [previousTheme, setPreviousTheme] = useState(null)
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false)
  const [isLightIntroReady, setIsLightIntroReady] = useState(false)
  const [isNavCompact, setIsNavCompact] = useState(false)
  const [courseSlug, setCourseSlug] = useState(getCourseSlugFromPath)
  const [experienceSlug, setExperienceSlug] = useState(getExperienceSlugFromPath)
  const [researchSlug, setResearchSlug] = useState(getResearchSlugFromPath)
  const [leadershipSlug, setLeadershipSlug] = useState(getLeadershipSlugFromPath)
  const [projectSlug, setProjectSlug] = useState(getProjectSlugFromPath)
  const [playPage, setPlayPage] = useState(getPlayPageFromPath)
  const navRef = useRef(null)
  const navHighlightRef = useRef(null)
  const navLinkRefs = useRef([])
  const cursorRef = useRef(null)
  const isContextNavigation = Boolean(playPage) || lightMode
  const activeCoursePage = portfolioContent.courses.find((course) => course.slug === courseSlug)
  const activeExperiencePage = portfolioContent.experience.find((experience) => experience.slug === experienceSlug)
  const activeResearchPage = portfolioContent.research.find((research) => research.slug === researchSlug)
  const activeLeadershipPage = portfolioContent.leadership.find((chapter) => chapter.slug === leadershipSlug)
  const activeProjectPage = portfolioContent.projects.find((project) => project.slug === projectSlug)
  const activeCharacterPage = portfolioContent.characters.find((character) => playPage === `character:${character.slug}`)
  const isResumePage = currentPath === '/resume'
  const isLightSurface = lightMode || Boolean(playPage) || isResumePage
  const displayedNavItems = playPage ? playNavItems : lightMode ? lightHomeNavItems : navItems
  const intendedNavIndex = hoveredNavIndex ?? (isContextNavigation ? lightHomeNavIndex : activeNavIndex)
  const highlightedIndex = Math.max(0, Math.min(intendedNavIndex, displayedNavItems.length - 1))
  const isAdminPage = currentPath === '/admin'
  const isResearchArchivePage = currentPath === '/research'
  const isLearningArchivePage = currentPath === '/learning'

  useEffect(() => {
    const moveHighlight = () => {
      const nav = navRef.current
      const item = navLinkRefs.current[highlightedIndex]
      const highlight = navHighlightRef.current
      if (!nav || !item || !highlight) return

      const navBounds = nav.getBoundingClientRect()
      let itemLeft = 0
      let currentElement = item

      while (currentElement && currentElement !== nav) {
        itemLeft += currentElement.offsetLeft
        currentElement = currentElement.offsetParent
      }

      // The compact header scales the visual navigation. Layout coordinates keep
      // the highlight aligned when an item changes while that scale is active.
      if (currentElement !== nav) {
        const itemBounds = item.getBoundingClientRect()
        itemLeft = (itemBounds.left - navBounds.left) / (navBounds.width / nav.offsetWidth || 1)
      }

      highlight.style.width = `${item.offsetWidth}px`
      highlight.style.transform = `translateX(${itemLeft}px)`
    }

    const frame = window.requestAnimationFrame(moveHighlight)
    const settleTimer = window.setTimeout(moveHighlight, 120)
    document.fonts?.ready?.then(moveHighlight)
    window.addEventListener('resize', moveHighlight)
    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(settleTimer)
      window.removeEventListener('resize', moveHighlight)
    }
  }, [highlightedIndex, displayedNavItems.length, lightMode, Boolean(playPage)])

  useEffect(() => {
    const duration = 1550
    const startedAt = performance.now()
    let animationFrame
    let finishTimer

    const updateProgress = (now) => {
      const elapsed = now - startedAt
      const completion = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - completion, 3)
      setLoadProgress(Math.max(1, Math.round(eased * 100)))

      if (completion < 1) {
        animationFrame = requestAnimationFrame(updateProgress)
      } else {
        setIsLoaderExiting(true)
        finishTimer = window.setTimeout(() => {
          setIsLoading(false)
          setIsNavReady(true)
        }, 520)
      }
    }

    animationFrame = requestAnimationFrame(updateProgress)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.clearTimeout(finishTimer)
    }
  }, [])

  const enterLightMode = ({ returnHome = false } = {}) => {
    if (lightMode || isThemeTransitioning) return
    setPreviousTheme('dark')
    setLightHomeNavIndex(0)
    setHoveredNavIndex(null)
    setIsLightIntroReady(false)
    setLightMode(true)
    setIsThemeTransitioning(true)
    window.setTimeout(() => setIsLightIntroReady(true), 70)
    window.setTimeout(() => {
      setPreviousTheme(null)
      setIsThemeTransitioning(false)
    }, 720)
    if (returnHome) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleTheme = () => {
    if (isThemeTransitioning) return
    if (playPage) {
      setPlayPage(null)
      setLightMode(false)
      setHoveredNavIndex(null)
      window.history.pushState(null, '', '/#home')
      setCurrentPath('/')
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    if (!lightMode) {
      enterLightMode()
      return
    }

    setPreviousTheme('light')
    setIsLightIntroReady(false)
    setLightMode(false)
    setHoveredNavIndex(null)
    setIsThemeTransitioning(true)
    window.setTimeout(() => {
      setPreviousTheme(null)
      setIsThemeTransitioning(false)
    }, 720)
  }

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    const moveCursor = (event) => {
      const cursor = cursorRef.current
      if (!cursor) return
      cursor.style.setProperty('--cursor-x', `${event.clientX}px`)
      cursor.style.setProperty('--cursor-y', `${event.clientY}px`)
      setIsCursorVisible(true)
      const target = event.target instanceof Element ? event.target : null
      setIsCursorInteractive(Boolean(target?.closest('a, button, [tabindex="0"], video')))
    }

    const hideCursor = () => setIsCursorVisible(false)
    window.addEventListener('pointermove', moveCursor)
    document.addEventListener('mouseleave', hideCursor)
    return () => {
      window.removeEventListener('pointermove', moveCursor)
      document.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  useEffect(() => {
    const updateNavSize = () => setIsNavCompact(window.scrollY > 56)
    updateNavSize()
    window.addEventListener('scroll', updateNavSize, { passive: true })
    return () => window.removeEventListener('scroll', updateNavSize)
  }, [])

  useEffect(() => {
    if (isLoading || currentPath !== '/' || !window.location.hash) return undefined
    const targetId = window.location.hash.slice(1)
    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    }, 360)
    return () => window.clearTimeout(timer)
  }, [isLoading, currentPath, lightMode])

  useEffect(() => {
    if (!playPage) return undefined

    if (activeCharacterPage) {
      setLightHomeNavIndex(3)
      return undefined
    }

    const playSections = playNavItems
      .map((item, index) => ({ index, element: document.getElementById(item.target) }))
      .filter((item) => item.element)

    const updatePlayNavigation = () => {
      const readingLine = window.innerHeight * .34
      let activeIndex = 0
      playSections.forEach(({ index, element }) => {
        if (element.getBoundingClientRect().top <= readingLine) activeIndex = index
      })
      setLightHomeNavIndex((currentIndex) => currentIndex === activeIndex ? currentIndex : activeIndex)
    }

    updatePlayNavigation()
    window.addEventListener('scroll', updatePlayNavigation, { passive: true })
    window.addEventListener('resize', updatePlayNavigation)
    return () => {
      window.removeEventListener('scroll', updatePlayNavigation)
      window.removeEventListener('resize', updatePlayNavigation)
    }
  }, [playPage, activeCharacterPage])

  useEffect(() => {
    const updateActiveNavItem = () => {
      if (activeResearchPage) {
        setActiveNavIndex(2)
        return
      }

      if (activeCoursePage) {
        setActiveNavIndex(2)
        return
      }

      if (activeExperiencePage || activeLeadershipPage) {
        setActiveNavIndex(1)
        return
      }

      const projects = document.getElementById('projects')
      const experience = document.getElementById('experience')
      const about = document.getElementById('about')
      const contact = document.getElementById('contact')
      if (contact && contact.getBoundingClientRect().top <= window.innerHeight * .48) {
        setActiveNavIndex(4)
        return
      }

      if (about && about.getBoundingClientRect().top <= window.innerHeight * .48) {
        setActiveNavIndex(3)
        return
      }

      if (experience && experience.getBoundingClientRect().top <= window.innerHeight * .48) {
        setActiveNavIndex(1)
        return
      }

      if (!projects) {
        setActiveNavIndex(0)
        return
      }

      const projectsBounds = projects.getBoundingClientRect()
      const viewingProjects = projectsBounds.top <= window.innerHeight * .48
      setActiveNavIndex(viewingProjects ? 2 : 0)
    }

    updateActiveNavItem()
    window.addEventListener('scroll', updateActiveNavItem, { passive: true })
    window.addEventListener('resize', updateActiveNavItem)
    return () => {
      window.removeEventListener('scroll', updateActiveNavItem)
      window.removeEventListener('resize', updateActiveNavItem)
    }
  }, [activeCoursePage, activeExperiencePage, activeResearchPage, activeLeadershipPage, lightMode])

  useEffect(() => {
    const updateCourseRoute = () => {
      setCourseSlug(getCourseSlugFromPath())
      setExperienceSlug(getExperienceSlugFromPath())
      setResearchSlug(getResearchSlugFromPath())
      setLeadershipSlug(getLeadershipSlugFromPath())
      setProjectSlug(getProjectSlugFromPath())
      setPlayPage(getPlayPageFromPath())
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', updateCourseRoute)
    return () => window.removeEventListener('popstate', updateCourseRoute)
  }, [])

  const scrollToHome = (event) => {
    event.preventDefault()
    setCourseSlug(null)
    setExperienceSlug(null)
    setResearchSlug(null)
    setLeadershipSlug(null)
    setProjectSlug(null)
    setPlayPage(null)
    window.history.replaceState(null, '', '/#home')
    setCurrentPath('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const restartSite = (event) => {
    event.preventDefault()
    window.history.replaceState(null, '', '/#home')
    window.location.reload()
  }

  const openResumePage = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/resume')
    setCurrentPath('/resume')
    setCourseSlug(null)
    setExperienceSlug(null)
    setResearchSlug(null)
    setLeadershipSlug(null)
    setProjectSlug(null)
    setPlayPage(null)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const returnFromResume = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/#home')
    setCurrentPath('/')
    setCourseSlug(null)
    setExperienceSlug(null)
    setResearchSlug(null)
    setLeadershipSlug(null)
    setProjectSlug(null)
    setPlayPage(null)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const openCoursePage = (event, slug) => {
    event.preventDefault()
    window.history.pushState(null, '', `/learning/${slug}`)
    setCurrentPath(`/learning/${slug}`)
    setCourseSlug(slug)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const openResearchPage = (event, slug) => {
    event.preventDefault()
    window.history.pushState(null, '', `/research/${slug}`)
    setCurrentPath(`/research/${slug}`)
    setResearchSlug(slug)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const openProjectPage = (event, slug) => {
    event.preventDefault()
    window.history.pushState(null, '', `/projects/${slug}`)
    setCurrentPath(`/projects/${slug}`)
    setProjectSlug(slug)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const returnToProjects = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/#projects')
    setCurrentPath('/')
    setProjectSlug(null)
    window.setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  const returnToResearchNotes = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/#research-notes')
    setCurrentPath('/')
    setResearchSlug(null)
    window.setTimeout(() => document.getElementById('research-notes')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  const returnToLearningArchive = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/#learning-archive')
    setCurrentPath('/')
    setCourseSlug(null)
    window.setTimeout(() => document.getElementById('learning-archive')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  const openExperiencePage = (event, slug) => {
    event.preventDefault()
    window.history.pushState(null, '', `/experience/${slug}`)
    setCurrentPath(`/experience/${slug}`)
    setExperienceSlug(slug)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const openLeadershipPage = (event, slug) => {
    event.preventDefault()
    window.history.pushState(null, '', `/leadership/${slug}`)
    setCurrentPath(`/leadership/${slug}`)
    setLeadershipSlug(slug)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const openPlayPage = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/play')
    setCurrentPath('/play')
    setPlayPage('story')
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const openCharacterPage = (event, slug) => {
    event.preventDefault()
    window.history.pushState(null, '', `/play/characters/${slug}`)
    setCurrentPath(`/play/characters/${slug}`)
    setPlayPage(`character:${slug}`)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const returnToPlay = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/play')
    setCurrentPath('/play')
    setPlayPage('story')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const handlePlayNavClick = (event, item) => {
    event.preventDefault()
    setMenuOpen(false)
    const goToSection = () => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

    if (activeCharacterPage) {
      window.history.pushState(null, '', '/play')
      setCurrentPath('/play')
      setPlayPage('story')
      window.setTimeout(goToSection, 0)
      return
    }

    goToSection()
  }

  const handleLightHomeNavClick = (event, item, index) => {
    event.preventDefault()
    setLightHomeNavIndex(index)
    setHoveredNavIndex(null)
    setMenuOpen(false)
    document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleDarkNavSubClick = (event, target, parentIndex) => {
    event.preventDefault()
    setActiveNavIndex(parentIndex)
    setHoveredNavIndex(null)
    setOpenNavMenu(null)
    setMenuOpen(false)

    const goToSection = () => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const isDetailPage = activeCoursePage || activeExperiencePage || activeResearchPage || activeLeadershipPage || activeProjectPage

    if (isDetailPage) {
      window.history.pushState(null, '', `/#${target}`)
      setCurrentPath('/')
      setCourseSlug(null)
      setExperienceSlug(null)
      setResearchSlug(null)
      setLeadershipSlug(null)
      setProjectSlug(null)
      window.setTimeout(goToSection, 0)
      return
    }

    goToSection()
  }

  const returnToLightHome = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/#home')
    setCurrentPath('/')
    setPlayPage(null)
    setLightMode(true)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const returnToLeadership = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/#leadership')
    setCurrentPath('/')
    setLeadershipSlug(null)
    window.setTimeout(() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  const returnToExperience = (event) => {
    event.preventDefault()
    window.history.pushState(null, '', '/#experience')
    setCurrentPath('/')
    setExperienceSlug(null)
    window.setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  const handleNavClick = (event, item) => {
    setOpenNavMenu(null)
    const itemIndex = navItems.indexOf(item)
    if (itemIndex >= 0) {
      setActiveNavIndex(itemIndex)
      setHoveredNavIndex(null)
    }

    if (item === 'Home') {
      scrollToHome(event)
      return
    }

    if (item === 'Projects') {
      event.preventDefault()
      setCurrentPath('/')
      if (activeCoursePage || activeExperiencePage || activeResearchPage || activeLeadershipPage || playPage) {
        window.history.pushState(null, '', '/#projects')
        setCourseSlug(null)
        setExperienceSlug(null)
        setResearchSlug(null)
        setLeadershipSlug(null)
        setProjectSlug(null)
        setPlayPage(null)
        window.setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 0)
      } else {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      }
      setMenuOpen(false)
      return
    }

    if (item === 'Experience') {
      event.preventDefault()
      setCurrentPath('/')
      if (activeCoursePage || activeExperiencePage || activeResearchPage || activeLeadershipPage || playPage) {
        window.history.pushState(null, '', '/#experience')
        setCourseSlug(null)
        setExperienceSlug(null)
        setResearchSlug(null)
        setLeadershipSlug(null)
        setProjectSlug(null)
        setPlayPage(null)
        window.setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 0)
      } else {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
      }
      setMenuOpen(false)
      return
    }

    if (item === 'About' || item === 'Contact') {
      event.preventDefault()
      setCurrentPath('/')
      if (activeCoursePage || activeExperiencePage || activeResearchPage || activeLeadershipPage || playPage) {
        window.history.pushState(null, '', `/#${item.toLowerCase()}`)
        setCourseSlug(null)
        setExperienceSlug(null)
        setResearchSlug(null)
        setLeadershipSlug(null)
        setProjectSlug(null)
        setPlayPage(null)
        window.setTimeout(() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }), 0)
      } else {
        document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
      }
      setMenuOpen(false)
    }
  }

  return (
    <main className={isLightSurface ? 'site site--light' : 'site'}>
      {isLoading && <LoadingScreen progress={loadProgress} isExiting={isLoaderExiting} />}
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />

      {!isAdminPage && !isResumePage && <header className={`topbar${isNavReady ? ' topbar--ready' : ''}${isNavCompact ? ' topbar--compact' : ''}${playPage ? ' topbar--play' : ''}`}>
        <a className="brand" href="/#home" onClick={restartSite} aria-label="Restart portfolio from the beginning">
          <img className="signature" src={signature} alt="Seshadhri signature" />
        </a>

        <nav
          ref={navRef}
          className={menuOpen ? 'nav nav--open' : 'nav'}
          aria-label="Primary navigation"
          onMouseLeave={() => { setHoveredNavIndex(null); setOpenNavMenu(null) }}
        >
          <span ref={navHighlightRef} className="nav-highlight" aria-hidden="true" />
          {displayedNavItems.map((item, index) => {
            const itemLabel = isContextNavigation ? item.label : item
            const menuItems = !isContextNavigation ? darkNavMenus[item] : null
            const isMenuOpen = openNavMenu === itemLabel
            return (
              <div
                className={`nav-entry${menuItems ? ' nav-entry--with-menu' : ''}${isMenuOpen ? ' nav-entry--open' : ''}`}
                key={isContextNavigation ? item.target : item}
                onMouseEnter={() => { if (menuItems) setOpenNavMenu(itemLabel) }}
                onFocusCapture={() => { if (menuItems) setOpenNavMenu(itemLabel) }}
              >
                <a
                  ref={(element) => { navLinkRefs.current[index] = element }}
                  className={index === highlightedIndex ? 'nav-link nav-link--highlighted' : 'nav-link'}
                  href={isContextNavigation ? `#${item.target}` : `#${item.toLowerCase()}`}
                  onClick={(event) => playPage ? handlePlayNavClick(event, item) : lightMode ? handleLightHomeNavClick(event, item, index) : handleNavClick(event, item)}
                  onMouseEnter={() => setHoveredNavIndex(index)}
                  onFocus={() => setHoveredNavIndex(index)}
                  onBlur={() => setHoveredNavIndex(null)}
                  aria-current={index === (isContextNavigation ? lightHomeNavIndex : activeNavIndex) ? 'page' : undefined}
                >
                  {itemLabel}
                </a>
                {menuItems && <>
                  <button className="nav-menu-toggle" type="button" onClick={() => setOpenNavMenu(isMenuOpen ? null : itemLabel)} aria-label={`Show ${itemLabel} links`} aria-expanded={isMenuOpen}>⌄</button>
                  <div className="nav-dropdown" aria-label={`${itemLabel} section links`}>
                    {menuItems.map((menuItem) => <a key={`${itemLabel}-${menuItem.label}`} href={`#${menuItem.target}`} onClick={(event) => handleDarkNavSubClick(event, menuItem.target, index)}><strong>{menuItem.label}</strong><span>{menuItem.detail}</span></a>)}
                  </div>
                </>}
              </div>
            )
          })}
        </nav>

        <div className="nav-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label="Toggle colour theme">
            {isLightSurface ? <MoonIcon /> : <SunIcon />}
          </button>
          <a className="resume-button" href="/resume" onClick={openResumePage} aria-label="View resume">
            <span>Resume</span><ArrowIcon />
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
            <i /><i />
          </button>
        </div>
      </header>}

      {isResumePage ? <ResumePage onBack={returnFromResume} /> : isAdminPage ? <AdminPage content={portfolioContent} onChange={setPortfolioContent} /> : activeCharacterPage ? <CharacterFlowDetail character={activeCharacterPage} characters={portfolioContent.characters} onCharacterSelect={openCharacterPage} onBack={returnToPlay} /> : playPage === 'story' ? <PersonalStoryPage onCharacterSelect={openCharacterPage} characters={portfolioContent.characters} onBackToLight={returnToLightHome} /> : isResearchArchivePage ? <ResearchArchivePage notes={portfolioContent.research} onResearchSelect={openResearchPage} /> : isLearningArchivePage ? <CourseArchivePage courses={portfolioContent.courses} onCourseSelect={openCoursePage} /> : activeProjectPage ? <ProjectDetail project={activeProjectPage} onBack={returnToProjects} /> : activeResearchPage ? <ResearchDetail research={activeResearchPage} onBack={returnToResearchNotes} /> : activeCoursePage ? <CourseDetail course={activeCoursePage} onBack={returnToLearningArchive} /> : activeExperiencePage ? <ExperienceDetail experience={activeExperiencePage} onBack={returnToExperience} /> : activeLeadershipPage ? <LeadershipDetail chapter={activeLeadershipPage} onBack={returnToLeadership} /> : <>
      {(!lightMode || previousTheme === 'dark') && <>
        <DarkIntro isRevealed={!lightMode && isNavReady} isExiting={previousTheme === 'dark' && lightMode} />
        <HomeJourney isExiting={previousTheme === 'dark' && lightMode} />
        <Roadmap isExiting={previousTheme === 'dark' && lightMode} onNameClick={() => enterLightMode({ returnHome: true })} />
        <JourneyReflection isExiting={previousTheme === 'dark' && lightMode} />
        <ExperienceArchive isExiting={previousTheme === 'dark' && lightMode} onExperienceSelect={openExperiencePage} experiences={portfolioContent.experience} />
        <LeadershipCommunity isExiting={previousTheme === 'dark' && lightMode} onLeadershipSelect={openLeadershipPage} chapters={portfolioContent.leadership} />
        <ProjectsArchive isExiting={previousTheme === 'dark' && lightMode} projects={portfolioContent.projects} onProjectSelect={openProjectPage} />
        <ResearchNotes isExiting={previousTheme === 'dark' && lightMode} onResearchSelect={openResearchPage} notes={portfolioContent.research} />
        <LearningArchive isExiting={previousTheme === 'dark' && lightMode} onCourseSelect={openCoursePage} courses={portfolioContent.courses} />
        <AboutSection isExiting={previousTheme === 'dark' && lightMode} />
        <ContactSection isExiting={previousTheme === 'dark' && lightMode} />
        <SiteFooter />
      </>}
      {(lightMode || previousTheme === 'light') && (
        <LightModeHome
          isRevealed={lightMode && isLightIntroReady}
          isExiting={previousTheme === 'light' && !lightMode}
          onPlay={openPlayPage}
          chits={portfolioContent.chits}
          reels={portfolioContent.reels}
        />
      )}
      </>}
      <div
        ref={cursorRef}
        className={`custom-cursor${isCursorVisible ? ' custom-cursor--visible' : ''}${isCursorInteractive ? ' custom-cursor--interactive' : ''}`}
        aria-hidden="true"
      ><span /></div>
    </main>
  )
}

function LoadingScreen({ progress, isExiting }) {
  return (
    <div className={isExiting ? 'loading-screen loading-screen--exit' : 'loading-screen'} aria-live="polite">
      <img className="loading-screen__character" src={loaderCharacter} alt="" aria-hidden="true" />
      <div className="loading-screen__topline">
        <span>SESHADHRI M</span>
        <span>PORTFOLIO / 2026</span>
      </div>
      <div className="loading-screen__center">
        <p>Loading the experience</p>
        <div className="loading-screen__counter">{String(progress).padStart(3, '0')}<small>%</small></div>
      </div>
      <div className="loading-screen__bottom">
        <div className="loading-screen__track" aria-label={`Loading ${progress}%`}>
          <span style={{ '--load-progress': `${progress}%` }} />
        </div>
        <span>PLEASE WAIT</span>
      </div>
    </div>
  )
}

function DarkIntro({ isRevealed, isExiting }) {
  return (
    <section className={`dark-intro${isRevealed ? ' dark-intro--revealed' : ''}${isExiting ? ' dark-intro--exiting' : ''}`} id="home" aria-label="Homepage introduction">
      <div className="dark-intro__headline">
        <p className="dark-intro__eyebrow"><span>Beginning the journey · 01</span></p>
        <h1>
          <span className="dark-intro__line"><span>Building</span></span>
          <span className="dark-intro__line"><span>intelligence</span></span>
          <span className="dark-intro__line"><span>that <span className="dark-intro__ships" tabIndex="0">ships.</span></span></span>
        </h1>
      </div>

      <figure className="dark-portrait">
        <img src={portrait} alt="Seshadhri outdoors with a German Shepherd" />
      </figure>

      <aside className={isRevealed ? 'dark-intro__details dark-intro__details--revealed' : 'dark-intro__details'}>
        <h2>AI Developer</h2>
        <p className="dark-intro__stage">Early-career builder</p>
        <p className="dark-intro__copy">
          I’m beginning my AI development journey by learning to turn models into useful products.
          My focus is becoming a production AI deployment engineer who ships reliable systems into the real world.
        </p>
        <div className="learning-list" aria-label="Current learning areas">
          <span>Python</span>
          <span>Machine Learning</span>
          <span>Deployment</span>
          <span>GitHub</span>
          <span>Git</span>
          <span>Data Science</span>
          <span>Web Development</span>
          <span>Designing</span>
        </div>
      </aside>
      <a className="dark-intro__scroll-cue" href="#journey">
        <span>Scroll below to explore the journey of Seshadhri</span><i aria-hidden="true">↓</i>
      </a>
    </section>
  )
}

function HomeJourney({ isExiting }) {
  const journeyText = 'Journey of Seshadhri'

  return (
    <section className={isExiting ? 'home-journey home-journey--exiting' : 'home-journey'} id="journey" aria-label={journeyText}>
      <div className="home-journey__marquee">
        <div className="home-journey__track home-journey__track--forward">
          {[...Array(5)].map((_, index) => <span key={index}><b>✦</b>{journeyText}</span>)}
        </div>
      </div>
    </section>
  )
}

function Roadmap({ isExiting, onNameClick }) {
  const roadmapRef = useRef(null)
  const [activeStep, setActiveStep] = useState(-1)

  useEffect(() => {
    const updateJourneyStep = () => {
      const roadmap = roadmapRef.current
      if (!roadmap) return

      const start = roadmap.offsetTop
      const scrollRange = Math.max(1, roadmap.offsetHeight - window.innerHeight)
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / scrollRange))
      const nextStep = window.scrollY < start ? -1 : Math.min(journeyMilestones.length - 1, Math.floor(progress * journeyMilestones.length))
      setActiveStep((currentStep) => currentStep === nextStep ? currentStep : nextStep)
    }

    updateJourneyStep()
    window.addEventListener('scroll', updateJourneyStep, { passive: true })
    window.addEventListener('resize', updateJourneyStep)
    return () => {
      window.removeEventListener('scroll', updateJourneyStep)
      window.removeEventListener('resize', updateJourneyStep)
    }
  }, [])

  const activeMilestone = activeStep >= 0 ? journeyMilestones[activeStep] : null

  const selectMilestone = (index) => {
    const roadmap = roadmapRef.current
    if (!roadmap) return

    const scrollRange = Math.max(1, roadmap.offsetHeight - window.innerHeight)
    const progress = Math.min(.98, (index + .2) / journeyMilestones.length)
    window.scrollTo({
      top: roadmap.offsetTop + (scrollRange * progress),
      behavior: 'smooth',
    })
  }

  return (
    <section
      ref={roadmapRef}
      className={isExiting ? 'roadmap roadmap--exiting' : 'roadmap'}
      id="journey-roadmap"
      aria-labelledby="roadmap-title"
      style={{ '--journey-stages': journeyMilestones.length + 1 }}
    >
      <div className="roadmap__stage">
        <h2 id="roadmap-title">
          Journey of <button className="roadmap__name-link" type="button" onClick={onNameClick}>Seshadhri</button>
        </h2>
        <div className="roadmap__card">
          <img src={journeyRoad} alt="A winding road representing Seshadhri's journey" />
          <div className="roadmap__pins" aria-label="Journey milestones">
            {journeyMilestones.map((milestone, index) => (
              <button
                type="button"
                key={milestone.title}
                className={`roadmap__pin${index <= activeStep ? ' roadmap__pin--revealed' : ''}${index === activeStep ? ' roadmap__pin--active' : ''}`}
                style={{ '--pin-x': milestone.x, '--pin-y': milestone.y, '--pin-delay': `${index * 45}ms` }}
                aria-label={`View ${milestone.year}: ${milestone.title}`}
                onClick={() => selectMilestone(index)}
              >
                <i>{String(index + 1).padStart(2, '0')}</i>
                {index === activeStep && (
                  <span className={`roadmap__year-callout roadmap__year-callout--${milestone.yearDirection} roadmap__year-callout--align-${milestone.yearAlign ?? 'center'}`} aria-hidden="true">
                    <b>{milestone.year}</b><i />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="roadmap__map-note" aria-label="Current direction">
          <span>Current direction</span>
          <strong>Build <i>·</i> Learn <i>·</i> Serve</strong>
          <p>One road, still unfolding.</p>
        </div>
        <div className="roadmap__story roadmap__story--visible" aria-live="polite">
          {activeMilestone ? <div key={activeMilestone.title} className="roadmap__story-content">
            <p>{activeMilestone.year}</p>
            <h3>{activeMilestone.title}</h3>
            <span>{activeMilestone.meta}</span>
            <div>
              <strong>{activeMilestone.copy}</strong>
              <em>“{activeMilestone.quote}”</em>
            </div>
          </div> : <div className="roadmap__story-content roadmap__story-content--intro">
            <p>ON THE ROAD</p>
            <h3>Life is lived between the milestones.</h3>
            <span>Scroll through the route to explore Seshadhri’s journey.</span>
            <div>
              <strong>Each pin holds a chapter, a lesson, and a step forward.</strong>
              <em>“The journey matters as much as the destination.”</em>
            </div>
          </div>}
        </div>
      </div>
    </section>
  )
}

function JourneyReflection({ isExiting }) {
  return (
    <section className={isExiting ? 'journey-reflection journey-reflection--exiting' : 'journey-reflection'} aria-label="About the journey of Seshadhri">
      <div className="journey-reflection__inner">
        <p>More than a destination</p>
        <h2>What makes Seshadhri, <em>Seshadhri?</em></h2>
        <span>Seshadhri is a lot of things, but the journey is what brings them together: the people, detours, lessons, and small choices that have shaped who he is today.</span>
      </div>
    </section>
  )
}

function ProjectsArchive({ isExiting, projects, onProjectSelect }) {
  const [activeProject, setActiveProject] = useState(0)
  const [openFolderId, setOpenFolderId] = useState(null)
  const [isIntentOpen, setIsIntentOpen] = useState(false)
  const projectFolders = projects.filter((item) => !item.slug)
  const getFolderId = (item) => item.folderId || ({
    'Technical Projects': 'technical',
    'Creative Projects': 'creative',
    'Media & Storytelling': 'media',
    'Impact & Leadership': 'impact',
  }[item.title])
  const activeFolder = projectFolders.find((item) => getFolderId(item) === openFolderId)
  const folderProjects = openFolderId
    ? projects.filter((item) => item.slug && (item.folderId || 'technical') === openFolderId)
    : []
  const project = activeFolder || projectFolders[activeProject] || projectFolders[0]

  const openFolder = (folderId) => {
    setOpenFolderId(folderId)
    setActiveProject(0)
  }

  useEffect(() => {
    if (!isIntentOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsIntentOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isIntentOpen])

  return (
    <section className={isExiting ? 'projects-archive projects-archive--exiting' : 'projects-archive'} id="projects" aria-labelledby="projects-title">
      <div className="projects-archive__inner">
        <aside className="projects-archive__copy" aria-live="polite">
          <p className="projects-archive__eyebrow">02 · Project drawer</p>
          <h2 id="projects-title">Work, filed<br />with <button className="projects-archive__intent" type="button" onClick={() => setIsIntentOpen(true)}>intent.</button></h2>
          <p className="projects-archive__intro">A living archive of systems, stories, and experiments. Open a project folder to explore the work filed inside.</p>
          <div className="projects-archive__selected" key={project?.title || 'empty'}>
            {!project && <><p>Archive</p><h3>Nothing here yet</h3><span>Add a project category from the admin workspace when you are ready.</span></>}
            {project && <>
            <p>{project.category} <span>·</span> {activeFolder ? `${folderProjects.length} project${folderProjects.length === 1 ? '' : 's'} filed` : project.status}</p>
            <h3>{project.title}</h3>
            <span>{project.summary}</span>
            </>}
          </div>
        </aside>

        <div className={`project-drawer${activeFolder ? ' project-drawer--open' : ''}`} aria-label="Project archive">
          <div className="project-drawer__glow" aria-hidden="true" />
          {!activeFolder && projectFolders.map((item, index) => {
            const isActive = index === activeProject
            const fileClass = `project-file${isActive ? ' project-file--active' : ''}`
            const fileStyle = { '--project-index': index, '--project-accent': item.accent, '--project-tint': item.tint }
            const fileContent = <>
              <span className="project-file__tab">{String(index + 1).padStart(2, '0')}</span>
              <span className="project-file__meta">{item.category}</span>
              <strong>{item.folderTitle || (item.slug === 'next-gen-telehealth' ? 'Smartwatch Care System' : item.title)}</strong>
              <i aria-hidden="true"><span /><span /><span /></i>
            </>
            return <button
              key={item.title}
              type="button"
              className={fileClass}
              style={fileStyle}
              onMouseEnter={() => setActiveProject(index)}
              onFocus={() => setActiveProject(index)}
              onClick={() => openFolder(getFolderId(item))}
              aria-pressed={isActive}
              aria-label={`Open ${item.title}`}
            >{fileContent}</button>
          })}
          {!activeFolder && <p className="project-drawer__hint">Open a folder to explore its projects</p>}
          {activeFolder && <div className="project-folder-contents">
            <div className="project-folder-contents__header">
              <button type="button" onClick={() => setOpenFolderId(null)} aria-label="Back to all project folders">← All folders</button>
              <span>{String(folderProjects.length).padStart(2, '0')} filed projects</span>
            </div>
            <div className="project-folder-contents__title">
              <p>{activeFolder.category}</p>
              <h3>{activeFolder.title}</h3>
            </div>
            {folderProjects.length ? <div className="project-folder-list">
              {folderProjects.map((item, index) => <a
                key={item.slug}
                className="project-folder-entry"
                href={`/projects/${item.slug}`}
                style={{ '--project-accent': item.accent, '--project-tint': item.tint }}
                onClick={(event) => onProjectSelect(event, item.slug)}
                aria-label={`Open ${item.title}`}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><small>{item.category}</small><strong>{item.folderTitle || (item.slug === 'next-gen-telehealth' ? 'Smartwatch Care System' : item.title)}</strong></div>
                <i aria-hidden="true">↗</i>
              </a>)}
            </div> : <div className="project-folder-empty"><strong>New work is being filed here.</strong><span>This folder is ready for upcoming projects.</span></div>}
          </div>}
        </div>
      </div>
      {isIntentOpen && <div className="intent-modal" role="dialog" aria-modal="true" aria-labelledby="intent-modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsIntentOpen(false) }}>
        <div className="intent-modal__panel">
          <button className="intent-modal__close" type="button" aria-label="Close the meaning of intent" onClick={() => setIsIntentOpen(false)}><i /><i /></button>
          <p>WHY INTENT?</p>
          <h3 id="intent-modal-title">Making things that <em>matter.</em></h3>
          <span>Intent is the reason behind the work: choosing problems worth solving, building with people in mind, and turning curiosity into something genuinely useful.</span>
          <strong>“The work should leave people better than it found them.”</strong>
        </div>
      </div>}
    </section>
  )
}

function ProjectDetail({ project, onBack }) {
  const gallery = Array.isArray(project.gallery) ? project.gallery : []
  const tools = Array.isArray(project.tools) ? project.tools : []
  const highlights = Array.isArray(project.highlights) ? project.highlights : []
  const isHealthTrack = project.slug === 'healthtrack'
  const [activeFrameIndex, setActiveFrameIndex] = useState(0)
  const activeFrame = gallery[activeFrameIndex] || gallery[0]
  const selectFrame = (index) => setActiveFrameIndex((index + gallery.length) % gallery.length)

  return (
    <main className="project-case" style={{ '--project-accent': project.accent || '#62d56b', '--project-tint': project.tint || '#163b2b' }}>
      <div className="project-case__grain" aria-hidden="true" />
      <div className="project-case__inner">
        <nav className="project-case__nav" aria-label="Project navigation">
          <a href="/#projects" onClick={onBack}>← Project archive</a>
          <span>Case file / {project.year || 'Current'}</span>
        </nav>

        <header className="project-case__hero">
          <div className="project-case__hero-copy">
            <p className="project-case__eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="project-case__headline">{project.headline || project.summary}</p>
            <div className="project-case__signal"><span>Built to make a meaningful workflow feel clear, considered, and usable.</span><i aria-hidden="true">↘</i></div>
          </div>
          <aside className="project-case__folio" aria-label="Project details">
            <span>01</span>
            <div><p>MY ROLE</p><strong>{project.role || 'Personal project'}</strong></div>
            <div><p>PROJECT TYPE</p><strong>{project.status || 'Independent build'}</strong></div>
          </aside>
        </header>

        <section className="project-case__brief" aria-label="Project brief">
          <header><p className="project-case__eyebrow">The brief</p><h2>What I set out<br />to <em>make better.</em></h2></header>
          <article className="project-case__overview"><p>{project.overview || project.summary}</p></article>
          <aside className="project-case__scope"><p>TOOLS &amp; METHODS</p><div>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></aside>
          <article className="project-case__challenge"><p>THE CHALLENGE</p><span>{project.problem || 'A focused tool built to make a difficult workflow clearer.'}</span></article>
          <article className="project-case__result"><p>THE DELIVERABLE</p><span>{project.outcome || 'A useful project shaped around clarity and a strong user flow.'}</span></article>
        </section>

        <section className="project-case__capabilities" aria-label="Project capabilities">
          <header><p className="project-case__eyebrow">Capability index</p><h2>Proof in<br /><em>the build.</em></h2></header>
          <ol>{highlights.map((highlight, index) => <li key={highlight}><b>{String(index + 1).padStart(2, '0')}</b><span>{highlight}</span><i aria-hidden="true">↗</i></li>)}</ol>
        </section>

        {activeFrame && <section className={isHealthTrack ? 'project-case__slider project-case__slider--healthtrack' : 'project-case__slider'} aria-label={`${project.title} project gallery`}>
          <header><p className="project-case__eyebrow">{project.walkthroughLabel || 'Build evidence'}</p><h2>{project.walkthroughLead || 'The details behind'} <em>{project.walkthroughEmphasis || 'the experience.'}</em></h2></header>
          <div className="project-case__slider-stage">
            <button type="button" className="project-case__slider-control" onClick={() => selectFrame(activeFrameIndex - 1)} aria-label="Previous project image">←</button>
            <figure key={`${activeFrame.label}-${activeFrameIndex}`}>
              <img src={activeFrame.image} alt={`${project.title} — ${activeFrame.label}`} />
              {!isHealthTrack && <figcaption><b>{String(activeFrameIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</b><div><strong>{activeFrame.label}</strong><span>{activeFrame.caption}</span></div></figcaption>}
            </figure>
            {isHealthTrack && <aside className="project-case__slider-note" aria-live="polite"><span>{String(activeFrameIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span><strong>{activeFrame.label}</strong><p>{activeFrame.caption}</p><i>HealthTrack app flow</i></aside>}
            <button type="button" className="project-case__slider-control" onClick={() => selectFrame(activeFrameIndex + 1)} aria-label="Next project image">→</button>
          </div>
          <div className="project-case__slider-index" aria-label="Project image selector">
            {gallery.map((frame, index) => <button key={`${frame.label}-${index}`} type="button" className={index === activeFrameIndex ? 'is-active' : ''} onClick={() => setActiveFrameIndex(index)} aria-label={`View image ${index + 1}: ${frame.label}`} aria-pressed={index === activeFrameIndex}><b>{String(index + 1).padStart(2, '0')}</b><span>{frame.label}</span></button>)}
          </div>
        </section>}

        <footer className="project-case__close"><p>End of case file</p><strong>{project.takeaway || 'Good work is not only functional. It helps the next person understand what to do.'}</strong><a href="/#projects" onClick={onBack}>Return to the project archive <i aria-hidden="true">↗</i></a></footer>
      </div>
    </main>
  )
}

function ResearchNotes({ isExiting, onResearchSelect, notes }) {
  const [isNotesMeaningOpen, setIsNotesMeaningOpen] = useState(false)

  useEffect(() => {
    if (!isNotesMeaningOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsNotesMeaningOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isNotesMeaningOpen])

  return (
    <section className={isExiting ? 'research-notes research-notes--exiting' : 'research-notes'} id="research-notes" aria-labelledby="research-notes-title">
      <div className="research-notes__inner">
        <header className="research-notes__header">
          <p>03 · Research notes</p>
          <h2 id="research-notes-title">Thoughts in<br /><button className="research-notes__keyword" type="button" onClick={() => setIsNotesMeaningOpen(true)}>public.</button></h2>
          <span>A personal blog for the ideas, tools, and technical shifts I am researching — with room for honest opinions, experiments, and questions still worth asking.</span>
        </header>

        <div className="research-notes__rail" aria-label="Research note collection">
          {notes.map((note, index) => (
            <a className="research-note" key={note.slug} href={`/research/${note.slug}`} onClick={(event) => onResearchSelect(event, note.slug)} style={{ '--note-accent': note.accent }} aria-label={`Read ${note.title}`}>
              <span className="research-note__number">{String(index + 1).padStart(2, '0')}</span>
              <span className="research-note__topic">{note.topic}</span>
              <h3>{note.title}</h3>
              <p>{note.excerpt}</p>
              <footer><span>{note.readTime}</span><i aria-hidden="true">↗</i></footer>
            </a>
          ))}
        </div>
        {!notes.length && <p className="research-notes__future">The first public note is being written. Add it from the admin workspace when ready.</p>}
        <a className="archive-cta" href="/research">Click on this button to see further research papers <i aria-hidden="true">↗</i></a>
      </div>

      {isNotesMeaningOpen && <div className="notes-modal" role="dialog" aria-modal="true" aria-labelledby="notes-modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsNotesMeaningOpen(false) }}>
        <div className="notes-modal__panel">
          <button className="notes-modal__close" type="button" aria-label="Close the meaning of research notes" onClick={() => setIsNotesMeaningOpen(false)}><i /><i /></button>
          <p>WHY WRITE?</p>
          <h3 id="notes-modal-title">Research becomes<br /><em>useful when shared.</em></h3>
          <span>These notes are a public record of what I am learning: the ideas that challenge me, the technologies I want to understand better, and the perspective I build along the way.</span>
          <strong>“Curiosity is more valuable when it becomes a conversation.”</strong>
        </div>
      </div>}
    </section>
  )
}

function ResearchArchivePage({ notes, onResearchSelect }) {
  return (
    <main className="collection-archive collection-archive--research" aria-labelledby="research-archive-title">
      <div className="collection-archive__inner">
        <a className="collection-archive__back" href="/#research-notes">← Back to the portfolio</a>
        <header className="collection-archive__header">
          <p>Thoughts in public / full archive</p>
          <h1 id="research-archive-title">A longer shelf for<br /><em>unfinished curiosity.</em></h1>
          <span>Every note here is a record of something I wanted to understand better — with the full context, reading, and point of view kept intact.</span>
        </header>
        <div className="collection-archive__grid">
          {notes.map((note, index) => (
            <a className="research-note" key={note.slug} href={`/research/${note.slug}`} onClick={(event) => onResearchSelect(event, note.slug)} style={{ '--note-accent': note.accent }}>
              <span className="research-note__number">{String(index + 1).padStart(2, '0')}</span>
              <span className="research-note__topic">{note.topic}</span>
              <h3>{note.title}</h3>
              <p>{note.excerpt}</p>
              <footer><span>{note.readTime}</span><i aria-hidden="true">↗</i></footer>
            </a>
          ))}
          {!notes.length && <p className="collection-archive__empty">No research papers have been added yet. The first one is waiting in the admin workspace.</p>}
        </div>
      </div>
    </main>
  )
}

function ResearchDetail({ research, onBack }) {
  const isAppleIntelligence = research.topic === 'Apple Intelligence'

  return (
    <section className="research-paper" style={{ '--paper-accent': research.accent }} aria-labelledby="research-paper-title">
      <div className="research-paper__inner">
        <a className="research-paper__back" href="/#research-notes" onClick={onBack}><i aria-hidden="true">←</i> Back to research notes</a>

        <header className="research-paper__header">
          <p>Thoughts in public / research note</p>
          <h1 id="research-paper-title">{isAppleIntelligence ? <><mark>Apple Intelligence</mark>{research.title.slice('Apple Intelligence'.length)}</> : research.title}</h1>
          <div><span>{research.topic}</span><span>{research.date}</span><span>{research.readTime}</span></div>
        </header>

        <section className="research-paper__opening" aria-label="Research note overview">
          <div className="research-paper__thesis">
            <p>The premise</p>
            <h2>Less noise.<br /><em>More signal.</em></h2>
            <span>{research.thesis}</span>
          </div>
          <figure className={research.cover ? 'research-paper__cover' : 'research-paper__cover research-paper__cover--abstract'}>
            {research.cover ? <img src={research.cover} alt={research.coverAlt} /> : <div aria-hidden="true"><i>AI</i><span /><span /><span /></div>}
            <figcaption>Visual context / current research</figcaption>
          </figure>
        </section>

        <section className="research-paper__metrics" aria-label="Key research signals">
          {research.metrics.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></article>)}
        </section>

        <figure className="research-paper__chart" aria-labelledby="research-chart-title">
          <figcaption><span id="research-chart-title">{research.chart.label}</span><small>{research.chart.note}</small></figcaption>
          <div className="research-paper__bars" aria-label={research.chart.label}>
            {research.chart.points.map((point) => <div key={point.label}><i style={{ '--bar-size': `${point.value}%` }} /><span>{point.label}</span><b>{point.value}</b></div>)}
          </div>
        </figure>

        <section className="research-paper__body" aria-labelledby="research-reading-title">
          <div className="research-paper__body-label"><p>Reading the signal</p><span>Notes are a point of view, supported by the reading list below.</span></div>
          <div>
            <h2 id="research-reading-title">The research<br /><em>behind the view.</em></h2>
            {(research.sections?.length ? research.sections : research.body ? [{ title: 'The full thought', copy: research.body }] : []).map((section, index) => <article key={section.title}><b>{String(index + 1).padStart(2, '0')}</b><div><h3>{section.title}</h3><p>{section.copy}</p></div></article>)}
          </div>
        </section>

        <section className="research-paper__sources" aria-labelledby="research-sources-title">
          <header><p>Primary reading</p><h2 id="research-sources-title">Sources &<br /><em>papers.</em></h2></header>
          <div>{research.sources.map((source, index) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, '0')}</span><strong>{source.label}</strong><i aria-hidden="true">↗</i></a>)}</div>
        </section>
      </div>
    </section>
  )
}

function CourseCertificateMedia({ course, className = '' }) {
  if (!course.certificate) return <span className={`course-certificate-placeholder ${className}`}>Certificate will be added here.</span>

  if (course.certificateType === 'pdf' || /\.pdf(?:$|[?#])/i.test(course.certificate)) {
    return <a className={`course-certificate-file ${className}`} href={course.certificate} target="_blank" rel="noreferrer">Open course certificate PDF <i aria-hidden="true">↗</i></a>
  }

  return <img className={className} src={course.certificate} alt={`${course.title} certificate`} />
}

function getCourseNumber(course, index) {
  return course.courseNumber || String(index + 1).padStart(2, '0')
}

function LearningArchive({ isExiting, onCourseSelect, courses }) {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false)
  const [activeCourseIndex, setActiveCourseIndex] = useState(0)
  const activeCourse = courses[activeCourseIndex] || courses[0]
  useEffect(() => {
    if (!isArchiveOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsArchiveOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isArchiveOpen])

  return (
    <section className={isExiting ? 'learning-archive learning-archive--exiting' : 'learning-archive'} id="learning-archive" aria-labelledby="learning-archive-title">
      <div className="learning-archive__inner">
        <header className="learning-archive__header">
          <div>
            <p>04 · Learning archive</p>
            <h2 id="learning-archive-title">Proof of<br /><button type="button" onClick={() => setIsArchiveOpen(true)}>progress.</button></h2>
          </div>
          <span>Courses that sharpened the way I think, build, and keep moving. Each one is a small receipt for the work I have put in.</span>
        </header>

        <div className="learning-archive__workspace">
          <div className="learning-archive__course-list" aria-label="Completed courses">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className={index === activeCourseIndex ? 'course-entry course-entry--active' : 'course-entry'}
                style={{ '--course-accent': course.accent }}
              >
                <button
                  type="button"
                  className="course-entry__preview"
                  onClick={() => setActiveCourseIndex(index)}
                  aria-pressed={index === activeCourseIndex}
                  aria-label={`Show ${course.title} certificate`}
                >
                  <span>{getCourseNumber(course, index)}</span>
                  <strong>{course.title}</strong>
                  <i>{course.provider}</i>
                </button>
                <a
                  className="course-entry__open"
                  href={`/learning/${course.slug}`}
                  onClick={(event) => onCourseSelect(event, course.slug)}
                  aria-label={`Open ${course.title} course page`}
                >
                <b aria-hidden="true">↗</b>
                </a>
              </div>
            ))}
            {!courses.length && <p><i>+</i> Add your first course from the admin workspace.</p>}
          </div>
          {activeCourse && <article className="learning-archive__certificate" key={activeCourse.slug} style={{ '--course-accent': activeCourse.accent }} aria-live="polite">
            <div className="learning-archive__certificate-top"><span>Certificate preview</span><i>{activeCourse.completed}</i></div>
            <figure>
              <CourseCertificateMedia course={activeCourse} />
            </figure>
            <div className="learning-archive__certificate-meta">
              <div>
                <p>{activeCourse.provider}</p>
                <h3>{activeCourse.title}</h3>
                <span>{activeCourse.overview}</span>
              </div>
              <aside>
                <p>What I learned</p>
                <div>{activeCourse.focus?.map((item) => <span key={item}>{item}</span>)}</div>
              </aside>
            </div>
          </article>}
        </div>
        <a className="archive-cta archive-cta--courses" href="/learning">click on this button to see more courses <i aria-hidden="true">↗</i></a>
      </div>

      {isArchiveOpen && <div className="learning-modal" role="dialog" aria-modal="true" aria-labelledby="learning-modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsArchiveOpen(false) }}>
        <div className="learning-modal__panel">
          <button className="learning-modal__close" type="button" aria-label="Close the meaning of progress" onClick={() => setIsArchiveOpen(false)}><i /><i /></button>
          <p>WHY KEEP A RECORD?</p>
          <h3 id="learning-modal-title">Progress is built<br /><em>one lesson at a time.</em></h3>
          <span>This archive is not a list for its own sake. It marks the skills, perspectives, and deliberate practice that continue to shape my work.</span>
          <strong>“Keep learning visible. It makes the next step easier to take.”</strong>
        </div>
      </div>}
    </section>
  )
}

function CourseArchivePage({ courses, onCourseSelect }) {
  return (
    <main className="collection-archive collection-archive--courses" aria-labelledby="course-archive-title">
      <div className="collection-archive__inner">
        <a className="collection-archive__back" href="/#learning-archive">← Back to the portfolio</a>
        <header className="collection-archive__header">
          <p>Proof of progress / full archive</p>
          <h1 id="course-archive-title">Every lesson has a<br /><em>place in the story.</em></h1>
          <span>A complete record of the courses that gave shape to my skills, confidence, and next set of questions.</span>
        </header>
        <div className="course-archive-list">
          {courses.map((course, index) => (
            <a className="course-archive-list__item" key={course.slug} href={`/learning/${course.slug}`} onClick={(event) => onCourseSelect(event, course.slug)} style={{ '--course-accent': course.accent }}>
              <span>{getCourseNumber(course, index)}</span>
              <div><small>{course.provider} · {course.completed}</small><h2>{course.title}</h2><p>{course.overview}</p></div>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
          {!courses.length && <p className="collection-archive__empty">No courses have been added yet. Add the first one from the admin workspace.</p>}
        </div>
      </div>
    </main>
  )
}

function MomentSlideshow({ slides, label }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 3600)
    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <div className="experience-milestone__media experience-milestone__slideshow" aria-label={label}>
      {slides.map((slide, index) => (
        <img key={slide.src} className={index === activeSlide ? 'experience-milestone__slide experience-milestone__slide--active' : 'experience-milestone__slide'} src={slide.src} alt={slide.alt} />
      ))}
      <div className="experience-milestone__dots" aria-label={`${label} image selector`}>
        {slides.map((slide, index) => <button key={slide.src} type="button" className={index === activeSlide ? 'experience-milestone__dot experience-milestone__dot--active' : 'experience-milestone__dot'} onClick={() => setActiveSlide(index)} aria-label={`Show image ${index + 1} of ${slides.length}`} aria-pressed={index === activeSlide} />)}
      </div>
    </div>
  )
}

function ExperienceArchive({ isExiting, onExperienceSelect, experiences }) {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0)
  const activeExperience = experiences[activeExperienceIndex] || experiences[0]

  if (!activeExperience) return null

  return (
    <section className={isExiting ? 'experience-archive experience-archive--exiting' : 'experience-archive'} id="experience" aria-labelledby="experience-title" style={{ '--experience-accent': activeExperience.accent }}>
      <div className="experience-archive__inner">
        <header className="experience-archive__header">
          <p>05 · Experience</p>
          <h2>Built with<br /><em>people.</em></h2>
          <span>Technical work, creative practice, and communities that taught me how to turn a contribution into something that matters.</span>
        </header>

        <div className="experience-archive__layout">
          <aside className="experience-archive__switcher" aria-label="Experience chapters">
            {experiences.map((experience, index) => (
              <div
                key={experience.organisation}
                className={index === activeExperienceIndex ? 'experience-switcher__item experience-switcher__item--active' : 'experience-switcher__item'}
                style={{ '--experience-item-accent': experience.accent }}
                onClick={() => setActiveExperienceIndex(index)}
              >
                <button
                  type="button"
                  className="experience-switcher__preview"
                  onClick={() => setActiveExperienceIndex(index)}
                  aria-pressed={index === activeExperienceIndex}
                  aria-label={`Preview ${experience.organisation}`}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{experience.organisation}</strong>
                  <i>{experience.kind}</i>
                </button>
                <a
                  className="experience-switcher__open"
                  href={`/experience/${experience.slug}`}
                  onClick={(event) => onExperienceSelect(event, experience.slug)}
                  aria-label={`Open ${experience.organisation} experience page`}
                >
                  <b aria-hidden="true"><ArrowIcon /></b>
                </a>
              </div>
            ))}
            <p><i>+</i> More chapters will appear here.</p>
          </aside>

          <article className="experience-card" key={activeExperience.organisation}>
            <div className={activeExperience.slug === 'kryos-gaming' ? 'experience-card__media experience-card__media--dark' : 'experience-card__media'} aria-label={`${activeExperience.organisation} logo`}>
              <img src={activeExperience.visual} alt={activeExperience.visualAlt} />
            </div>
            <div className="experience-card__content">
              <div className="experience-card__topline"><span>{activeExperience.kind}</span><i>{activeExperience.period}</i></div>
              <h3>{activeExperience.organisation}</h3>
              <p className="experience-card__role">{activeExperience.role}</p>
              <p className="experience-card__copy">{activeExperience.copy}</p>
              <div className="experience-card__details"><span>{activeExperience.location}</span><i>{activeExperience.note}</i></div>
              <div className="experience-card__skills">{activeExperience.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
          </article>
        </div>

        <section className="experience-milestones" aria-labelledby="experience-milestones-title">
          <div><p>Milestone cabinet</p><h3 id="experience-milestones-title">The moments that<br /><em>shape the work.</em></h3></div>
          <div className="experience-milestones__slots">
            <article>
              <MomentSlideshow slides={definingBuildSlides} label="Defining build project gallery" />
              <span>01</span><strong>Defining build</strong><p>Edge AI health watch prototype — a hands-on system brought to life with sensors and connected hardware.</p><i>PROJECT / PROTOTYPE</i>
            </article>
            <article>
              <MomentSlideshow slides={peopleFirstSlides} label="People first moments gallery" />
              <span>02</span><strong>People first</strong><p>The collaborations and communities that keep the work connected to people.</p><i>COMMUNITY / MOMENT</i>
            </article>
            <article>
              <div className="experience-milestone__media experience-milestone__media--video"><video src={nextChapterEditing} autoPlay loop muted playsInline aria-label="Seshadhri editing a video" /></div>
              <span>03</span><strong>Next chapter</strong><p>Always learning, editing, experimenting, and turning the next idea into something real.</p><i>STAY TUNED!</i>
            </article>
          </div>
        </section>
      </div>
    </section>
  )
}

function CourseDetail({ course, onBack }) {
  return (
    <section className="course-page" style={{ '--course-accent': course.accent }} aria-labelledby="course-page-title">
      <div className="course-page__inner">
        <a className="course-page__back" href="/#learning-archive" onClick={onBack}><i aria-hidden="true">←</i> Back to courses</a>
        <header className="course-page__header">
          <p>Learning archive / completed course</p>
          <h1 id="course-page-title">{course.title}</h1>
          <span>{course.provider}</span>
          <div>{course.focus.map((skill) => <i key={skill}>{skill}</i>)}</div>
        </header>

        <div className="course-page__layout">
          <article className="course-page__story">
            <p className="course-page__label">Course context</p>
            <h2>What I took<br /><em>from this.</em></h2>
            <span>{course.overview}</span>
            <ol>
              {course.lessons.map((lesson, index) => <li key={lesson}><b>{String(index + 1).padStart(2, '0')}</b><span>{lesson}</span></li>)}
            </ol>
            <footer><span>Completed {course.completed}</span><strong>{course.length}</strong></footer>
          </article>
          <div className="course-page__certificate-wrap">
            <figure className="course-page__certificate"><CourseCertificateMedia course={course} /><figcaption>Original course certificate</figcaption></figure>
            {course.certificateFile && <a className="course-page__certificate-source" href={course.certificateFile} target="_blank" rel="noreferrer">Open the original certificate PDF <i aria-hidden="true">↗</i></a>}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceDetail({ experience, onBack }) {
  return (
    <section className="experience-page" style={{ '--experience-accent': experience.accent }} aria-labelledby="experience-page-title">
      <div className="experience-page__inner">
        <a className="experience-page__back" href="/#experience" onClick={onBack}><i aria-hidden="true">←</i> Back to experience</a>
        <header className="experience-page__header">
          <p>Experience / {experience.kind}</p>
          <h1 id="experience-page-title">{experience.organisation}</h1>
          <span>{experience.role} · {experience.period}</span>
          <div>{experience.skills.map((skill) => <i key={skill}>{skill}</i>)}</div>
        </header>

        <div className="experience-page__layout">
          <article className="experience-page__story">
            <p className="experience-page__label">Contribution</p>
            <h2>Built with<br /><em>purpose.</em></h2>
            <span>{experience.overview}</span>
            <ol>
              {experience.lessons.map((lesson, index) => <li key={lesson}><b>{String(index + 1).padStart(2, '0')}</b><span>{lesson}</span></li>)}
            </ol>
            <footer><span>{experience.location}</span><strong>{experience.note}</strong></footer>
          </article>
          <figure className={experience.slug === 'kryos-gaming' ? 'experience-page__media experience-page__media--dark' : 'experience-page__media'} aria-label={experience.visualAlt}>
            <img src={experience.visual} alt={experience.visualAlt} />
          </figure>
        </div>

        {experience.slug === 'synk-official' && (
          <section className="experience-page__synk-archive" aria-labelledby="synk-archive-title">
            <header>
              <p>Field notes / Synk Official</p>
              <h2 id="synk-archive-title">The people behind<br /><em>the brand work.</em></h2>
              <span>Synk showed me that strong digital work is rarely one thing — it is detail, care, visual storytelling, and a team that helps you grow into the work.</span>
            </header>

            <article className="synk-archive__mentor">
              <div>
                <p>Guidance that mattered</p>
                <h3>Learning with<br /><em>Navika Menon.</em></h3>
                <span>Navika gave me room to learn as a beginner while trusting me with real work. Her guidance made this agency chapter both demanding and deeply encouraging.</span>
              </div>
              <figure>
                <img src={synkNavikaOnsite} alt="Seshadhri and Navika Menon during a Synk Official client shoot" />
                <figcaption>On-site / client work</figcaption>
              </figure>
            </article>

            <div className="synk-archive__records">
              <figure className="synk-archive__record synk-archive__record--letter">
                <div><img src={synkLetterOfRecommendation} alt="Synk Official letter of recommendation for Seshadhri's internship" /></div>
                <figcaption><span>Verified chapter</span><strong>5 June — 5 August 2025</strong><p>Letter of recommendation / Web Developer internship</p></figcaption>
              </figure>
              <figure className="synk-archive__record synk-archive__record--award">
                <div><img src={navikaWomenAchieverAward} alt="Navika Menon receiving recognition at the Women Achiever Award 2025" /></div>
                <figcaption><span>Celebrating the team</span><strong>Women Achiever Award 2025</strong><p>A reminder of the ambitious people behind Synk.</p></figcaption>
              </figure>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}

function OrganisationInsightModal({ insight, accent, onClose }) {
  const details = {
    voi: {
      eyebrow: 'ABOUT VOLUNTEERS OF INDIA',
      title: <>A shared effort<br /><em>for brighter spaces.</em></>,
      copy: 'Volunteers of India brings people together for practical, hands-on community work. During this Chennai mural drive, volunteers refreshed government-school walls with colourful, child-friendly art so everyday learning spaces could feel more welcoming and alive.',
      note: '“Small strokes can make a shared space feel full of possibility.”',
    },
    pamperedPaws: {
      eyebrow: 'ABOUT PAMPERED PAWS',
      title: <>Care that puts<br /><em>dogs first.</em></>,
      copy: 'Pampered Paws is an animal-welfare community centred on the care, visibility, and well-being of dogs. At this event, it helped create a warm, approachable space for dogs, volunteers, and visitors to spend time together.',
      note: '“Care begins by making every dog feel seen.”',
    },
    iadopt: {
      eyebrow: 'ABOUT iADOPT.IN',
      title: <>Making room<br /><em>for a new life.</em></>,
      copy: 'iadopt.in is an adoption-focused initiative that helps connect dogs with potential adopters and encourages thoughtful, responsible adoption. The event gave visitors a chance to meet the dogs and learn about the care behind finding each one a suitable home.',
      note: '“Every introduction can be the beginning of a home.”',
    },
  }
  const detail = details[insight]

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [onClose])

  if (!detail) return null

  return (
    <div className="leadership-insight-modal" role="dialog" aria-modal="true" aria-labelledby="organisation-insight-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="leadership-insight-modal__panel" style={{ '--insight-accent': accent }}>
        <button className="leadership-insight-modal__close" type="button" aria-label={`Close the ${detail.eyebrow.toLowerCase()} detail`} onClick={onClose}><i /><i /></button>
        <p>{detail.eyebrow}</p>
        <h3 id="organisation-insight-title">{detail.title}</h3>
        <span>{detail.copy}</span>
        <strong>{detail.note}</strong>
      </div>
    </div>
  )
}

function VolunteerDetail({ chapter, onBack }) {
  const [activeInsight, setActiveInsight] = useState(false)

  return (
    <section className="experience-page volunteer-page" style={{ '--experience-accent': chapter.accent }} aria-labelledby="volunteer-page-title">
      <div className="experience-page__inner">
        <a className="experience-page__back" href="/#leadership" onClick={onBack}><i aria-hidden="true">←</i> Back to leadership</a>
        <header className="experience-page__header">
          <p>Leadership & community / volunteer work</p>
          <h1 id="volunteer-page-title"><button className="leadership-highlight leadership-highlight--title" type="button" onClick={() => setActiveInsight(true)}>Volunteers<br /><em>of India.</em></button></h1>
          <span>Volunteer · Government-school mural drive · Chennai, India</span>
          <div><i>Community service</i><i>School murals</i><i>Chennai</i></div>
        </header>

        <div className="experience-page__layout volunteer-page__opening">
          <article className="experience-page__story">
            <p className="experience-page__label">The mural drive</p>
            <h2>Painted for<br /><em>brighter days.</em></h2>
            <span>I volunteered with <button className="leadership-highlight" type="button" onClick={() => setActiveInsight(true)}>Volunteers of India</button> in Chennai, helping paint creative murals at government schools. Moving from wall to wall with the team, we turned plain corridors into colourful visual spaces meant to feel more welcoming, playful, and alive for students.</span>
            <ol>
              <li><b>01</b><span>Worked alongside fellow volunteers to paint educational and imaginative artwork across school walls.</span></li>
              <li><b>02</b><span>Contributed to the details that turn a wall into a shared visual story — from first outlines to finished colour.</span></li>
              <li><b>03</b><span>Helped create an environment that felt brighter for the students who use those spaces every day.</span></li>
            </ol>
            <footer><span>Chennai, India</span><strong>Volunteer · Community work</strong></footer>
          </article>
          <figure className="experience-page__media volunteer-page__hero-media">
            <img src={voiMuralPainting} alt="Seshadhri painting a colourful city mural at a Chennai government school" />
            <figcaption>Volunteers of India / mural drive</figcaption>
          </figure>
        </div>

        <section className="volunteer-archive" aria-labelledby="volunteer-archive-title">
          <header>
            <p>Volunteers of India / field day</p>
            <h2 id="volunteer-archive-title">Colour in<br /><em>the everyday.</em></h2>
            <span>These were simple, hands-on days: sharing paint, building details one section at a time, and watching a school environment transform around the work.</span>
          </header>
          <div className="volunteer-archive__mural-grid">
            <figure>
              <img src={voiSpaceMural} alt="Volunteers painting a space-themed mural at a government school" />
              <figcaption><span>01 / Collaboration</span><strong>Making the wall together.</strong></figcaption>
            </figure>
            <figure>
              <img src={voiClassroomMural} alt="Volunteer painting a mushroom mural inside a government school" />
              <figcaption><span>02 / Detail</span><strong>Small strokes, shared impact.</strong></figcaption>
            </figure>
          </div>
        </section>

      </div>
      {activeInsight && <OrganisationInsightModal insight="voi" accent={chapter.accent} onClose={() => setActiveInsight(false)} />}
    </section>
  )
}

function AdoptionDetail({ chapter, onBack }) {
  const [activeInsight, setActiveInsight] = useState(null)

  return (
    <section className="experience-page adoption-page" style={{ '--experience-accent': chapter.accent }} aria-labelledby="adoption-page-title">
      <div className="experience-page__inner">
        <a className="experience-page__back" href="/#leadership" onClick={onBack}><i aria-hidden="true">←</i> Back to leadership</a>
        <header className="experience-page__header">
          <p>Leadership & community / animal welfare</p>
          <h1 id="adoption-page-title"><button className="leadership-highlight leadership-highlight--title" type="button" onClick={() => setActiveInsight('pamperedPaws')}>Pampered Paws</button><br /><em>× <button className="leadership-highlight leadership-highlight--title" type="button" onClick={() => setActiveInsight('iadopt')}>iadopt.in.</button></em></h1>
          <span>Volunteer · Dog-adoption event · Chennai, India</span>
          <div><i>Animal welfare</i><i>Adoption event</i><i>Community care</i></div>
        </header>

        <div className="experience-page__layout adoption-page__opening">
          <article className="experience-page__story">
            <p className="experience-page__label">The adoption event</p>
            <h2>Every dog<br /><em>deserves a home.</em></h2>
            <span>I volunteered with <button className="leadership-highlight" type="button" onClick={() => setActiveInsight('pamperedPaws')}>Pampered Paws</button> and <button className="leadership-highlight" type="button" onClick={() => setActiveInsight('iadopt')}>iadopt.in</button> at a dog-adoption event in Chennai. Together, we helped create a friendly, welcoming setting where visitors could meet dogs, learn about adoption, and see the care behind finding each dog the right home.</span>
            <ol>
              <li><b>01</b><span>Volunteered at a public dog-adoption event with Pampered Paws and iadopt.in.</span></li>
              <li><b>02</b><span>Helped support a calm, friendly space for visitors and dogs to meet.</span></li>
              <li><b>03</b><span>Contributed to an event built around care, connection, and responsible adoption.</span></li>
            </ol>
            <footer><span>Chennai, India</span><strong>Volunteer · Animal welfare</strong></footer>
          </article>
          <figure className="experience-page__media adoption-page__hero-media">
            <div className="adoption-page__logos" aria-label="Pampered Paws and iadopt.in logos">
              <img src={pamperedPawsLogo} alt="Pampered Paws logo" />
              <img src={adoptInLogo} alt="iadopt.in logo" />
            </div>
            <figcaption>Pampered Paws × iadopt.in</figcaption>
          </figure>
        </div>

        <section className="adoption-archive" aria-labelledby="adoption-archive-title">
          <header>
            <p>Pampered Paws × iadopt.in / field day</p>
            <h2 id="adoption-archive-title">A day for<br /><em>new beginnings.</em></h2>
            <span>A gallery from the event — a playful, people-first day built around helping dogs meet potential families.</span>
          </header>
          <div className="adoption-archive__feature-grid">
            <figure className="adoption-archive__feature">
              <img src={pamperedPawsCarnival} alt="Seshadhri volunteering in a Pampered Paws shirt at a pet carnival" />
              <figcaption><span>Pampered Paws / Pet carnival</span><strong>Showing up for the dogs.</strong></figcaption>
            </figure>
            <figure className="adoption-archive__feature">
              <img src={adoptInPuppy} alt="Volunteer holding a puppy at the dog-adoption event" />
              <figcaption><span>Adoption event</span><strong>A gentle hello.</strong></figcaption>
            </figure>
          </div>
          <figure className="adoption-archive__wide">
            <img src={pamperedPawsDogs} alt="Dogs meeting one another at the adoption event" />
            <figcaption>Making room to connect.</figcaption>
          </figure>
        </section>
      </div>
      {activeInsight && <OrganisationInsightModal insight={activeInsight} accent={chapter.accent} onClose={() => setActiveInsight(null)} />}
    </section>
  )
}

function LeadershipDetail({ chapter, onBack }) {
  const [activeInsight, setActiveInsight] = useState(null)

  useEffect(() => {
    if (!activeInsight) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveInsight(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [activeInsight])

  if (chapter.slug === 'volunteers-of-india') return <VolunteerDetail chapter={chapter} onBack={onBack} />
  if (chapter.slug === 'pampered-paws-adopt-in') return <AdoptionDetail chapter={chapter} onBack={onBack} />
  if (chapter.slug !== 'elite-club') return null

  return (
    <section className="experience-page leadership-page" style={{ '--experience-accent': chapter.accent }} aria-labelledby="leadership-page-title">
      <div className="experience-page__inner">
        <a className="experience-page__back" href="/#leadership" onClick={onBack}><i aria-hidden="true">←</i> Back to leadership</a>
        <header className="experience-page__header">
          <p>Leadership & community / IT department club</p>
          <h1 id="leadership-page-title">Elite Club<br /><button className="leadership-highlight leadership-highlight--people leadership-highlight--title" type="button" onClick={() => setActiveInsight('college')}>REC.</button></h1>
          <span>President · Emerging Leaders of Information Technology and Engineering</span>
          <div><i>Technical events</i><i>Community</i><i>Content</i><i>Mentorship</i></div>
        </header>

        <div className="experience-page__layout leadership-page__opening">
          <article className="experience-page__story">
            <p className="experience-page__label">The role</p>
            <h2>Make tech<br /><em>feel shared.</em></h2>
            <span>ELITE — Emerging Leaders of Information Technology and Engineering — was where I learnt that leading starts by listening. When I first joined, my seniors Harish and Nouman showed me the world of IT, events, and people management. I began completely clueless about carrying it alone; their guidance made the first step possible. Later, Dinesh, Kathiyan, and Vaitheswaran became the teammates who challenged and supported me as I grew into a steadier, more confident leader.</span>
            <ol>
              <li><b>01</b><span>Led the planning and execution of Design Summit 2024 and 2025, creating space for design, career, and technical conversations.</span></li>
              <li><b>02</b><span>Supported technical events including Techno Kallos and Innovision 2025, a national-level technical project expo.</span></li>
              <li><b>03</b><span>Published weekly technology news on Instagram and paired community content with supportive mental-health-week messaging.</span></li>
            </ol>
            <footer><button className="leadership-highlight" type="button" onClick={() => setActiveInsight('college')}>Rajalakshmi Engineering College</button><strong>Leadership in public</strong></footer>
          </article>
          <figure className="experience-page__media leadership-page__hero-media leadership-page__hero-media--logo">
            <img src={eliteClubLogo} alt="Elite Club logo — Where leaders are made" />
            <figcaption>Elite Club REC / where leaders are made</figcaption>
          </figure>
        </div>

        <section className="elite-archive" aria-labelledby="elite-archive-title">
          <header>
            <p>Programming the community</p>
            <h2 id="elite-archive-title"><span>Events,&nbsp;ideas</span><span>&amp; <button className="leadership-highlight leadership-highlight--people" type="button" onClick={() => setActiveInsight('people')}>people.</button></span></h2>
            <span>A leadership chapter built across event days and the quieter work between them: planning, posting, helping, and making room for others to show what they can do.</span>
          </header>

          <div className="elite-archive__showcase">
            <figure className="elite-archive__poster">
              <img src={eliteDesignSummit2024} alt="Design Summit event poster for Elite Club REC" />
              <figcaption><span>Design Summit</span><strong>2024 & 2025</strong><p>Career, design, and technical events that brought students into the same conversation.</p></figcaption>
            </figure>
            <article className="elite-archive__events">
              <p>Inside the event</p>
              <h3>A summit built for<br /><em>curious minds.</em></h3>
              <span>Design Summit brought the Department of Information Technology together through hands-on challenges, conversations, and project showcases. Each event gave students a different way to think, make, and share.</span>
              <ul>
                <li><strong>Design Arena</strong><span>A UI/UX design contest where ideas became clear, useful digital experiences.</span></li>
                <li><strong>Code Crack</strong><span>A timed coding challenge centred on logic, problem-solving, and clean execution.</span></li>
                <li><strong>Discussion Den</strong><span>A group-discussion space for thoughtful viewpoints, confident speaking, and listening well.</span></li>
                <li><strong>Vision Vault</strong><span>A project-presentation stage for turning ambitious concepts into a story others could understand.</span></li>
                <li><strong>Code Your Way Out</strong><span>An escape-style code challenge that rewarded focus, collaboration, and creative thinking.</span></li>
              </ul>
              <figure className="elite-archive__event-strip">
                <img src={eliteDesignSummitEvents} alt="Design Summit posters for Design Arena, Code Crack, Discussion Den, Vision Vault, and Code Your Way Out" />
                <figcaption>Five event formats / one shared stage</figcaption>
              </figure>
            </article>
          </div>
          <div className="elite-archive__secondary">
            <article className="elite-archive__story">
              <p>Beyond the stage</p>
              <h3>Information that<br /><em>keeps moving.</em></h3>
              <span>The club’s Instagram became a working noticeboard for technical curiosity: weekly tech-news posts, event information, and a softer check-in during Mental Health Week.</span>
              <a href="https://www.instagram.com/eliteclubrec/" target="_blank" rel="noreferrer">Visit @eliteclubrec <i aria-hidden="true">↗</i></a>
            </article>
            <figure className="elite-archive__video elite-archive__video--compact">
              <video src={eliteMentalHealthWeek} controls muted playsInline preload="metadata" aria-label="Elite Club mental health week video" />
              <figcaption>Mental Health Week / supportive content</figcaption>
            </figure>
          </div>

          <footer className="elite-archive__footer">
            <div><p>Reference material</p><strong>Innovision 2025</strong><span>Original event document and technical project-expo material.</span></div>
            <a href={innovision2025Pdf} target="_blank" rel="noreferrer">Open event document <i aria-hidden="true">↗</i></a>
          </footer>
        </section>
      </div>
      {activeInsight && <div className="leadership-insight-modal" role="dialog" aria-modal="true" aria-labelledby="leadership-insight-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveInsight(null) }}>
        {activeInsight === 'college' ? <div className="leadership-insight-modal__panel" style={{ '--insight-accent': '#c7ef66' }}>
          <button className="leadership-insight-modal__close" type="button" aria-label="Close the Rajalakshmi Engineering College detail" onClick={() => setActiveInsight(null)}><i /><i /></button>
          <p>MY FOUNDATION</p>
          <h3 id="leadership-insight-title">Learning where<br /><em>leadership lives.</em></h3>
          <span>Rajalakshmi Engineering College is my college, where I studied B.Tech in Information Technology. REC gave me the room to build, lead, and learn by doing — through technical projects, student communities, events, and the people who showed me what responsibility can look like.</span>
          <strong>“A college becomes a launchpad when people trust you to try.”</strong>
        </div> : <div className="leadership-insight-modal__panel" style={{ '--insight-accent': '#82dce7' }}>
          <button className="leadership-insight-modal__close" type="button" aria-label="Close the meaning of people" onClick={() => setActiveInsight(null)}><i /><i /></button>
          <p>WHY PEOPLE?</p>
          <h3 id="leadership-insight-title">People make<br /><em>the journey.</em></h3>
          <span>People are the living part of every chapter: the ones who teach, steady, challenge, and make room for us to grow. Harish and Nouman gave me direction when I was new to ELITE; Dinesh, Kathiyan, and Vaitheswaran turned the work into a real team effort. Their support made leadership feel shared, never lonely.</span>
          <strong>“No one grows alone — we become more capable in the company of people who believe in us.”</strong>
        </div>}
      </div>}
    </section>
  )
}

function LeadershipCommunity({ isExiting, onLeadershipSelect, chapters }) {
  return (
    <section className={isExiting ? 'leadership-community leadership-community--exiting' : 'leadership-community'} id="leadership" aria-labelledby="leadership-title">
      <div className="leadership-community__inner">
        <header className="leadership-community__header">
          <p>06 · Leadership & community</p>
          <h2>Make room for<br /><em>other people.</em></h2>
          <span>The chapters where taking initiative meant bringing people together, sharing what I know, and building something useful beyond myself.</span>
        </header>
        <div className={`leadership-community__grid leadership-community__grid--${chapters.length}`}>
          {chapters.map((chapter) => (
            <article key={chapter.title} className="leadership-card" style={{ '--leadership-accent': chapter.accent }}>
              <div className={`leadership-card__visual${chapter.visual ? ' leadership-card__visual--image' : ''}${chapter.visualVariant ? ` leadership-card__visual--${chapter.visualVariant}` : ''}`} aria-label={chapter.visualAlt || 'Reserved photo space'}>{chapter.visual ? <img src={chapter.visual} alt={chapter.visualAlt} /> : <><span>PHOTO SPACE</span><b aria-hidden="true">✦</b></>}</div>
              <div className="leadership-card__meta"><span>{chapter.number}</span><i>{chapter.role}</i></div>
              <h3>{chapter.title}</h3>
              <p>{chapter.copy}</p>
              <div className="leadership-card__tags">{chapter.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {chapter.slug && <a className="leadership-card__open" href={`/leadership/${chapter.slug}`} onClick={(event) => onLeadershipSelect(event, chapter.slug)}>Open chapter <i aria-hidden="true">↗</i></a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection({ isExiting }) {
  return (
    <section className={isExiting ? 'about-section about-section--exiting' : 'about-section'} id="about" aria-labelledby="about-heading">
      <div className="about-section__inner">
        <div className="about-section__copy">
          <p className="about-section__eyebrow">07 · About me / still learning</p>
          <h2 id="about-heading">I am still figuring it out,<br />but I care <em>deeply.</em></h2>
          <p>I am Seshadhri — an IT graduate who got pulled into AI, design, and building things with people. I like learning out loud, taking ideas apart, and turning the useful ones into something real.</p>
          <p>The parts of this portfolio that matter most are not just the projects. They are the school walls we painted with Volunteers of India, the dogs we helped meet new families, the teams I grew with at ELITE, and every small “let’s try it” that became something real.</p>
          <div className="about-section__signals" aria-label="What guides Seshadhri">
            <article><span>NOW</span><strong>Learning how to take AI ideas from an interesting thought to a dependable product.</strong></article>
            <article><span>NEXT</span><strong>Finding the right team to build with, learn from, and contribute to for real.</strong></article>
            <article><span>ALWAYS</span><strong>Keeping the work human — useful, curious, and considerate of the people it touches.</strong></article>
          </div>
        </div>
        <figure className="about-section__portrait">
          <img src={aboutPortrait} alt="Seshadhri taking a mirror selfie" />
          <figcaption>One person, a lot of curiosity, and usually too many tabs open.</figcaption>
        </figure>
      </div>
    </section>
  )
}

function ContactSection({ isExiting }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setStatus('Sending your message…')

    const submission = new FormData()
    submission.append('name', form.name)
    submission.append('email', form.email)
    submission.append('message', form.message)
    submission.append('_subject', `Portfolio enquiry from ${form.name}`)
    submission.append('_replyto', form.email)

    try {
      const response = await fetch('https://formsubmit.co/ajax/seshadhriofficial@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: submission,
      })

      if (!response.ok) throw new Error('Message could not be sent')

      setForm({ name: '', email: '', message: '' })
      setStatus('Message sent — thank you. I’ll get back to you soon.')
    } catch {
      setStatus('Something went wrong. Please try again or email me directly.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className={isExiting ? 'contact-section contact-section--exiting' : 'contact-section'} id="contact" aria-labelledby="contact-heading">
      <span className="contact-section__orb contact-section__orb--one" aria-hidden="true" />
      <span className="contact-section__orb contact-section__orb--two" aria-hidden="true" />
      <div className="contact-section__inner">
        <div className="contact-section__intro">
          <p className="contact-section__eyebrow">08 · Contact / say hello</p>
          <h2 id="contact-heading">Let’s make<br /><em>something useful.</em></h2>
          <p>Have a project, a collaboration, or an idea you want to unpack? Leave me a note. I read every message that lands in my inbox.</p>
          <a className="contact-section__email" href="mailto:seshadhriofficial@gmail.com">seshadhriofficial@gmail.com <i aria-hidden="true">↗</i></a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__field">
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} autoComplete="name" required />
          </div>
          <div className="contact-form__field">
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} autoComplete="email" required />
          </div>
          <div className="contact-form__field contact-form__field--message">
            <label htmlFor="contact-message">What is on your mind?</label>
            <textarea id="contact-message" name="message" rows="5" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required />
          </div>
          <button className="contact-form__submit" type="submit" disabled={isSending}>
            {isSending ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span>
          </button>
          <p className="contact-form__note">Your message is sent directly and stays right here.</p>
          <p className="contact-form__status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a className="site-footer__signature" href="#home" aria-label="Back to the top of the portfolio">SESHADHRI M<span>.</span></a>
        <p>Building useful things with intelligence, intention, and people in mind.</p>
        <div className="site-footer__links" aria-label="Footer navigation">
          <a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#leadership">Leadership</a><a href="#about">About</a><a href="#contact">Contact</a><a href="/admin">Admin</a>
        </div>
        <div className="site-footer__socials" aria-label="Social profiles">
          {socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<i aria-hidden="true">↗</i></a>)}
        </div>
        <small>© {new Date().getFullYear()} Seshadhri M. · Chennai, India</small>
      </div>
    </footer>
  )
}

const easyEditorFields = {
  chits: [
    { key: 'quote', label: 'Quote', multiline: true },
    { key: 'attribution', label: 'Who said it / source' },
    { key: 'note', label: 'Why it belongs here', multiline: true },
    { key: 'sourceUrl', label: 'Source link', type: 'url' },
  ],
  reels: [
    { key: 'title', label: 'Reel title' },
    { key: 'creator', label: 'Creator' },
    { key: 'description', label: 'Description', multiline: true },
    { key: 'videoUrl', label: 'Direct video link (optional)', type: 'url', help: 'Use a direct .mp4 or .webm file URL, not an Instagram, YouTube, or TikTok page. To upload a file, use the video uploader below.' },
    { key: 'thumbnailUrl', label: 'Thumbnail image link', type: 'url' },
  ],
  research: [
    { key: 'title', label: 'Research paper title' },
    { key: 'topic', label: 'Topic' },
    { key: 'date', label: 'Published date' },
    { key: 'readTime', label: 'Reading time' },
    { key: 'excerpt', label: 'Slider description', multiline: true },
    { key: 'thesis', label: 'Full-page main thought', multiline: true },
    { key: 'body', label: 'Full-page article text', multiline: true, help: 'This becomes the first reading section on the new research page.' },
    { key: 'cover', label: 'Cover image link', type: 'url' },
    { key: 'coverAlt', label: 'Cover image description' },
  ],
  courses: [
    { key: 'courseNumber', label: 'Course number' },
    { key: 'title', label: 'Course name' },
    { key: 'provider', label: 'Course author' },
    { key: 'completed', label: 'Course issue date' },
    { key: 'length', label: 'Course length / grade' },
    { key: 'overview', label: 'Course description', multiline: true },
    { key: 'focus', label: 'Skills shown on the course page', list: true, help: 'Separate each skill with a comma.' },
    { key: 'lessons', label: 'Course-page lessons', list: true, multiline: true, help: 'Use one lesson per line.' },
    { key: 'certificate', label: 'Certificate link', type: 'url', help: 'Paste an image or PDF link, or upload the file below.' },
    { key: 'accent', label: 'Accent colour', type: 'color' },
  ],
  projects: [
    { key: 'slug', label: 'Project page address', help: 'Use short lowercase words with hyphens, for example my-new-project.' },
    { key: 'title', label: 'Project name' },
    { key: 'category', label: 'Category' },
    { key: 'status', label: 'Short label' },
    { key: 'summary', label: 'Description', multiline: true },
    { key: 'headline', label: 'Project headline', multiline: true },
    { key: 'overview', label: 'Full overview', multiline: true },
    { key: 'problem', label: 'Problem to solve', multiline: true },
    { key: 'outcome', label: 'Outcome', multiline: true },
    { key: 'role', label: 'Your role' },
    { key: 'year', label: 'Year' },
    { key: 'tools', label: 'Tools used', list: true, help: 'Separate each tool with a comma.' },
    { key: 'highlights', label: 'Project highlights', list: true, multiline: true, help: 'Use one highlight per line.' },
    { key: 'accent', label: 'Accent colour', type: 'color' },
  ],
  experience: [
    { key: 'organisation', label: 'Organisation' },
    { key: 'kind', label: 'Experience type' },
    { key: 'role', label: 'Your role' },
    { key: 'period', label: 'Date range' },
    { key: 'copy', label: 'Card description', multiline: true },
    { key: 'overview', label: 'Full-page description', multiline: true },
    { key: 'location', label: 'Location' },
    { key: 'visual', label: 'Logo or image link', type: 'url' },
    { key: 'skills', label: 'Skills', list: true, help: 'Separate each skill with a comma.' },
    { key: 'lessons', label: 'Full-page lessons', list: true, multiline: true, help: 'Use one lesson per line.' },
  ],
  leadership: [
    { key: 'number', label: 'Section number' },
    { key: 'title', label: 'Chapter title' },
    { key: 'role', label: 'Your role' },
    { key: 'period', label: 'Date range' },
    { key: 'copy', label: 'Description', multiline: true },
    { key: 'visual', label: 'Main image link', type: 'url' },
    { key: 'tags', label: 'Tags', list: true, help: 'Separate each tag with a comma.' },
    { key: 'accent', label: 'Accent colour', type: 'color' },
  ],
  characters: [
    { key: 'name', label: 'Character name' },
    { key: 'source', label: 'Film, show, or anime' },
    { key: 'marker', label: 'Two-letter marker' },
    { key: 'summary', label: 'Character summary', multiline: true },
    { key: 'lens', label: 'What I notice', multiline: true },
    { key: 'takeaway', label: 'What I carry', multiline: true },
    { key: 'context', label: 'Why this character stays with me', multiline: true },
    { key: 'motivation', label: 'What motivates me about them', multiline: true },
    { key: 'learning', label: 'What I learned from them', multiline: true },
    { key: 'traits', label: 'Character traits', list: true, help: 'Separate each trait with a comma.' },
    { key: 'image', label: 'Character image link', type: 'url' },
    { key: 'gallery', label: 'Additional character image links', list: true, help: 'Separate each image link with a comma. These fill the extra visual frames on the detail page.' },
    { key: 'imageSource', label: 'Image credit' },
    { key: 'imageSourceUrl', label: 'Image credit link', type: 'url' },
    { key: 'accent', label: 'Accent colour', type: 'color' },
  ],
}

const imageUploadSettings = {
  reels: { key: 'thumbnailUrl', label: 'Upload reel thumbnail', help: 'Optional when the video already has a strong first frame.' },
  research: { key: 'cover', label: 'Upload research cover image', help: 'This fills the visual frame on the research detail page.' },
  courses: { key: 'certificate', label: 'Upload course certificate', help: 'Images display in the certificate frame; PDFs open from the course page.' },
  experience: { key: 'visual', label: 'Upload experience image', help: 'This fills the experience card frame.' },
  leadership: { key: 'visual', label: 'Upload chapter image', help: 'This fills the community chapter frame.' },
  characters: { key: 'image', label: 'Upload character image', help: 'This fills the character frame on PLAY and on its detail page.' },
}

const getEasyEditorItemName = (item, key, index) => {
  if (key === 'chits') return item.attribution || `Quote ${index + 1}`
  if (key === 'courses') return `${getCourseNumber(item, index)} · ${item.title || 'Untitled course'}`
  if (key === 'experience') return item.organisation || item.title || `Experience ${index + 1}`
  return item.title || item.name || `Untitled item ${index + 1}`
}

function EasyCollectionEditor({ activeKey, activeCollection, items, onItemsChange, onNotice }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [draftItems, setDraftItems] = useState(items)
  const fields = easyEditorFields[activeKey] || []
  const activeItem = draftItems[activeIndex]
  const imageUpload = imageUploadSettings[activeKey]

  useEffect(() => {
    setDraftItems(items)
    setActiveIndex((index) => Math.max(0, Math.min(index, Math.max(0, items.length - 1))))
  }, [activeKey, items])

  const updateItem = (field, value) => {
    setDraftItems((currentItems) => currentItems.map((item, index) => index === activeIndex ? { ...item, [field]: value } : item))
  }

  const addItem = () => {
    const nextItems = [...draftItems, getStarterItem(activeKey)]
    setDraftItems(nextItems)
    setActiveIndex(nextItems.length - 1)
    onNotice(`New ${activeCollection.shortLabel.toLowerCase()} item added. Select Save changes when you are ready to publish it.`)
  }

  const deleteItem = () => {
    const nextItems = draftItems.filter((_, index) => index !== activeIndex)
    setDraftItems(nextItems)
    setActiveIndex(Math.max(0, activeIndex - 1))
    onNotice(`Item removed from this draft. Select Save changes to apply the removal.`)
  }

  const saveItems = () => {
    onItemsChange(draftItems)
    onNotice(`Saved ${draftItems.length} ${activeCollection.shortLabel.toLowerCase()} item${draftItems.length === 1 ? '' : 's'}.`)
  }

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const nextItems = draftItems.map((item, index) => index === activeIndex ? {
        ...item,
        [imageUpload.key]: reader.result,
        ...(activeKey === 'courses' ? { certificateType: file.type === 'application/pdf' ? 'pdf' : 'image' } : {}),
      } : item)
      setDraftItems(nextItems)
      onNotice(`${file.name} is attached to this draft. Select Save changes to publish it.`)
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  const handleVideoUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('video/')) {
      onNotice('Please choose a video file.')
      event.target.value = ''
      return
    }
    try {
      onNotice(`Saving ${file.name} locally…`)
      const videoAssetId = await storeVideoAsset(file)
      const generatedThumbnail = activeItem.thumbnailUrl ? '' : await createVideoThumbnail(file)
      const nextItems = draftItems.map((item, index) => index === activeIndex ? { ...item, videoAssetId, videoUrl: '', ...(generatedThumbnail ? { thumbnailUrl: generatedThumbnail } : {}) } : item)
      setDraftItems(nextItems)
      onItemsChange(nextItems)
      onNotice(`${file.name} has been saved to the reel shelf. ${generatedThumbnail ? 'A thumbnail was taken from the video automatically. ' : ''}Use Save changes for any other text edits you make.`)
    } catch (error) {
      onNotice(`Video upload could not finish: ${error.message}`)
    } finally {
      event.target.value = ''
    }
  }

  const getFieldValue = (field) => {
    const value = activeItem?.[field.key]
    if (!field.list) return value ?? ''
    return Array.isArray(value) ? value.join(field.multiline ? '\n' : ', ') : value ?? ''
  }

  const updateField = (field, value) => {
    if (!field.list) {
      updateItem(field.key, value)
      return
    }
    updateItem(field.key, value.split(field.multiline ? '\n' : ',').map((entry) => entry.trim()).filter(Boolean))
  }

  return (
    <div className="admin-easy-editor">
      <aside className="admin-easy-editor__items" aria-label={`${activeCollection.label} items`}>
        <div><p>{activeCollection.shortLabel} library</p><button type="button" onClick={addItem}>+ Add new</button></div>
        <div className="admin-easy-editor__scroll-list">
          {draftItems.map((item, index) => <button type="button" key={item.id || item.slug || `${item.title}-${index}`} className={index === activeIndex ? 'admin-easy-editor__item admin-easy-editor__item--active' : 'admin-easy-editor__item'} onClick={() => setActiveIndex(index)}><small>{String(index + 1).padStart(2, '0')}</small><span>{getEasyEditorItemName(item, activeKey, index)}</span></button>)}
          {!draftItems.length && <p className="admin-easy-editor__empty">Nothing here yet. Add the first one.</p>}
        </div>
      </aside>

      <form className="admin-easy-editor__form" onSubmit={(event) => event.preventDefault()}>
        {activeItem ? <>
          <header><p>Basic settings</p><h2>{getEasyEditorItemName(activeItem, activeKey, activeIndex)}</h2><span>Make your edits, then use Save changes when this entry is ready to go live.</span></header>
          <div className="admin-easy-editor__fields">
            {fields.map((field) => <label key={field.key} className={field.multiline ? 'admin-easy-editor__field admin-easy-editor__field--wide' : 'admin-easy-editor__field'}>
              <span>{field.label}</span>
              {field.multiline ? <textarea value={getFieldValue(field)} onChange={(event) => updateField(field, event.target.value)} /> : <input type={field.type || 'text'} value={getFieldValue(field)} onChange={(event) => updateField(field, event.target.value)} />}
              {field.help && <small>{field.help}</small>}
            </label>)}
            {imageUpload && <label className="admin-easy-editor__field admin-easy-editor__field--wide admin-easy-editor__upload">
              <span>{imageUpload.label}</span>
              <input type="file" accept={activeKey === 'courses' ? 'image/*,application/pdf' : 'image/*'} onChange={handleImageUpload} />
              <small>{imageUpload.help}</small>
            </label>}
            {activeKey === 'reels' && <label className="admin-easy-editor__field admin-easy-editor__field--wide admin-easy-editor__upload">
              <span>Upload reel video</span>
              <input type="file" accept="video/*" onChange={handleVideoUpload} />
              <small>Videos are stored in this browser, not squeezed into your content settings. Uploaded video replaces a direct video link for this reel.</small>
            </label>}
          </div>
          <div className="admin-easy-editor__actions"><button className="admin-easy-editor__save" type="button" onClick={saveItems}>Save changes</button><button type="button" onClick={addItem}>Add another item</button>{activeKey === 'reels' && activeItem.videoAssetId && <button type="button" onClick={() => updateItem('videoAssetId', '')}>Remove uploaded video</button>}<button type="button" onClick={deleteItem}>Delete this item</button></div>
        </> : <div className="admin-easy-editor__blank"><p>{activeCollection.label} is empty.</p><button type="button" onClick={addItem}>Create the first item</button></div>}
      </form>
    </div>
  )
}

function ResumePage({ onBack }) {
  return <section className="resume-page" aria-labelledby="resume-page-title">
    <div className="resume-page__grain" aria-hidden="true" />
    <div className="resume-page__inner">
      <header className="resume-page__hero">
        <a className="resume-page__back" href="/#home" onClick={onBack}>← Back to portfolio</a>
        <p className="resume-page__eyebrow">Curriculum vitae · 2026</p>
        <div className="resume-page__hero-grid">
          <div>
            <h1 id="resume-page-title">Seshadhri <em>Murugavel.</em></h1>
            <p className="resume-page__lede">A focused view of the work, ideas and communities that have shaped my path so far.</p>
          </div>
          <div className="resume-page__actions">
            <a className="resume-page__download" href={resumePdf} download="Seshadhri-Murugavel-Resume.pdf">Download resume <ArrowIcon /></a>
            <a className="resume-page__view" href={resumePdf} target="_blank" rel="noreferrer">Open PDF ↗</a>
          </div>
        </div>
      </header>

      <div className="resume-page__overview" aria-label="Professional snapshot">
        <article><span>01</span><h2>Technology</h2><p>AI, IoT and web experiences shaped around practical human needs.</p></article>
        <article><span>02</span><h2>Delivery</h2><p>Product-focused builds, visual storytelling and campaigns that bring the details together.</p></article>
        <article><span>03</span><h2>Community</h2><p>Leadership, events and creative work built with teams and a sense of shared momentum.</p></article>
      </div>

      <section className="resume-page__document" aria-labelledby="resume-document-title">
        <div className="resume-page__document-heading">
          <div><p className="resume-page__eyebrow">The complete document</p><h2 id="resume-document-title">Professional resume</h2></div>
          <p>A complete record of experience, selected work, education and leadership.</p>
        </div>
        <div className="resume-page__pdf-frame">
          <object data={resumePdf} type="application/pdf" aria-label="Seshadhri Murugavel professional resume">
            <p>Your browser cannot display the PDF here. <a href={resumePdf} download="Seshadhri-Murugavel-Resume.pdf">Download the resume instead.</a></p>
          </object>
        </div>
      </section>
    </div>
  </section>
}

function AdminPage({ content, onChange }) {
  const [activeKey, setActiveKey] = useState('chits')
  const [editorMode, setEditorMode] = useState('easy')
  const [draft, setDraft] = useState(() => JSON.stringify(content.chits, null, 2))
  const [status, setStatus] = useState('Choose a collection, edit its details, then save it locally.')
  const activeCollection = adminCollections.find((collection) => collection.key === activeKey)

  useEffect(() => {
    setDraft(JSON.stringify(content[activeKey], null, 2))
    setStatus(`${activeCollection?.shortLabel || 'Collection'} is ready to edit.`)
  }, [activeKey, activeCollection?.shortLabel])

  useEffect(() => {
    if (editorMode === 'code') setDraft(JSON.stringify(content[activeKey], null, 2))
  }, [editorMode, activeKey, content])

  const readDraft = () => {
    const parsed = JSON.parse(draft)
    if (!Array.isArray(parsed)) throw new Error('Each collection must be a list. Keep the square brackets around the items.')
    return parsed
  }

  const saveDraft = () => {
    try {
      const nextItems = readDraft()
      onChange((current) => ({ ...current, [activeKey]: nextItems }))
      setStatus(`Saved ${nextItems.length} ${activeCollection.shortLabel.toLowerCase()} item${nextItems.length === 1 ? '' : 's'} in this browser.`)
    } catch (error) {
      setStatus(`Could not save: ${error.message}`)
    }
  }

  const addItem = () => {
    try {
      const nextItems = [...readDraft(), getStarterItem(activeKey)]
      setDraft(JSON.stringify(nextItems, null, 2))
      setStatus('A blank starter has been added. Fill it in, then save your changes.')
    } catch (error) {
      setStatus(`Could not add an item: ${error.message}`)
    }
  }

  const restoreCollection = () => {
    setDraft(JSON.stringify(defaultPortfolioContent[activeKey], null, 2))
    setStatus('The original content is back in the editor. Save it to apply the restore.')
  }

  const exportContent = () => {
    const file = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'seshadhri-portfolio-content.json'
    link.click()
    URL.revokeObjectURL(url)
    setStatus('A backup of your current content has been downloaded.')
  }

  const updateEasyItems = (nextItems) => {
    onChange((current) => ({ ...current, [activeKey]: nextItems }))
  }

  return (
    <main className="admin-page" aria-labelledby="admin-title">
      <div className="admin-page__inner">
        <header className="admin-page__header">
          <a className="admin-page__back" href="/">← Back to the portfolio</a>
          <p>Portfolio editor / local workspace</p>
          <h1 id="admin-title">Make the portfolio<br /><em>yours, anytime.</em></h1>
          <span>Choose a simple, guided editor for day-to-day updates, or open the code editor when you want complete control. Everything saves only in this browser, so download a backup whenever you make a meaningful change.</span>
        </header>

        <div className="admin-page__mode-switch" role="tablist" aria-label="Choose how to edit the portfolio">
          <button type="button" role="tab" aria-selected={editorMode === 'easy'} className={editorMode === 'easy' ? 'admin-page__mode admin-page__mode--active' : 'admin-page__mode'} onClick={() => setEditorMode('easy')}><b>Easy customiser</b><span>No coding needed</span></button>
          <button type="button" role="tab" aria-selected={editorMode === 'code'} className={editorMode === 'code' ? 'admin-page__mode admin-page__mode--active' : 'admin-page__mode'} onClick={() => setEditorMode('code')}><b>Code editor</b><span>Advanced JSON controls</span></button>
        </div>

        <section className="admin-page__workspace" aria-label="Portfolio content editor">
          <aside className="admin-page__collections">
            {adminCollections.map((collection) => <button key={collection.key} type="button" className={collection.key === activeKey ? 'admin-page__collection admin-page__collection--active' : 'admin-page__collection'} onClick={() => setActiveKey(collection.key)}><small>{collection.shortLabel}</small><strong>{collection.label}</strong></button>)}
          </aside>
          {editorMode === 'easy' ? <EasyCollectionEditor activeKey={activeKey} activeCollection={activeCollection} items={content[activeKey]} onItemsChange={updateEasyItems} onNotice={setStatus} /> : <div className="admin-page__editor">
            <header><p>{activeCollection.label}</p><span>{activeCollection.description}</span></header>
            <textarea aria-label={`Edit ${activeCollection.label}`} value={draft} onChange={(event) => setDraft(event.target.value)} spellCheck="false" />
            <div className="admin-page__actions">
              <button type="button" className="admin-page__save" onClick={saveDraft}>Save changes <i aria-hidden="true">↗</i></button>
              <button type="button" onClick={addItem}>Add a blank item</button>
              <button type="button" onClick={restoreCollection}>Restore original</button>
              <button type="button" onClick={exportContent}>Download backup</button>
            </div>
            <p className="admin-page__status" aria-live="polite">{status}</p>
          </div>}
        </section>

        {editorMode === 'easy' && <p className="admin-page__status admin-page__status--easy" aria-live="polite">{status}</p>}

        <section className="admin-page__guide">
          <p>How it works</p>
          <div><span>01</span><p>Use Easy customiser for clear fields, uploads, and instant local updates.</p></div>
          <div><span>02</span><p>Use Code editor when you want to change advanced details or paste a complete collection.</p></div>
          <div><span>03</span><p>Download a backup before moving to another device or clearing browser data.</p></div>
        </section>
      </div>
    </main>
  )
}

function PersonalStoryPage({ onCharacterSelect, characters, onBackToLight }) {
  return (
    <article className="play-page" aria-label="Seshadhri's personal story">
      <div className="play-page__paper-grid" aria-hidden="true" />
      <div className="play-page__orbit play-page__orbit--one" aria-hidden="true" />
      <div className="play-page__orbit play-page__orbit--two" aria-hidden="true" />

      <section className="play-hero" id="story">
        <div className="play-hero__copy">
          <p className="play-kicker">PLAY · THE PERSON BEHIND THE PORTFOLIO</p>
          <div className="play-hero__tools">
            <div className="play-hero__signal" aria-label="A note to myself">
              <span>KEEP</span><b>TRYING</b><i>01 / 01</i>
            </div>
            <a className="play-hero__light-back" href="/#home" onClick={onBackToLight}>← Back to light mode</a>
          </div>
          <h1>A winner is someone that loses many times. <em>A person that never loses will never learn to be a better person.</em></h1>
          <p className="play-hero__intro">That thought has stayed with me because it makes failure feel human. Every difficult season, every awkward attempt, and every person who does not understand the dream can still teach us how to become better.</p>
        </div>
        <figure className="play-hero__photo play-hero__photo--sea">
          <img src={playSeashore} alt="Seshadhri looking out at the sea" />
          <figcaption>Learning to keep going, even when the next step is unclear.</figcaption>
        </figure>
      </section>

      <section className="play-story" id="journey">
        <div className="play-story__heading">
          <p className="play-kicker">MY WAY OF MOVING FORWARD</p>
          <h2>I am still becoming <em>Seshadhri.</em></h2>
        </div>
        <div className="play-story__body">
          <p>Everyone carries stories that are not visible from the outside. Mine has had plenty of moments where a dream sounded too big to the people around me. At school, I was made fun of for wanting to become a crazy footballer. In college, some of my programming ideas were treated like they were too much. Even my daily good-morning stories, Instagram reels, and the idea of becoming an influencer have invited opinions.</p>
          <p>But I am grateful I did not stop. I keep believing that I can become something bigger if I give my best, keep learning, and stay consistent when the response is not immediate. I want to make my parents proud, grow professionally, and be known as someone who inspires people through kindness—not just achievements.</p>
        </div>
        <figure className="play-story__photo">
          <img src={playMountain} alt="Seshadhri looking over a mountain valley with his arms open" />
          <figcaption>Big dreams need room to breathe.</figcaption>
        </figure>
      </section>

      <section className="soup-section" id="soup">
        <div className="soup-section__copy">
          <p className="play-kicker">SOUP WITH SESHA</p>
          <h2>Conversations that make the journey feel less lonely.</h2>
          <p>I started <strong>Soup with Sesha</strong> as a simple podcast page because I enjoy hearing what sits behind someone’s work: the false starts, the doubts, the turning points, and the small habits that kept them moving. It is my way of making room for honest stories from people building their own paths.</p>
          <a className="soup-section__playlist" href="https://www.youtube.com/watch?v=xzOvYs3HMiU&list=PLadWSdwmETiiQ4S7X9uT5bvfTw9Z4a-ZB&index=1" target="_blank" rel="noreferrer">Click on this button to see the YouTube playlist <span aria-hidden="true">↗</span></a>
        </div>
        <figure className="soup-section__photo">
          <img src={soupWithSeshaTeam} alt="Seshadhri with three friends at a Soup with Sesha gathering" />
          <figcaption>Four people, many stories, one table.</figcaption>
        </figure>
      </section>

      <section className="inspiration-section" id="screen-lessons" aria-labelledby="inspiration-heading">
        <div className="inspiration-section__header">
          <div>
            <p className="play-kicker">REEL LESSONS, REAL LIFE</p>
            <h2 id="inspiration-heading">Movies and anime keep my imagination switched on.</h2>
          </div>
          <p>I love stories that make a person look again at courage, responsibility, reinvention, and kindness. These characters do that for me.</p>
        </div>
        <CharacterSlider onCharacterSelect={onCharacterSelect} characters={characters} />
      </section>
      <LightStoryFooter />
    </article>
  )
}

function CharacterSlider({ onCharacterSelect, characters }) {
  const railRef = useRef(null)
  const slide = (direction) => railRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' })

  return (
    <div className="character-slider">
      <div className="character-slider__controls" aria-label="Character slider controls">
        <button type="button" onClick={() => slide(-1)} aria-label="Previous characters">←</button>
        <button type="button" onClick={() => slide(1)} aria-label="Next characters">→</button>
      </div>
      <div className="character-slider__rail" ref={railRef}>
        {characters.map((character, index) => (
          <a
            className="character-card"
            href={`/play/characters/${character.slug}`}
            onClick={(event) => onCharacterSelect(event, character.slug)}
            key={character.slug}
            style={{ '--character-accent': character.accent }}
          >
            {getCharacterLeadImage(character) ? <img className="character-card__image" src={getCharacterLeadImage(character)} alt={`${character.name} from ${character.source}`} loading="lazy" referrerPolicy="no-referrer" onError={(event) => { const fallback = getCharacterGallery(character)[0]?.src; if (fallback && !event.currentTarget.dataset.recovered) { event.currentTarget.dataset.recovered = 'true'; event.currentTarget.src = fallback } }} /> : <span className="character-card__image-placeholder">Character<br />visual space</span>}
            <span className="character-card__shade" aria-hidden="true" />
            <span className="character-card__number">0{index + 1}</span>
            <span className="character-card__marker">{character.marker}</span>
            <span className="character-card__source">{character.source}</span>
            <strong>{character.name}</strong>
            <small>{character.takeaway}</small>
            <i>Read character sketch ↗</i>
          </a>
        ))}
      </div>
    </div>
  )
}

function LightStoryFooter() {
  return (
    <footer className="light-story-footer">
      <div className="light-story-footer__mark" aria-hidden="true"><span>PLAY</span><b>↗</b></div>
      <div className="light-story-footer__content">
        <p className="play-kicker">A NOTE FROM THE LIGHT SIDE</p>
        <h2>This page is my reminder to keep the dream loud and the heart kind.</h2>
        <p>It is about the attempts that did not land, the people and stories that keep me curious, and the choice to keep showing up anyway.</p>
      </div>
      <div className="light-story-footer__links">
        <a href="#story">Back to the beginning ↑</a>
        <a href="/#home">View the portfolio ↗</a>
        <small>© {new Date().getFullYear()} Seshadhri M. · Chennai, India</small>
      </div>
    </footer>
  )
}

function getCharacterGallery(character) {
  const customImages = Array.isArray(character.gallery) ? character.gallery.filter(Boolean) : []
  const imageSources = [...new Set(customImages.length ? customImages : (characterGallerySeeds[character.slug] || [character.image]).filter(Boolean))]
  const captions = ['First impression', 'The turning point', 'What stays with me', 'A quiet frame']
  return imageSources.slice(0, 4).map((src, index) => ({ src, caption: captions[index] || 'Character note' }))
}

function getCharacterReflections(character) {
  return {
    why: character.context || character.lens,
    motivation: character.motivation || `${character.lens} That is the energy I want to bring into my own work, even when progress is slow.`,
    learning: character.learning || `${character.takeaway} It is the lesson I keep with me long after the screen goes dark.`,
  }
}

function getCharacterStudy(character, reflections, traits) {
  const firstName = character.name.split(' ')[0].replace(/[“”]/g, '')
  const core = traits[0] || character.takeaway
  return {
    core,
    statement: `${firstName} is a reminder that the qualities we admire in stories can become quiet practices in real life.`,
    arc: `${character.summary} ${reflections.why}`,
    personal: `${reflections.motivation} ${reflections.learning}`,
  }
}

function CharacterDetail({ character, onBack }) {
  const gallery = getCharacterGallery(character)
  const traits = Array.isArray(character.traits) ? character.traits.filter(Boolean) : []
  const reflections = getCharacterReflections(character)
  const study = getCharacterStudy(character, reflections, traits)
  return (
    <article className="character-page character-study" style={{ '--character-accent': character.accent }}>
      <div className="character-study__paper" aria-hidden="true" />
      <div className="character-study__inner">
        <a className="character-study__back" href="/play" onClick={onBack}>← Back to the character shelf</a>

        <header className="character-study__hero">
          <div className="character-study__index"><span>{character.marker}</span><p>CHARACTER STUDY<br />{character.source}</p></div>
          <div className="character-study__headline">
            <p className="play-kicker">A STORY I KEEP RETURNING TO</p>
            <h1>{character.name}</h1>
            <p>{character.summary}</p>
          </div>
          <aside className="character-study__signal"><span>THE CORE SIGNAL</span><strong>{study.core}</strong><i>01 / personal notes</i></aside>
        </header>

        <section className="character-study__portrait" aria-label={`${character.name} at a glance`}>
          <figure className="character-study__image">
            {character.image ? <img src={character.image} alt={`${character.name} from ${character.source}`} referrerPolicy="no-referrer" /> : <span>Image frame reserved for {character.name}</span>}
            {character.imageSourceUrl && <figcaption><a href={character.imageSourceUrl} target="_blank" rel="noreferrer">Image source: {character.imageSource || 'Source'} ↗</a></figcaption>}
          </figure>
          <div className="character-study__portrait-note">
            <p className="play-kicker">WHY THIS CHARACTER MATTERS TO ME</p>
            <h2>{study.statement}</h2>
            <p>{character.lens}</p>
            <div>{(traits.length ? traits : [character.takeaway]).map((trait) => <span key={trait}>{trait}</span>)}</div>
          </div>
        </section>

        <section className="character-study__story" aria-label={`A closer reading of ${character.name}`}>
          <header><p className="play-kicker">THE CLOSER READING</p><h2>Not a hero to copy.<br /><em>A lens to carry.</em></h2></header>
          <div>
            <article><span>THEIR STORY</span><p>{study.arc}</p></article>
            <article><span>THE PART THAT MOTIVATES ME</span><p>{reflections.motivation}</p></article>
            <article><span>HOW IT CHANGES MY OWN APPROACH</span><p>{study.personal}</p></article>
          </div>
        </section>

        <section className="character-study__principles" aria-label={`${character.name} personal principles`}>
          <p className="play-kicker">THREE REMINDERS I TAKE FROM THEM</p>
          <div>
            <article><b>01</b><span>WHAT I NOTICE</span><p>{character.lens}</p></article>
            <article><b>02</b><span>WHAT I ADMIRE</span><p>{reflections.why}</p></article>
            <article><b>03</b><span>WHAT I CARRY</span><p>{character.takeaway}</p></article>
          </div>
        </section>

        <section className="character-study__gallery" aria-label={`${character.name} visual notes`}>
          <header><p className="play-kicker">FRAMES I REVISIT</p><h2>A visual memory<br /><em>of the story.</em></h2></header>
          <div>
            {gallery.length ? gallery.map((frame, index) => <figure key={`${frame.src}-${index}`}>
              <img src={frame.src} alt={`${character.name} — ${frame.caption}`} loading="lazy" referrerPolicy="no-referrer" />
              <figcaption><b>{String(index + 1).padStart(2, '0')}</b>{frame.caption}</figcaption>
            </figure>) : <p className="character-study__empty">Add a few image links from Admin to bring this study to life.</p>}
          </div>
        </section>

        <footer className="character-study__closing"><p>What these characters leave me with</p><strong>“{character.takeaway}”</strong><span>Stories do not hand us a blueprint. They give us language for the values we are still trying to practise.</span></footer>
      </div>
    </article>
  )
}

function CharacterFlowDetail({ character, characters, onCharacterSelect, onBack }) {
  const cinematicVisuals = characterCinematicVisuals[character.slug]
  const displayImage = getCharacterLeadImage(character)
  const gallerySources = [
    ...(cinematicVisuals?.gallery || []),
    ...getCharacterGallery(character).map((frame) => frame.src),
    ...(characterGallerySeeds[character.slug] || []),
  ]
  const gallery = [...new Set(gallerySources)].filter((src) => src && src !== displayImage).slice(0, 3).map((src) => ({ src, caption: 'A frame from the story' }))
  const fallbackNotes = {
    identity: character.summary,
    story: character.context || character.lens,
    noticed: Array.isArray(character.traits) && character.traits.length ? character.traits : [character.lens],
    returnTo: character.lens,
    carry: character.takeaway,
  }
  const notes = characterFlowNotes[character.slug] || fallbackNotes
  const [selectedTrait, setSelectedTrait] = useState(notes.noticed[0])
  const traitDetails = characterTraitDetails[character.slug] || {}
  const selectedTraitDetail = traitDetails[selectedTrait] || `${selectedTrait} is one of the small qualities that makes ${character.name} stay with me.`
  const recoverImage = (event, fallback) => {
    const image = event.currentTarget
    if (!fallback || image.dataset.recovered) return
    image.dataset.recovered = 'true'
    image.src = fallback
  }

  useEffect(() => {
    setSelectedTrait(notes.noticed[0])
  }, [character.slug])

  return (
    <article className="character-page character-flow" style={{ '--character-accent': character.accent }}>
      <div className="character-flow__glow" aria-hidden="true" />
      <div className="character-flow__inner">
        <header className="character-flow__header">
          <a className="character-flow__back" href="/play" onClick={onBack}>← Character shelf</a>
          <p><span>{character.marker}</span> a personal character map · {character.source}</p>
        </header>

        <section className="character-flow__intro">
          <p className="play-kicker">THE CHARACTERS I LOVE</p>
          <h1 className="character-flow__title">{character.name.split(' ').map((word, index) => <span className={'character-flow__title-word character-flow__title-word--' + (index % 3 === 0 ? 'accent' : index % 3 === 1 ? 'accent-soft' : 'ink')} key={word + index}>{word}</span>)}</h1>
          <p>This is not a review. It is a small map of why this character has stayed with me.</p>
        </section>

        <section className="character-flow__map" aria-label={'Personal character map for ' + character.name}>
          <svg className="character-flow__lines" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
            <path d="M272 126 C346 126 369 188 420 223" />
            <path d="M574 223 C642 188 650 127 730 127" />
            <path d="M272 408 C347 408 373 359 420 333" />
            <path d="M574 333 C640 365 651 434 730 434" />
            <path d="M500 475 L500 546" />
          </svg>

          <article className="character-flow__node character-flow__node--identity">
            <span>01 · WHO THEY ARE</span>
            <p>{notes.identity}</p>
          </article>
          <article className="character-flow__node character-flow__node--story">
            <span>02 · THE STORY I LOVE</span>
            <p>{notes.story}</p>
          </article>
          <figure className="character-flow__portrait">
            {displayImage ? <img src={displayImage} alt={character.name + ' from ' + character.source} referrerPolicy="no-referrer" onError={(event) => recoverImage(event, gallery[0]?.src)} /> : <span>Image frame reserved for {character.name}</span>}
          </figure>
          <article className="character-flow__node character-flow__node--notice">
            <span>03 · WHAT I NOTICE</span>
            <div className="character-flow__trait-list" role="list" aria-label={'Things I notice about ' + character.name}>
              {notes.noticed.map((note) => <button className={selectedTrait === note ? 'is-active' : ''} type="button" key={note} onClick={() => setSelectedTrait(note)} aria-pressed={selectedTrait === note}>{note}</button>)}
            </div>
            <p className="character-flow__trait-detail" key={selectedTrait}><b>{selectedTrait}</b>{selectedTraitDetail}</p>
          </article>
          <article className="character-flow__node character-flow__node--return">
            <span>04 · WHY I KEEP COMING BACK</span>
            <p>{notes.returnTo}</p>
          </article>
          <article className="character-flow__node character-flow__node--carry">
            <span>05 · WHAT I CARRY FORWARD</span>
            <p>{notes.carry}</p>
          </article>
        </section>

        <section className="character-flow__frames" aria-label={character.name + ' image selection'}>
          <header><p className="play-kicker">SCENES I KEEP REPLAYING</p><span>A few shots that still stay with me</span></header>
          <div>
            {gallery.length ? gallery.map((frame, index) => <figure key={frame.src + '-' + index}>
              <img src={frame.src} alt={character.name + ' — ' + frame.caption} loading="lazy" referrerPolicy="no-referrer" onError={(event) => recoverImage(event, displayImage || gallery.find((item) => item.src !== frame.src)?.src)} />
            </figure>) : <p>No image frames selected yet.</p>}
          </div>
        </section>

        <footer className="character-flow__closing">
          <p>There is a reason I return to these stories.</p>
          <strong>They make the values I care about easier to remember.</strong>
        </footer>
        <CharacterExploreSlider character={character} characters={characters} onCharacterSelect={onCharacterSelect} />
      </div>
    </article>
  )
}

function CharacterExploreSlider({ character, characters, onCharacterSelect }) {
  const railRef = useRef(null)
  const otherCharacters = characters.filter((item) => item.slug !== character.slug)
  const slide = (direction) => railRef.current?.scrollBy({ left: direction * 310, behavior: 'smooth' })

  if (!otherCharacters.length) return null

  return (
    <section className="character-explore" aria-label="Explore another character">
      <header>
        <div>
          <p className="play-kicker">KEEP EXPLORING</p>
          <h2>Want to explore<br /><em>another character?</em></h2>
        </div>
        <div className="character-explore__controls" aria-label="Explore characters">
          <button type="button" onClick={() => slide(-1)} aria-label="Previous characters">←</button>
          <button type="button" onClick={() => slide(1)} aria-label="Next characters">→</button>
        </div>
      </header>
      <div className="character-explore__rail" ref={railRef}>
        {otherCharacters.map((item) => (
          <a href={`/play/characters/${item.slug}`} onClick={(event) => onCharacterSelect(event, item.slug)} key={item.slug} style={{ '--character-accent': item.accent }}>
            <img src={getCharacterLeadImage(item)} alt={item.name + ' from ' + item.source} loading="lazy" referrerPolicy="no-referrer" onError={(event) => { const fallback = getCharacterGallery(item)[0]?.src; if (fallback && !event.currentTarget.dataset.recovered) { event.currentTarget.dataset.recovered = 'true'; event.currentTarget.src = fallback } }} />
            <span>{item.source}</span>
            <strong>{item.name}</strong>
          </a>
        ))}
      </div>
    </section>
  )
}

function ReelMedia({ reel, videoRef, volume, onPlay, onPause, onEnded, onTimeUpdate, onLoadedMetadata }) {
  const [videoSrc, setVideoSrc] = useState(reel.videoUrl || '')

  useEffect(() => {
    let objectUrl = ''
    let isCurrent = true
    setVideoSrc(reel.videoUrl || '')
    if (!reel.videoAssetId) return undefined

    getVideoAsset(reel.videoAssetId).then((file) => {
      if (!file || !isCurrent) return
      objectUrl = URL.createObjectURL(file)
      setVideoSrc(objectUrl)
    }).catch(() => {
      if (isCurrent) setVideoSrc('')
    })

    return () => {
      isCurrent = false
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [reel.videoAssetId, reel.videoUrl])

  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = volume
  }, [videoRef, videoSrc, volume])

  if (videoSrc) return <video ref={videoRef} src={videoSrc} poster={reel.thumbnailUrl || undefined} playsInline preload="metadata" aria-label={`${reel.title} video`} onPlay={onPlay} onPause={onPause} onEnded={onEnded} onTimeUpdate={onTimeUpdate} onLoadedMetadata={onLoadedMetadata} />
  if (reel.thumbnailUrl) return <img src={reel.thumbnailUrl} alt="" />
  return <span className="reel-card__placeholder">Add a video to start this reel</span>
}

function ShortsReelPreview({ reel }) {
  const previewRef = useRef(null)
  return <ReelMedia reel={reel} videoRef={previewRef} volume={0} />
}

function WatchlistShorts({ reels }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [volume, setVolume] = useState(.32)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [playback, setPlayback] = useState({ current: 0, duration: 0 })
  const [videoAspect, setVideoAspect] = useState('9 / 16')
  const [isLandscapeVideo, setIsLandscapeVideo] = useState(false)
  const railRef = useRef(null)
  const videoRef = useRef(null)
  const audioProfileRef = useRef(null)
  const reel = reels[activeIndex]

  useEffect(() => {
    setActiveIndex((index) => Math.max(0, Math.min(index, reels.length - 1)))
  }, [reels.length])

  useEffect(() => {
    setIsPlaying(false)
    setPlayback({ current: 0, duration: 0 })
    setVideoAspect('9 / 16')
    setIsLandscapeVideo(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [activeIndex])

  useEffect(() => () => {
    audioProfileRef.current?.context?.close().catch(() => {})
  }, [])

  const move = (direction) => setActiveIndex((index) => (index + direction + reels.length) % reels.length)
  const scrollRail = (direction) => railRef.current?.scrollBy({ left: direction * 480, behavior: 'smooth' })
  const applyAudioProfile = async () => {
    const video = videoRef.current
    if (!video) return
    try {
      if (!audioProfileRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext
        if (!AudioContext) return
        const context = new AudioContext()
        const source = context.createMediaElementSource(video)
        const bassFilter = context.createBiquadFilter()
        bassFilter.type = 'lowshelf'
        bassFilter.frequency.value = 180
        bassFilter.gain.value = -8
        source.connect(bassFilter).connect(context.destination)
        audioProfileRef.current = { context, bassFilter }
      }
      await audioProfileRef.current.context.resume()
    } catch {
      // The native volume setting still works if the browser cannot create an audio graph.
    }
  }

  const togglePlayback = async () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      await applyAudioProfile()
      await videoRef.current.play().catch(() => {})
    }
    else videoRef.current.pause()
  }

  const formatTime = (seconds) => {
    const safeSeconds = Number.isFinite(seconds) ? Math.max(0, seconds) : 0
    return `${Math.floor(safeSeconds / 60)}:${String(Math.floor(safeSeconds % 60)).padStart(2, '0')}`
  }

  const updateProgress = () => {
    const video = videoRef.current
    if (video) setPlayback({ current: video.currentTime, duration: video.duration })
  }

  const handleLoadedMetadata = (event) => {
    const video = event.currentTarget
    setPlayback({ current: video.currentTime, duration: video.duration })
    if (video.videoWidth && video.videoHeight) {
      setVideoAspect(`${video.videoWidth} / ${video.videoHeight}`)
      setIsLandscapeVideo(video.videoWidth / video.videoHeight > 1.08)
    }
  }

  const seek = (event) => {
    if (!videoRef.current || !playback.duration) return
    videoRef.current.currentTime = Number(event.target.value)
    setPlayback((current) => ({ ...current, current: Number(event.target.value) }))
  }

  const closePlayer = () => {
    videoRef.current?.pause()
    setIsPlayerOpen(false)
  }

  if (!reel) return null

  return (
    <section className="watchlist-shorts" aria-label="On repeat clips">
      <header className="watchlist-shorts__header"><strong><i aria-hidden="true">✦</i> On repeat</strong>{reels.length > 4 && <div><button type="button" onClick={() => scrollRail(-1)} aria-label="Previous reels">←</button><button type="button" onClick={() => scrollRail(1)} aria-label="Next reels">→</button></div>}</header>
      <div className="watchlist-shorts__rail" ref={railRef}>
        {reels.map((item, index) => <article className="watchlist-short" key={item.id || `${item.title}-${index}`}>
          <button type="button" className="watchlist-short__open" onClick={() => { setActiveIndex(index); setIsPlayerOpen(true) }} aria-label={`Open ${item.title}`}>
            <span className="watchlist-short__new">New</span>
            <span className="watchlist-short__visual"><ShortsReelPreview reel={item} /></span>
          </button>
          <div className="watchlist-short__details"><h3>{item.title}</h3><p>{item.creator || 'Personal pick'}</p><button type="button" onClick={() => { setActiveIndex(index); setIsPlayerOpen(true) }} aria-label={`More options for ${item.title}`}>⋮</button></div>
        </article>)}
      </div>

      {isPlayerOpen && <div className="watchlist-player" role="dialog" aria-modal="true" aria-label={`Playing ${reel.title}`} onMouseDown={(event) => { if (event.target === event.currentTarget) closePlayer() }}>
        <div className={`watchlist-player__panel${isLandscapeVideo ? ' watchlist-player__panel--landscape' : ''}`}>
          <button type="button" className="watchlist-player__close" onClick={closePlayer} aria-label="Close player">×</button>
          <div
            className="watchlist-player__stage"
            style={isLandscapeVideo
              ? { aspectRatio: videoAspect, height: 'min(40svh, 300px)', width: 'auto', maxWidth: '100%' }
              : { aspectRatio: videoAspect }}
          ><ReelMedia reel={reel} videoRef={videoRef} volume={volume} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)} onTimeUpdate={updateProgress} onLoadedMetadata={handleLoadedMetadata} /></div>
          <div className="watchlist-player__info">
            <p>{reel.creator}</p><h3>{reel.title}</h3><span>{reel.description}</span>
            <div className="watchlist-player__controls">
              <div className="watchlist-player__transport">
                <button type="button" onClick={() => move(-1)} aria-label="Previous reel">⏮</button>
                <button type="button" className="watchlist-player__primary" onClick={togglePlayback} aria-label={isPlaying ? 'Pause reel' : 'Play reel'} disabled={!(reel.videoUrl || reel.videoAssetId)}>{isPlaying ? 'Ⅱ' : '▶'}</button>
                <button type="button" onClick={() => move(1)} aria-label="Next reel">⏭</button>
              </div>
              <label className="watchlist-player__timeline"><span>{formatTime(playback.current)}</span><input type="range" min="0" max={playback.duration || 0} step="0.1" value={Math.min(playback.current, playback.duration || 0)} onChange={seek} aria-label="Reel progress" /><span>{formatTime(playback.duration)}</span></label>
              <label className="watchlist-player__volume"><span>Volume</span><input type="range" min="0" max="0.6" step="0.01" value={volume} onChange={(event) => setVolume(Number(event.target.value))} aria-label="Reel volume" /></label>
            </div>
          </div>
        </div>
      </div>}
    </section>
  )
}

function LightModeHome({ isRevealed, isExiting, onPlay, chits, reels }) {
  return (
    <div className="light-home">
      <LightIntro isRevealed={isRevealed} isExiting={isExiting} onPlay={onPlay} />
      <LightInspirationHub chits={chits} reels={reels} />
      <LightHomeFooter />
    </div>
  )
}

function LightInspirationHub({ chits, reels }) {
  const [activeChit, setActiveChit] = useState(null)
  const [drawCount, setDrawCount] = useState(0)

  const drawChit = () => {
    setActiveChit((currentChit) => {
      if (!chits.length) return null
      let nextIndex = Math.floor(Math.random() * chits.length)
      if (currentChit && chits.length > 1 && chits[nextIndex].id === currentChit.id) {
        nextIndex = (nextIndex + 1) % chits.length
      }
      return chits[nextIndex]
    })
    setDrawCount((count) => count + 1)
  }

  return (
    <section className="inspiration-hub" id="light-inspiration" aria-labelledby="inspiration-title">
      <div className="inspiration-hub__halo inspiration-hub__halo--one" aria-hidden="true" />
      <div className="inspiration-hub__halo inspiration-hub__halo--two" aria-hidden="true" />
      <div className="inspiration-hub__inner">
        <header className="inspiration-hub__heading">
          <p className="inspiration-hub__eyebrow">Pocket reminders / 01</p>
          <h2 id="inspiration-title">A little machine for <em>the days that need a nudge.</em></h2>
          <div className="inspiration-hub__heading-copy">
            <p>These are lines I keep returning to when the goal feels far away. Pull one for yourself — maybe it lands at exactly the right time.</p>
            <p>Think of this as a tiny pause between the tabs: a thought to act on, keep close, or send to someone who needs it.</p>
            <span>New notes are always joining the machine.</span>
          </div>
        </header>

        <div className="quote-machine" aria-label="Interactive motivation chit machine">
          <div className="quote-machine__topline"><span>SESHADHRI'S</span><b>CHIT / MACHINE</b><i>ON</i></div>
          <div className="quote-machine__face">
            <span className="quote-machine__dial quote-machine__dial--one" aria-hidden="true" />
            <span className="quote-machine__dial quote-machine__dial--two" aria-hidden="true" />
            <span className="quote-machine__spark quote-machine__spark--one" aria-hidden="true">✦</span>
            <span className="quote-machine__spark quote-machine__spark--two" aria-hidden="true">✳</span>
            <div className="quote-machine__window" aria-live="polite">
              {activeChit ? <>
                <p key={`${activeChit.id}-${drawCount}`} className="quote-machine__quote">“{activeChit.quote}”</p>
                <span>{activeChit.attribution}</span>
                {activeChit.sourceUrl && <a href={activeChit.sourceUrl} target="_blank" rel="noreferrer">Read the source ↗</a>}
              </> : <p className="quote-machine__quote quote-machine__quote--prompt">Click on the button to roll your chit</p>}
            </div>
            {activeChit && <p className="quote-machine__note">{activeChit.note}</p>}
          </div>
          <div className="quote-machine__controls">
            <button type="button" className="quote-machine__button" onClick={drawChit} disabled={!chits.length}>
              <span>Roll a chit</span><b aria-hidden="true">↗</b>
            </button>
            <small>{drawCount === 0 ? 'A random reminder is waiting inside.' : `${drawCount} ${drawCount === 1 ? 'chit' : 'chits'} drawn. Keep one close.`}</small>
          </div>
        </div>

        {reels.length > 0 && <section className="reel-shelf" id="light-reels" aria-labelledby="reel-shelf-title">
          <header className="reel-shelf__intro">
            <p>ON REPEAT / 02</p>
            <h2 id="reel-shelf-title">Clips worth <em>keeping close.</em></h2>
            <span>Short ideas, stories, and lessons I return to when I need a different perspective. Pick any card to play it, then move through the shelf at your own pace.</span>
          </header>
          <WatchlistShorts reels={reels} />
          <p className="reel-shelf__admin-note">This shelf is intentionally personal: only the clips I choose to keep will live here.</p>
        </section>}
      </div>
    </section>
  )
}

function LightHomeFooter() {
  return (
    <footer className="light-home-footer" id="light-home-footer">
      <div className="light-home-footer__inner">
        <a className="light-home-footer__signature" href="#home" aria-label="Back to the top of the portfolio">
          <img src={signature} alt="Seshadhri signature" />
        </a>
        <div className="light-home-footer__copy">
          <p>Light mode / an open notebook</p>
          <h2>Made from the tries,<br /><em>not just the wins.</em></h2>
        </div>
        <div className="light-home-footer__links">
          <a href="#home">Back to beyond AI ↑</a>
          <a href="/play">Read the longer story ↗</a>
          <small>© {new Date().getFullYear()} Seshadhri M. · Chennai, India</small>
        </div>
      </div>
    </footer>
  )
}

function LightIntro({ isRevealed, isExiting, onPlay }) {
  return (
    <section className={`light-intro${isRevealed ? ' light-intro--revealed' : ''}${isExiting ? ' light-intro--exiting' : ''}`} id="home" aria-label="Homepage introduction">
      <div className="profile-card-wrap">
        <a className="profile-card-back" href="/play" onClick={onPlay} aria-label="Open Seshadhri's personal story"><span>PLAY ↗</span></a>
        <div className="binder-clip" aria-hidden="true"><i /><b /><i /></div>
        <article className="profile-card">
          <video
            className="profile-card__media"
            src={introVideo}
            poster={portrait}
            autoPlay
            muted
            playsInline
            loop
            aria-label="A short introduction video of Seshadhri"
            onTimeUpdate={(event) => {
              if (event.currentTarget.currentTime >= 25) event.currentTarget.currentTime = 0
            }}
          />
          <div className="profile-card__body">
            <p className="profile-card__eyebrow">01 · The Builder</p>
            <h1>This is who turns<br />curiosity into <em>systems.</em></h1>
            <dl className="profile-card__details">
              <div><dt>Name</dt><dd>Seshadhri Murugavel</dd></div>
              <div><dt>Role</dt><RoleTypewriter /></div>
            </dl>
          </div>
        </article>
      </div>
      <div className="light-intro__content">
        <div className="light-intro__story">
          <p className="light-intro__eyebrow">Beyond the work</p>
          <h1>Seshadhri,<br /><em>beyond AI.</em></h1>
          <p className="light-intro__copy">
            More than an AI developer or IT graduate, Seshadhri shows up for people. He has volunteered with initiatives such as Volunteers of India, and believes useful work should make life a little better for someone else.
          </p>
          <p className="light-intro__copy">
            His podcast follows the real stories behind growth: the difficult turns, the lessons, and the people who became unapologetically themselves.
          </p>
          <div className="light-intro__signals" aria-label="What Seshadhri is building around"><span>AI & systems</span><span>People-first work</span><span>Stories that stay</span></div>
          <div className="light-intro__actions">
            <a className="light-intro__play-cue" href="/play" onClick={onPlay} aria-label="Open Seshadhri's personal story">
              <span>Know the person behind the work</span>
              <i aria-hidden="true"><ArrowIcon /></i>
            </a>
            <a className="light-intro__explore" href="#light-inspiration">Explore the notebook <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <aside className="light-intro__side-note" aria-label="Seshadhri's hobbies">
          <div className="light-intro__hobbies">
            <p>Off the clock</p>
            <h2>Seshadhri,<br />off the clock.</h2>
            <span className="light-intro__hobbies-copy">The person behind the portfolio is always saving a good scene, a new song, or one more idea to share.</span>
            <div className="light-intro__hobby-stack">
              <span><b>Create</b>Instagram, videography & editing</span>
              <span><b>Watch</b>Movies, stories & great soundtracks</span>
              <span><b>Read</b><em>The Art of Laziness</em> & <em>Ikigai</em></span>
              <span><b>Recharge</b>Music on, one more game</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

function RoleTypewriter() {
  const [roleIndex, setRoleIndex] = useState(-1)
  const [text, setText] = useState('AI Developer')

  useEffect(() => {
    const current = roleIndex === -1 ? 'AI Developer' : lightModeRoles[roleIndex]
    const nextIndex = roleIndex === -1 ? 0 : (roleIndex + 1) % lightModeRoles.length
    const next = lightModeRoles[nextIndex]
    let timer
    let cancelled = false
    let remaining = current
    let typed = ''

    const typeNext = () => {
      if (cancelled) return
      if (typed.length < next.length) {
        typed += next[typed.length]
        setText(typed)
        timer = window.setTimeout(typeNext, 78)
        return
      }
      timer = window.setTimeout(() => setRoleIndex(nextIndex), 1550)
    }

    const eraseCurrent = () => {
      if (cancelled) return
      if (remaining.length > 0) {
        remaining = remaining.slice(0, -1)
        setText(remaining)
        timer = window.setTimeout(eraseCurrent, 58)
        return
      }
      timer = window.setTimeout(typeNext, 210)
    }

    timer = window.setTimeout(eraseCurrent, roleIndex === -1 ? 1450 : 1220)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [roleIndex])

  return <dd className="profile-card__role" aria-live="polite">{text}</dd>
}

function SunIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.8" /><path d="M12 2v2.1M12 19.9V22M4.93 4.93l1.49 1.49M17.58 17.58l1.49 1.49M2 12h2.1M19.9 12H22M4.93 19.07l1.49-1.49M17.58 6.42l1.49-1.49" /></svg>
}
function MoonIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 15.1A8.7 8.7 0 0 1 8.9 3.6 8.7 8.7 0 1 0 20.4 15.1Z" /></svg>
}
function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
}

createRoot(document.getElementById('root')).render(<App />)
