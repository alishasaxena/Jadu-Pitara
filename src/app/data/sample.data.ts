import { Statement } from "@angular/compiler";

export const navigationLinks: { label: string; route: string }[] = [
  { label: 'Home', route: '/' },
  { label: 'Approach', route: '/approach' },
  { label: 'Mahotsav', route: '/mahotsav' },
  { label: 'Micro-Improvement Pitara', route: '/explore' },
];

export const heroData: HeroSection = {
  title: 'Vidya amrit',
  subtitle: 'small steps to build great schools',
  description: 'Vidya Amrit aims to encourage, recognize, and nurture innovations across the 1.5 million school in our eductaion system, by breaking down big ideas into a series of micro-improvements.',
};

export const stats: Stats[] = [
  {
    stat: '30',
    desc: 'State/UTs',
  },
  {
    stat: '290+',
    desc: 'Districts',
  },
  {
    stat: '50+',
    desc: 'Unique MI Projects',
  },
  {
    stat: ' 5',
    decimalData: '.98L',
    sign: '+',
    desc: 'Total number of micro-improvements',
  }
]

export const cardsData: Card[] = [
  {
    title: "Access and Infrastructure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "assets/images/micro-improve/m1.png",
    buttonLabel: "Learn More",
    route: "/domain/infrastructure",
    blogs: [
      {
        title: "School resources",
        description:
          "The HM understands the importance of having good school resources.",
        tags: ["HM"],
        date: "2 weeks",
        objective: "To improve the resources available in the school.",
        sqaDomain: "Infrastructure",
        subCategory: "Physical Infrastructure",
        isVideo: true,
        stepsTaken: [
          "Assess the current resources and infrastructure available in the school.",
          "Detail the needs of the school.",
          "Identify resources that the community can support with.",
          "List the requirements which need to be procured.",
          "Share the list with the CRP.",
        ],
      },
      {
        title: "Bringing back the dropouts",
        description:
          "To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.",
        tags: ["HT"],
        date: "1 month",
        objective:
          "To engage teachers and SMC members to create a plan to bring back students who have dropped out to school.",
        sqaDomain: "Infrastructure",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "Create a consolidated list of students who have dropped out of school.",
          "Organise a meeting with teachers and SMC members.",
          "Identify the reasons for dropouts.",
          "Identify strategies to bring dropout students back into the school system.",
          "Create an action plan.",
          "Assign tasks to members at the meeting based on strategies.",
          "Implement the strategies.",
          "Conduct a follow-up session for updates and challenges.",
          "Document the learnings, challenges, experiences.",
        ],
      },
      {
        title: "School Exposure Visit",
        description:
          "This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.",
        tags: ["HT", "SMC"],
        date: "2 weeks",
        objective:
          "To conduct an exposure visit for parents and students to local primary schools.",
        sqaDomain: "Infrastructure",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "Identify the local primary school to visit for exposure.",
          "Connect with the local primary school HM to schedule an exposure visit.",
          "Inform parents about the primary school and exposure visit to school.",
          "Plan the visit to the primary school.",
          "Plan an interactive session with the primary school HM, teacher, and students.",
          "Take feedback from parents on the visit.",
        ],
      },
      {
        title: "Community BALA",
        description:
          "Gram Panchayats may undertake various activities such as: paint walls with learning topics/illustrations, toys and easy to-read book libraries, blackboards in public spaces in the community to write stories for children or for children to draw, space for displaying children’s work etc.",
        tags: ["SMC", "Panchayat"],
        date: "1 month",
        objective:
          "To enable the community to improve the infrastructural development of the community surrounding to make the physical space engaging and lively.",
        sqaDomain: "Access",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "Assess the current resources available in the community for BALA",
          "Identify spaces that can be used for BALA",
          "Assign use of those spaces",
          "Create a list of items that still need to be procured",
          "Assign/distribute responsibilities among members",
          "Identify resources that the community can support with",
          "Share the list with the community/panchayat members",
          "Make necessary arrangements",
          "Follow up with the incharge",
        ],
      },
      {
        title: "Community Chaupal",
        description:
          "Reading and Telling Stories to the children at schools/Chaupal where grandparents and youth can play and active role in this.",
        tags: ["SMC"],
        date: "1 month",
        objective:
          "To create spaces where community members and children come together and encourage learning.",
        sqaDomain: "Access",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "Call a meeting",
          "Decide day/date to conduct community chaupal",
          "Identify the activities for community chaupal",
          "Call for community volunteers who can facilitate",
          "Assign the activities to different facilitators",
          "Form a WhatsApp group",
          "Inform parents and students about Community Chaupal through WhatsApp group.",
          "Start the session by setting context.",
          "Invite community member to start with the activity.",
          "Take feedback on the session from parents and students through WhatsApp.",
        ],
      },
      {
        title: "Enrolment Campaign at Cluster Level",
        description:
          "CRPs work with HMs to conduct the enrolment campaign at a cluster level.",
        tags: ["Education Leader"],
        date: "1 month",
        objective:
          "To engage teachers and SMC members to create a plan to bring back students who have dropped out to school.",
        sqaDomain: "Access",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "Create a WhatsApp group with Teachers and SMC members",
          "Set agenda and date of the meeting",
          "Communicate the date and agenda of the meeting on WhatsApp",
          "Discuss possible enrolment strategies in the meeting",
          "List down the tasks for the different enrolment strategies in the meeting",
          "Distribute the tasks among Teachers and SMC members in the meeting",
          "Set timelines for completing the tasks in the meeting",
          "Conduct second meeting based on the timelines of the tasks",
          "Give feedback to Teachers and SMC members on the tasks in the second meeting",
          "Plan for roll out in the second meeting",
          "Conduct a de-brief session post the enrolment campaign",
          "Document the learnings, challenges, experiences",
        ],
      },
      {
        title: "Re-entry of school dropouts",
        description:
          "To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.",
        tags: ["Mantra4Change & ShikshaLokam", "Education Leader"],
        date: "1 month",
        objective:
          "To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.",
        sqaDomain: "Access",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "Create a consolidated list of students who have dropped out of school",
          "Organise a meeting with the teachers and SMC members",
          "Identify the reasons for dropouts",
          "Identify strategies to bring dropout students back into the school system",
          "Create an action plan",
          "Assign tasks to members at the meeting based on strategies",
          "Implement the strategies",
          "Conduct a follow up session for updates and challenges",
          "Document the learnings, challenges, experiences",
        ],
      },
      {
        title: "Improving infrastructure for students with special needs",
        description:
          "To improve the school infrastructure and resources to increase access for students with special needs.",
        tags: ["Mantra4Change & ShikshaLokam", "Education leader"],
        date: "1 month",
        objective:
          "To improve the school infrastructure and resources to increase access for students with special needs.",
        sqaDomain: "Physical Infrastructure",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "Create a plan to visit the schools in the cluster",
          "Visit to assess the current resources and infrastructure available in the schools",
          "Detail the needs of the schools which needs to be procured",
          "Create a proposal for the procurements of resources for schools in the cluster",
          "Share the Proposal with the BEO/BRP",
        ],
      },
      {
        title: "Safety March",
        description:
          "HTs takes a walk around school to ensure that the different spaces in the school are ready for children coming back to school.",
        tags: ["HT"],
        date: "2 weeks",
        objective:
          "HT will take a walk around the school to observe that proper safety measures are implemented.",
        sqaDomain: "Sanitation",
        subCategory: "Safety",
        stepsTaken: [
          "Conduct a safety walk on planned date",
          "Use checklist to take notes while conducting the safety walk",
          "Share the observations with concerned staff",
          "Create a plan of action",
          "Follow up with teachers to ensure safety measures are implemented",
        ],
      },
      {
        title: "Fun with BALA",
        description:
          "Building as Learning Aid, or BaLA — create a plan to develop the classrooms, the floors, walls, doors, windows, pillars, corridors, the outdoor spaces in and around the school as learning resources.",
        tags: ["HT"],
        date: "2 weeks",
        objective:
          "HT will be able to improve the infrastructural development within the school to make the physical space engaging and lively",
        sqaDomain: "Physical Infrastructure",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "Assess the current resources available in the school for BALA",
          "Create a list of items that still needs to be procured",
          "Share the list with SMC members in the next meeting",
          "Identify resources that the community can support with",
          "List the requirements which needs to be procured from the state/cluster/block officials",
          "Share the list with the state/cluster/block officials",
          "Create a mechanism to follow up with SMC & officials for the resources",
        ],
      },
      {
        title: "Planning infrastructural improvements in Aanganwadis",
        description:
          "CRP will be able to assess the needs and plan accordingly for the infrastructural improvement of anganwadis.",
        tags: ["CRPs"],
        date: "1 month",
        objective:
          "CRP will be able to assess the needs and plan accordingly for the infrastructural improvement of anganwadis",
        sqaDomain: "Physical Infrastructure",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "List the aanganwadi centers in the clusters",
          "Create a plan to visit the aanganwadis",
          "Intimate the aanganwadi coordinator of the proposed visit",
          "Visit to assess the current resources and infrastructure available in the aanganwadi",
          "Detail the needs of the aanganwadi center",
          "Identify resources that the community can support with",
          "List the requirements which needs to be procured",
          "Create an improvement plan for all the centers in the cluster",
          "Submit a report to the BRC",
        ],
      },
      {
        title:
          "Teacher development plan to ensure mental health and nutrition of children",
        description:
          "Structured capacity building program for teachers to ensure healthy life of children (proper nutrition and mental health)",
        tags: ["HM"],
        date: "3 weeks",
        objective:
          "To build teachers' understanding to address health issues by leveraging different units (social workers, counsellors, community etc.)",
        sqaDomain: "Safety (psychological), Sanitation (Health and Hygiene)",
        subCategory: "Teacher Development",
        stepsTaken: [
          "Conduct a needs assessment for teachers to know about their understanding of importance of health and nutrition",
          "Create curriculum based on identified topics",
          "Identify facilitator for the training",
          "Schedule the training and circulate the calendar of the program",
          "Conduct training",
          "Provide self-learning resources to teachers",
          "Take inputs/feedback from teachers",
          "Conduct learning circle",
          "Observe teachers' class, provide feedback",
        ],
      },
      {
        title: "Health Awareness Project",
        description:
          "Awareness on safety measures against COVID-19 is critical in keeping students and the general community safe. An awareness campaign can help spread reliable information on safety measures.",
        tags: ["HM"],
        date: "4 weeks",
        objective:
          "Awareness on safety measures against COVID-19 is critical in keeping students and the general community safe. An awareness campaign can help spread reliable information on safety measures.",
        sqaDomain: "Sanitation (Health and Hygiene)",
        subCategory: "Health Awareness",
        stepsTaken: [
          "Create a core school team to work on the awareness campaign",
          "Along with the school team, look into the documents and discuss relevance and key takeaways",
          "Finalizing the date and time for a meeting to discuss the awareness campaign",
          "Invite local healthcare workers and local government representatives, also ASHA and Anganwadi workers to the meeting",
          "Consolidate reliable information on COVID-19 and get this reviewed by the team",
          "Conduct the meeting - Identify the ways to raise awareness, roles & responsibilities, and required resources",
          "Procure materials required for the awareness campaign",
          "Conduct the awareness campaign for the targeted community as per the plan",
          "Gather responses from the community members on the awareness",
          "Analyse the responses and make changes if required to the plan",
          "Appreciate and celebrate efforts of the school team and others involved",
        ],
      },
      {
        title: "Improvising School Infrastructure",
        description:
          "To improve the school infrastructure and resources to increase access for students with special needs.",
        tags: ["HM"],
        date: "1 month",
        objective:
          "To improve the school infrastructure and resources to increase access for students with special needs.",
        sqaDomain: "Physical Infrastructure",
        subCategory: "Physical Infrastructure",
        stepsTaken: [
          "Create a plan to visit the schools in the cluster",
          "Visit to assess the current resources and infrastructure available in the schools",
          "Detail the needs of the schools which needs to be procured",
          "Create a proposal for the procurements of resources for schools in the cluster",
          "Share the Proposal with the BEO/BRP",
        ],
      },
    ],
  },
  {
    title: "Curriculum, Pedagogy Assessment ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "assets/images/micro-improve/m3.png",
    buttonLabel: "Explore",
    route: "/domain/curriculum-pedagogy-assessment",
    blogs: [
      {
        title: "Grammar Practice",
        description: null,
        sqaDomain: "curriculum, Pedagogy Assessment",
        isVideo: true,
        objective: "Build grammar skills of students by conducting exercises",
        date: "1 month",
        subCategory: "Pedagogy and subject knowldge of learners\n\nFLN",
        stepsTaken: [
          " Document most commonly made grammar mistakes that your students do ,",
          " Design lesson plan of action on how to correct grammatical mistakes of students,",
          "Introduce these grammar rules in a fun and engaging way.,",
          "Help students in creating posters of newly learnt grammar rules,",
          "Conduct culminating activities where students can speak/write with good grammar",
        ],
        tags: ["English Teachers"],
      },
      {
        title: "Reading English",
        description: null,
        sqaDomain: "curriculum, Pedagogy Assessment",
        objective: "Build reading skills among students ",
        date: "1 month",
        subCategory: "Pedagogy and subject knowldge of learners\n\nFLN\n\n\n",
        stepsTaken: [
          "Conduct reading activities to identify the reading levels of your class ,",
          "Conduct activities that focus on word recognition based on your student levels ,",
          "Engage students in activities where they can read and understand sentences ,",
          "Organise an activity for students to demonstrate their reading skills creatively",
        ],
        tags: ["English Teachers"],
      },
      {
        title: "Writing Development",
        description: null,
        objective: "Build the writing skills in students",
        date: "1 month",
        subCategory:
          "Teaching Learning processes\n\nPeadgogy and subject knowledge of learners",
        stepsTaken: [
          " Conduct a story writing activity to assess the writing levels of your students,",
          "Design a plan of action to improve their writing skills, based on the levels of your students,",
          "Conduct regular independent writing activities,",
          "Keep a check on your students progress.,",
          "As students progress, engage them in more complex writing activities,",
          "Conduct a story writing competition, where students can showcase their writing skills",
        ],
        tags: ["English Teachers"],
      },
      {
        title: "Speaking fluency ",
        description: null,
        objective: " Build speaking fluency in students ",
        date: "1 month",
        subCategory:
          "Teaching Learning processes\n\nPeadgogy and subject knowledge of learners",
        stepsTaken: [
          "Create spaces in classroom where students speak in English,",
          "While students speak, assess their fluency levels ,",
          "Based on your student levels, prepare a plan of action to improve their speaking fluency ,",
          "Twice a week, conduct CC (conversation corners), where students speak either in pairs/groups,",
          "Also, create spaces in classroom where students can practice speaking in English,",
          "Modify the activities according to the progress made by students,",
          "Conduct a debate where students can showcase their speaking skills",
        ],
        tags: ["English Teachers"],
      },
      {
        title: "Listening Comprehension",
        description: null,
        objective: "Build listening comprehension in students",
        date: "1 month",
        subCategory: "Teaching learning processes ",
        stepsTaken: [
          "Task 1: Introduce students to a range of authentic listening materials,",
          "Task 2: Create a lesson plan to introduce active listening,",
          "Task 3: Teach students specific strategies for active listening,",
          "Task 4: Keep a periodic check on their listening comprehension,",
          "Task 5: Conduct a creative activity where students enact to what they listen",
        ],
        tags: ["English Teachers"],
      },
      {
        title: "Exploring Math Games",
        description: null,
        objective:
          "Teachers will use math games in the classroom to introduces and teach math concepts",
        date: "1 month",
        subCategory:
          "Teaching Learning processes\n\nPeadgogy and subject knowledge of learners",
        stepsTaken: [
          "Decide learning objectives and concepts you want to cover,\nSelect math games you want to use,\nCreate a weekly plan for the games,\nPrepare necessary materials for these games,\nGuide students in playing these games in small groups/indivdually,\nDiscuss and practice the concept after playing games,\nAssess students' achievement of the learning objectives",
        ],
        tags: ["Maths Teachers"],
      },
      {
        title: "Real World Projects",
        description: null,
        objective:
          "Teachers will use real world projects in the classroom to foster practical application of math, and problem-solving skills",
        date: "1 month",
        subCategory:
          "Teaching Learning processes\n\nPeadgogy and subject knowledge of learners",
        stepsTaken: [
          "Decide the concepts you want to cover",
          "Create a few projects on real-life problems aligned to the selected concepts",
          "Introduce the project and timelines with the students",
          "Practice different concepts in the classroom with students",
          "Support students weekly once in the classroom period on the project",
          "Organize project showcase by the students",
        ],
        tags: ["Maths Teachers"],
      },
      {
        title: "Math Story Problems \t",
        description: null,
        objective:
          "Teachers will use story based word problems to foster problem-solving skills and revision of math concepts",
        date: "1 month",
        subCategory:
          "Teaching Learning processes\n\nPeadgogy and subject knowledge of learners",
        stepsTaken: [
          "Create a weekly plan of concepts you want to cover",
          "Decide the age-appropriate story based math problems",
          "Solve the story problems along with students in the classroom",
          "Practice different concepts in question solving drills",
          "Celebrate every child's progress in the classroom",
          "Create a class math story problem book to showcase student work",
        ],
        tags: ["Maths Teachers"],
      },
      {
        title: "Differentiated instruction",
        description: null,
        objective:
          "Teachers will address diverse learning needs of students in math classroom",
        date: "1 month",
        subCategory:
          "Teaching Learning processes\n\nPeadgogy and subject knowledge of learners",
        stepsTaken: [
          "Decide the learning objectives and concepts you want to cover",
          "Assess students' math abilities using simple tools",
          "Design different activities for different learners",
          "Form small groups for targeted support",
          "Modify activities based on student progress",
          "Assess students' achievement of learning objectives using simple tools",
        ],
        tags: ["Maths Teachers"],
      },
      {
        title: "Letters and Words",
        description: null,
        objective:
          "Teachers will be able to use the Read-Along app to teach letters and words",
        date: "1 month",
        subCategory: "Teaching learning processes",
        stepsTaken: [
          "Search the Read-Along app to identify activities for phonics (word time)",
          "Create a one-month plan for conducting activities",
          "Divide the class into small groups",
          "Create a score chart for presenting group wise scores and progress",
          "Conduct activities based on the designed plan",
          "Calculate total score at the end of the month",
          "Reflect on student's progress",
        ],
        tags: ["English", "FLN Teacher"],
      },
      {
        title: "Read Aloud ",
        description: null,
        objective:
          "Teachers will be able to use the Read-Along app to conduct read-alouds",
        date: "1 month",
        subCategory: "Teaching learning processes",
        stepsTaken: [
          "Select a story",
          "Read the story before the session",
          "Prepare sample questions from the story",
          "Conduct read-aloud",
          "Have discussion, asking questions related to the story",
          "Practice writing/drawing exercise based on the story",
        ],
        tags: ["English", "FLN Teacher"],
      },
      {
        title: "Let us learn",
        description: null,
        objective:
          "Teachers will be able to use the Read-Along app to assess student's reading progress",
        date: "1 month",
        subCategory: "Teaching learning processes\n\nAssesment of LO/progress",
        stepsTaken: [
          "Identify the area/s you would like to assess your students' progress",
          "Plan weekly assessment activities for a month using Read Along app",
          "Conduct assessment activities every week and identify learning gaps",
          "Modify teaching strategies if required weekly to bridge the identified learning gaps",
          "Analyse students' progress at the end of the month",
          "Share the progress report with school head and parents",
        ],
        tags: ["English", "FLN Teacher"],
      },
      {
        title: "Home",
        description: null,
        objective:
          "Teachers will conduct activities on the theme of Home to create classroom learning eperiences on early literacy and numeracy concepts and skills",
        date: "1 month",
        subCategory: "ECCE and FLN",
        stepsTaken: [
          "Learn about the theme 'Home' and different objectives and activities under the theme for classes A and B",
          "Curate the activities on the theme from the learning resource (Design new activities on the theme if any)",
          "Create an action plan to conduct the activities",
          "Conduct the activities in the classrooms",
          "Document your reflections in your diary",
        ],
        tags: ["FLN Teachers"],
      },
      {
        title: "Neighbourhood",
        description: null,
        objective:
          "Teachers will conduct activities on the theme of neighbourhood to create classroom learning eperiences on early literacy and numeracy concepts and skills",
        date: "1 Month",
        subCategory: "ECCE and FLN",
        stepsTaken: [
          "Learn about the theme 'Neighbourhood' and different objectives and activities under the theme for classes A and B",
          "Curate the activities on the theme from the learning resource (Design new activities on the theme if any)",
          "Create an action plan to conduct the activities",
          "Conduct the activities in the classrooms",
          "Document your reflections in your diary",
        ],
        tags: ["FLN Teachers"],
      },
      {
        title: "Market",
        description: null,
        objective:
          "Teachers will conduct activities on the theme of market to create classroom learning eperiences on early literacy and numeracy concepts and skills",
        date: "1 Month",
        subCategory: "ECCE and FLN",
        stepsTaken: [
          "Learn about the theme 'Market' and different objectives and activities under the theme for classes A and B",
          "Curate the activities on the theme from the learning resource (Design new activities on the theme if any)",
          "Create an action plan to conduct the activities",
          "Conduct the activities in the classrooms",
          "Document your reflections in your diary",
        ],
        tags: ["FLN Teachers"],
      },
      {
        title: "Exploring Maths Games",
        description: null,
        objective:
          "Teachers will use math games in the classroom to introduces and teach math concepts",
        date: "1 Month",
        subCategory:
          "Teaching learning processes\n\nPeadagogy and subject knowledge of learner",
        stepsTaken: [
          "Decide learning objectives and concepts you want to cover",
          "Select math games you want to use",
          "Create a weekly plan for the games",
          "Prepare necessary materials for these games",
          "Guide students in playing these games in small groups/individually",
          "Discuss and practice the concept after playing games",
          "Assess students' achievement of the learning objectives",
        ],
        tags: ["Maths Teacher\n"],
      },
      {
        title: "Real World Projects",
        description: null,
        objective:
          "Teachers will use real world projects in the classroom to foster practical application of math, and problem-solving skills",
        date: "1 Month",
        subCategory:
          "Teaching learning processes\n\nPeadagogy and subject knowledge of learner",
        stepsTaken: [
          "Decide the concepts you want to cover",
          "Create a few projects on real-life problems aligned to the selected concepts",
          "Introduce the project and timelines to the students",
          "Practice different concepts in the classroom with students",
          "Support students weekly once in the classroom period on the project",
          "Organize project showcase by the students",
        ],
        tags: ["Maths teacher"],
      },
      {
        title: "Math Story Problems",
        description: null,
        objective:
          "Teachers will use story based word problems to foster problem-solving skills and revision of math concepts",
        date: "1 Month",
        subCategory:
          "Teaching learning processes\n\nPeadagogy and subject knowledge of learner",
        stepsTaken: [
          "Create a weekly plan of concepts you want to cover",
          "Decide the age-appropriate story based math problems",
          "Solve the story problems along with students in the classroom",
          "Practice different concepts in question-solving drills",
          "Celebrate every child's progress in the classroom",
          "Create a class math story problem book to showcase student work",
        ],
        tags: ["Maths teacher"],
      },
      {
        title: "Differentiated instruction",
        description: null,
        objective:
          "Teachers will address diverse learning needs of students in math classroom",
        date: "1 month",
        subCategory: "Peadagogy and subject knowledge of learner",
        stepsTaken: [
          "Decide the learning objectives and concepts you want to cover",
          "Assess students' math abilities using simple tools",
          "Design different activities for different learners",
          "Form small groups for targeted support",
          "Modify activities based on student progress",
          "Assess students' achievement of learning objectives using simple tools",
        ],
        tags: ["FLN Teachers"],
      },
      {
        title: "Home Sweet Home/ My Home",
        description: null,
        objective: "Teachers will work with students to showcase their homes",
        date: "1 month",
        subCategory: "ECCE",
        stepsTaken: [
          "Create a plan of action to organise the showcase",
          "Conduct small discussion with students on various themes around home",
          "Support students in creating various drawings to depict home",
          "Work with students to create poster display of their homes",
          "Organise the Show and Tell/showcase by students on these displays",
        ],
        tags: ["FLN Teachers"],
      },
      {
        title: "One Story Fun Story/ One Story At A Time",
        description: null,
        objective:
          "Teachers will conduct interactive storytelling for children to inculcate love for reading",
        date: "1 month",
        subCategory: "ECCE",
        stepsTaken: [
          "Choose age-appropriate picture books with engaging illustrations and themes",
          "Discuss the cover, title, and illustrations to build anticipation and spark curiosity",
          "Use expressive voices, gestures, and pauses to engage children and facilitate comprehension",
          "Engage children in conversations about the story, characters, and themes",
          "Organise hands-on activities like role-playing, artwork, or dramatic play based on the story",
        ],
        tags: ["FLN Teachers"],
      },
      {
        title: "Pretend Play",
        description: null,
        objective:
          "Teacher will organise a pretend play on various market experiences to develop social skills.",
        date: "1 Month",
        subCategory: "ECCE",
        stepsTaken: [
          "Create a plan of action to organise the pretend market",
          "Introduce and discuss the concept of market with children",
          "Discuss with children what kind of market they want to design",
          "Assign roles and activities to students",
          "Guide children in price matching and addition activities",
          "Prepare necessary materials with students for the pretend market",
          "Organise pretend market in the classroom",
        ],
        tags: ["FLN Teacher"],
      },
      {
        title: "Collage Art",
        description: null,
        objective:
          "Teachers will design a collage art with children to enhance their motor skills and artistic expression",
        date: "1 Month",
        subCategory: "ECCE",
        stepsTaken: [
          "Decide with children on what do they want to create in their small groups",
          "Create a rough outline with students of the collage in small groups",
          "Make a list of materials to be used in the collage with children",
          "Organise collection of materials with students",
          "Support students in making the collages",
          "Showcase the collages in the classroom",
        ],
        tags: ["FLN Teacher"],
      },
      {
        title: "Reading week\r",
        description:
          "Reading week promotion is a step towards promoting a reading habit among students. A week long reading will be filled with various reading activities, sessions and reading hours. ",
        objective: "To able to design a reading program effectively",
        date: "3 weeks",
        subCategory: "Teching learning process \n\n",
        stepsTaken: [
          "Call a meeting with teachers to discuss the need of reading program",
          "List down the easy-to-read fun books for different age groups",
          "Check for their availability and make necessary arrangements",
          "Assign books for different groups and supporting activities for individual groups",
          "Conduct the reading week",
          "Collect the crafts, drawings, notes etc made in the activity",
          "Display the work on the board",
        ],
        tags: ["Head Teacher"],
      },
      {
        title: "Reading week\r",
        description:
          "Reading week promotion is a step towards promoting a reading habit among students. A week long reading will be filled with various reading activities, sessions and reading hours. ",
        objective: "To be able to implement a reading program",
        date: "3 weeks",
        subCategory: "Teching learning process \n\n\n\n\n\n\n",
        stepsTaken: [
          "Call a meeting with teachers",
          "Discuss the importance of Reading week",
          "Discuss the agenda/flow of the reading week",
          "Allocate roles and responsibilities to the teachers",
          "Make arrangements for conducting Reading week program",
          "Include it on the time-table",
        ],
        tags: ["Head Teacher"],
      },
      {
        title: "TLM Mela",
        description:
          "Teaching-learning material are intergral part of effective classroom teaching. TLM Mela will help the teachers to create diffrent kind of TLMs focused on particular subject. ",
        objective:
          "HT will be able to conduct an effective TLM Mela for teachers to come together and share their learnings among each other and promote teaching learning and classroom strategies. ",
        date: "15 days",
        subCategory: "Teacher reflection on TL processes",
        stepsTaken: [
          "Set up a planning committee to organize TLM Mela",
          "Conduct a meeting to create a detailed plan of TLM mela",
          "Send an invite and agenda of TLM Mela to all the teachers",
          "Conduct the TLM Mela",
          "Take feedback from teachers on overall TLM Mela",
        ],
        tags: ["Head Teacher"],
      },
      {
        title: "Better Learning Environment ",
        description: "Improving learning environments in anganwadis",
        objective:
          "CRP will be able to improve the infrastructural development of anganwadis to make physical spaces engaging and lively",
        date: "1 month",
        subCategory: "ECCE",
        stepsTaken: [
          "List the aanganwadi centers in the clusters",
          "Create a plan to visit the aanganwadis",
          "Intimate the aanganwadi coordinator of the proposed visit",
          "Visit to assess the current resources available in the aanganwadi",
          "Take inputs from the aanganwadi coordinator on how to improve the learning environment",
          "Detail the needs of the aanganwadi center",
          "Identify resources that the community can support with",
          "List the requirements which need to be procured",
        ],
        tags: ["CRPs"],
      },
      {
        title: "Preparatory class (Balvatika)",
        description: null,
        objective:
          "Anganwadi teacher will be able to conduct an exposure visit for parents and students to local primary schools.",
        date: "2 weeks",
        subCategory: "ECCE",
        stepsTaken: [
          "Identify the local primary school to visit for exposure",
          "Connect with local primary school HM to schedule an exposure visit",
          "Inform parents about the primary school and exposure visit to school",
          "Plan the visit to the primary school",
          "Plan an interactive session with the primary school HM, teacher, and students",
          "Take feedback from the parents on the visit",
        ],
        tags: ["ECCE teacher"],
      },
      {
        title: "ECCE activities at Home",
        description:
          "Teachers will share day to day activities that parents can involve their child with",
        objective:
          "ECCE teachers are able to  effectively involve parents in child development through activity based learning",
        date: "1 month",
        subCategory: "ECCE",
        stepsTaken: [
          "Create a list of parents",
          "Plan an orientation session with parents to explain them the different activities that they can do with child at home",
          "Inform parents about the orientation session and its purpose",
          "Demonstrate some activities in the orientation session",
          "Share the list of activities that parents can do at home with children",
          "Take feedback from parents on child progress monthly",
        ],
        tags: ["ECCE Teacher"],
      },
    ],
  },
  {
    title: "Human Resources and School Leadership",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    image: "assets/images/micro-improve/m4.png",
    buttonLabel: "Read More",
    route: "/domain/human-resources",
    blogs: [
      {
        title: "Teacher's motivation matters",
        description:
          "HM will be able to assess the motivation level of their teachers and take necessary steps to keep teachers motivated",
        objective: "Ensure that the teachers are motivated",
        date: "1 month",
        subCategory: "Mentoring opportunities",
        stepsTaken: [
          "Conduct a small baseline survey to map the motivation level of teachers",
          "Organise small sharing circles with teachers daily",
          "Schedule 1-1 conversation with every teacher in a month",
          "Discuss the challenges faced by the teacher",
          "Create an action plan with teacher for identified areas of improvement",
          "Observe Samiksha Reports to analyze the change in motivation level of teachers",
        ],
        tags: ["HM "],
      },
      {
        title: "Teacher mela",
        description:
          "Create a space for teachers to share their best practices/learning/ideas with fellow teachers by conducting a teacher mela ",
        objective: "To conduct effective engagment amongst all the teachers",
        date: "2 weeks",
        subCategory: "Staff recognition",
        stepsTaken: [
          "Send a survey form to understand teacher's expectation from the mela",
          "Organise & conduct a meeting with teachers to discuss the Teacher Mela",
          "List down the activities for the Teacher Mela",
          "Allocate the responsibilities for the Teacher Mela",
          "Arrange the logistics to organise the mela",
          "Communicate the schedule for teacher mela",
          "Conduct the Teacher mela",
          "Ask the teachers for the feedback post Mela",
          "Document the Mela proceedings",
        ],
        tags: ["HM"],
      },
      {
        title: "Effective Staff meeting",
        description:
          "It can help an HM to plan and conduct an effective staff meeting",
        objective: " Plan and conduct effective staff meeting.",
        date: "2 weeks",
        subCategory: "Structures and processes",
        stepsTaken: [
          "Set the agenda for the staff meeting",
          "Share the time, date, and agenda with the teachers.",
          "Plan the meeting flow.",
          "Share the discussion points with teachers",
          "Ask any teacher to write minutes during meeting.",
          "Discuss the possible agenda for next meeting.",
          "Ask teachers for feedback and document it.",
        ],
        tags: ["HM"],
      },
      {
        title: "Improve Digital Literacy",
        description:
          "HM helps the teacher identify and understand the various digital tools ",
        objective: null,
        date: "1 week",
        subCategory: "Staff capacity building",
        stepsTaken: [
          "Set agenda and date of the meeting",
          "Communicate the date and agenda of the meeting to Teachers on what's app",
          "Share a list of tools relevant for teachers in the meeting",
          "Set timelines to introduce different tools in the meeting",
          "Demonstrate the usage of the tools according to the timelines set",
          "Take feedback from teachers at the end of the demonstration",
        ],
        tags: ["HM"],
      },
      {
        title: "Conducive working environment for teachers ",
        description:
          "The HM creates a safe and conducive environment for teachers to work in ",
        objective:
          "To create a safe and conducive working environment for teachers ",
        date: "2 months",
        subCategory: "Structures and processes",
        stepsTaken: [
          "Identify the indicators for creating a good school culture",
          "Assess the current status by taking feedback from teachers and students",
          "Create a plan for systematic improvement of school culture",
          "Identify the list of activities",
          "Communicate to teachers and students",
          "Include the teachers and students by allocating responsibilities",
          "Create an observation and feedback mechanism to track progress",
        ],
        tags: ["HM"],
      },
      {
        title: "Teacher development workshops ",
        description:
          "Create a space for teachers to take ownership of monthly learning sessions  ",
        objective:
          "To enable teachers to take ownership of monthly learning sessions  ",
        date: "2 weeks",
        subCategory: "Staff capacity building",
        stepsTaken: [
          "Send circular to teachers seeding the idea of monthly learning sessions",
          "Identify the possible topics for discussion",
          "List down the topics that can be taken monthly",
          "Send circular asking teachers to take lead on any one of the topics",
          "Create a schedule by mapping all the teachers to the topics",
          "Share the document with everybody",
        ],
        tags: ["HM"],
      },
      {
        title: "Exploring digital resources",
        description:
          " Encouraging teachers to make use of digital resources for personal professional development  ",
        objective: "Enabling teachers to make use of digital resources  ",
        date: "1 Week",
        subCategory: "Staff capacity building",
        stepsTaken: [
          "Explore digital resources on Diksha Learn",
          "Identify content that suits your school's context",
          "Document and prepare a presentation on the same for all the teachers",
          "Call for a staff meeting",
          "Introduce the idea to all the teachers through a presentation",
          "Suggest the topics that teachers can use",
          "Map the teachers to Diksha group and add courses that teachers can explore",
          "Follow up with the teacher to understand their progress",
        ],
        tags: ["HM"],
      },
      {
        title: "Professional development plan",
        description:
          "Encouraging teachers to create their own professional development plan",
        objective:
          "Enabling teachers to create professional development plan effectively",
        date: "2 Week",
        subCategory: "Staff capacity building",
        stepsTaken: [
          "Create teachers' WhatsApp group",
          "Communicate the importance of creating one's professional development plan",
          "Create a sample Professional development plan",
          "Share the sample plan with teachers",
          "Ask teachers to make their own professional development plan and share with HM",
          "Plan for follow-up meeting with teachers quarterly",
        ],
        tags: ["HM"],
      },
      {
        title: "Positive Feedback Mechanism",
        description:
          "The school leader institutes a feedback mechanism within the school",
        objective: null,
        date: null,
        subCategory: "Mentoring opportunities",
        stepsTaken: [
          "Discuss with a teacher about students' performance in their class over the last academic year",
          "Analyze the discussion to prepare your feedback",
          "Discuss feedback points with the teacher",
          "Give feedback to more teachers on students' performance in their classes over the last academic year",
          "Write your reflections on the feedback process on DIKSHA (as evidence or remarks)",
        ],
        tags: ["School Leader"],
      },
    ],
  },
  {
    title: "Inclusive Practices",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
    image: "assets/images/micro-improve/m5.png",
    buttonLabel: "Discover",
    route: "/domain/inclusive-practices",
    blogs: [
      {
        title: "Sensitization for inclusion",
        description:
          "To sensitize teachers and SMCs towards under represented groups",
        objective: null,
        date: "2 weeks",
        subCategory:
          "Inclusive (how many children, what disability, provisions -transportation)",
        stepsTaken: [
          "Collect data on the under represented groups'(SEDGs) children in your school/community",
          "Communicate date and agenda with teachers and SMC members for a meeting",
          "Share the data collected on the SEDGs with teachers and SMCs in the meeting",
          "List down the challenges in access to their education in the meeting",
          "Conduct an open forum to understand the views of teachers and SMCs",
          "Identify the approaches to include 'under represented groups' in the school",
          "Plan for a follow-up meeting to discuss the implementation of the identified approaches for inclusion",
          "Document the minutes of the meeting",
        ],
        tags: ["Education Leader"],
      },
      {
        title: "Improving infrastructure for students with special needs",
        description:
          "To improve the school infrastructure and resources to increase access for students with special needs",
        objective: null,
        date: "1 month",
        subCategory:
          "Barrier free (physical, curriculum, pedagogy, assessment, extra-curricular)",
        stepsTaken: [
          "Create a plan to visit the schools in the cluster",
          "Visit to assess the current resources and infrastructure available in the schools",
          "Detail the needs of the schools which needs to be procured",
          "Create a proposal for the procurements of resources for schools in the cluster",
          "Share the Proposal with the BEO/BRP",
        ],
        tags: ["Education leader"],
      },
      {
        title: "Unity in Diversity",
        description:
          "Using Republic day as an opportunity to help bridge the gap created by the pandemic and once again inculcate the sense of belonging by organizing an event where each stakeholder involve gets the opportunity to present their views and interact with each other.",
        objective:
          "HT will be able to involve community to conduct Republic day effectively",
        date: "1 month",
        subCategory:
          "Barrier free (physical, curriculum, pedagogy, assessment, extra-curricular)",
        stepsTaken: [
          "Organise & conduct a meeting with teachers to discuss the Republic day.",
          "List down the activities for the event",
          "Identify the ways in which the people in the community can contribute to the event",
          "Reach out to the community to support with the event",
          "Allocate tasks of the event among the teachers and community.",
        ],
        tags: ["Head teacher"],
      },
      {
        title: "Unity in Diversity",
        description:
          "Using Republic day as an opportunity to help bridge the gap created by the pandemic and once again inculcate the sense of belonging by organizing an event where each stakeholder involve gets the opportunity to present their views and interact with each other.",
        objective:
          "HT will be able to involve community to conduct Republic day effectively",
        date: "1 month",
        subCategory:
          "Barrier free (physical, curriculum, pedagogy, assessment, extra-curricular)",
        stepsTaken: [
          "Organise & conduct a meeting with teachers to discuss the Republic day.",
          "List down the activities for the event",
          "Identify the ways in which the people in the community can contribute to the event",
          "Reach out to the community to support with the event",
          "Allocate tasks of the event among the teachers and community.",
        ],
        tags: ["Head teacher"],
      },
    ],
  },
  {
    title: "Management, Monitoring & Governance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    image: "assets/images/micro-improve/m6.png",
    buttonLabel: "Get Started",
    route: "/domain/management-and-governance",
    blogs: [
      {
        title: "Building a Shared School Vision",
        description:
          "Create vision statement along with the teachers Assess the current reality of the school by collecting information from various stakeholder Identify and make note of the top priorities of the school towards vision creation Come up with a clear shared vision statement for the school Evaluate and finalise the vision statement",
        objective:
          "School leader conducts a learning circle for the staff members to create a shared school vision",
        date: "2 weeks",
        subCategory: "School Vision",
        stepsTaken: [
          "Plan and invite all staff members for a learning circle",
          "During the learning circle, discuss and gather info about the present situation of the school",
          "Identify and make note of the top priorities of the school",
          "Write together a clear shared vision statement",
          "Finalise the vision statement using the checklist",
          "Conclude the learning circle with action steps for achieving the vision",
          "Collect feedback from staff members on their experience",
        ],
        tags: ["School leaders"],
      },
      {
        title: "Making the Vision Come Alive",
        description:
          "Plan activities Gather resources Invite parents and students Conduct activities",
        objective:
          "School leader organises a campaign to communicate & celebrate the school's vision with the staff, students & community members",
        date: "2 weeks",
        subCategory: "School Vision\n\nCommunication with community",
        stepsTaken: [
          "Conduct a meeting to plan activities for the campaign with staff members",
          "Create a schedule & assign responsibilities for conducting the activities",
          "Invite the parents and students to participate in the campaign",
          "Conduct the activities for school vision campaign",
          "Capture the best moments of the campaign",
          "Reflect on the campaign using this form",
        ],
        tags: ["School Leaders"],
      },
      {
        title: "Aao School Chalein ",
        description: null,
        objective:
          "School leaders (Principals, HMs and HTs) will conduct activities for increasing enrolment of students in their schools.",
        date: "1 month",
        subCategory: "Admission drive",
        stepsTaken: [
          "Collect and analyze the enrolment data from last 5 years",
          "Conduct a meeting with teachers and SMC members to discuss and set the enrolment target for this year",
          "Form a working committee and plan activities and timeline of the enrolment program",
          "Conduct different enrolment activities along with working committee",
          "Calculate percentage increase in enrolment from the last year and create an enrolment report",
        ],
        tags: ["Principals, HMs and HTs"],
      },
      {
        title: "Aao School Chalein",
        description: null,
        objective:
          "Block and district level officials will support school leaders in conducting enrolment program to increase the enrolment in their schools.",
        date: "1 month",
        subCategory: "Admission drive",
        stepsTaken: [
          "View the learning resource to learn about effective enrolment program",
          "Conduct orientation for school leaders on effective enrolment program",
          "Conduct school visits to observe enrolment activities & to motivate working committee",
          "Share enrolment program updates in review meetings",
          "Collect enrolment reports and appreciate school leaders with highest percentage increase in enrolment",
        ],
        tags: ["DIET, BEO"],
      },
      {
        title: "Re-entry of  school dropouts",
        description:
          "To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.",
        objective:
          "To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.",
        date: "1 month",
        subCategory: "Admission drive",
        stepsTaken: [
          "Create a consolidated list of students who have dropped out of school",
          "Organise a meeting with the teachers and SMC members to identify the reasons for dropouts and create a plan of action",
          "Plan activities to bring dropout students back into the school system",
          "Conduct these activities",
          "Conduct a follow-up session for updates and challenges",
          "Document the learnings, challenges, experiences",
        ],
        tags: ["School leader"],
      },
      {
        title: "Teacher support",
        description:
          "Having one-on-one discussions with teachers helps give personalized support to teachers, as well as address challenges or concerns that teachers may not be comfortable discussing in large groups!",
        objective:
          "School leaders will conduct one-on-one discussions with teachers to provide personalised support and to address challenges",
        date: "2 weeks",
        subCategory: "Academic leadership in school leader",
        stepsTaken: [
          "Create a schedule for one-on-one discussions with teachers",
          "Share the date, time, and agenda of the discussions with teachers",
          "Discuss challenges, ideas, and next steps with teachers. Appreciate teachers' efforts and motivation",
          "After a few cycles, collect feedback from teachers on the one-on-one discussions",
          "Incorporate feedback in the upcoming discussions",
        ],
        tags: ["School leader"],
      },
      {
        title: "Teacher Mela",
        description:
          "Create a space for teachers to share their best practices/learning/ideas with fellow teachers by conducting a teacher mela ",
        objective: "To conduct an effective Teacher mela",
        date: "2 weeks",
        subCategory: "Academic leadership in school leader",
        stepsTaken: [
          "Conduct a survey to understand teacher's expectation from the mela",
          "Organise a meeting with teachers to plan the Teacher Mela and allocate responsibilities",
          "Arrange the logistics to organise the mela",
          "Communicate the schedule for teacher mela",
          "Conduct the Teacher mela",
          "Collect feedback from teachers on the Mela",
          "Document the Mela proceedings",
        ],
        tags: ["HM"],
      },
      {
        title: "Effective Staff Meeting",
        description:
          "This MIP can help an HM to plan and conduct an effective staff meeting",
        objective: " Plan and conduct effective staff meeting.",
        date: "2 weeks",
        subCategory:
          "Long term & short term (institution planning)/review process\n\nResource management / data and record/ budget",
        stepsTaken: [
          "Set the agenda for the staff meeting",
          "Share the time, date, and agenda with the teachers",
          "Plan the meeting flow",
          "Share the discussion points with teachers",
          "Ask any teacher to write minutes during meeting",
          "Discuss the possible agenda for next meeting",
          "Ask teachers for feedback and document it",
        ],
        tags: ["HM"],
      },
      {
        title: "Improving Digital Literacy",
        description: null,
        objective:
          "HM helps the teacher identify and understand the various digital tools ",
        date: "1 week",
        subCategory: "Resource management / data and record/ budget",
        stepsTaken: [
          "Set agenda and date of the meeting",
          "Communicate the date and agenda of the meeting to Teachers on WhatsApp",
          "Share a list of tools relevant for teachers in the meeting",
          "Set timelines to introduce different tools in the meeting",
          "Demonstrate the usage of the tools according to the timelines set",
          "Take feedback from teachers at the end of the demonstration",
        ],
        tags: ["HM"],
      },
      {
        title: "School Resources",
        description:
          "The HM understands the importance of having good school resources",
        objective: "To improve the resources available in the school",
        date: "2 weeks",
        subCategory: "Resource management / data and record/ budget",
        stepsTaken: [
          "Assess the current resources and infrastructure available in the school",
          "Detail the needs of the school",
          "Identify resources that the community can support with",
          "List the requirements which needs to be procured",
          "Share the list with the CRP",
        ],
        tags: ["HM"],
      },
      {
        title: "Conducive Work Environment",
        description:
          "The HM creates a safe and conducive environment for teachers to work in ",
        objective:
          "To create a safe and conducive working environment for teachers ",
        date: "1 month",
        subCategory:
          "Long term & short term (institution planning)/review process",
        stepsTaken: [
          "Identify the indicators for creating a good school culture",
          "Assess the current status by taking feedback from teachers and students",
          "Create a plan for systematic improvement of school culture along with teachers",
          "Allocate responsibilities to teachers for the improvement activities",
          "Create an observation and feedback mechanism to track progress",
        ],
        tags: ["HM"],
      },
      {
        title: "Positive Feedback",
        description: null,
        objective:
          "The school leader institutes a feedback mechanism within the school",
        date: "1 month",
        subCategory:
          "Long term & short term (institution planning)/review process",
        stepsTaken: [
          "Discuss with a teacher about students' performance in their class over the last academic year",
          "Analyze the discussion to prepare your feedback",
          "Discuss feedback points with the teacher",
          "Give feedback to more teachers regarding student performance in their classes over the last academic year",
          "Write your reflections on the feedback process on DIKSHA (as evidence or remarks)",
        ],
        tags: ["HM"],
      },
      {
        title: "Positive Feedback 2",
        description: null,
        objective: "The school leader provides effective feedback to teachers",
        date: "1 month",
        subCategory:
          "Long term & short term (institution planning)/review process",
        stepsTaken: [
          "Write 2 ideas to make your feedback process more effective",
          "Discuss with a teacher about students' performance in their class over the last academic year",
          "Analyze the discussion to prepare your feedback using the learning resource template",
          "Discuss feedback points with the teacher",
          "Give feedback to more teachers regarding their student performance",
          "Write your reflections on the feedback process on DIKSHA (as evidence or remarks)",
        ],
        tags: ["HM"],
      },
      {
        title: "School observation and feedback for teachers",
        description: null,
        objective:
          "HM observes and give feedback to teachers to their teachers",
        date: "2 Weeks ",
        subCategory:
          "Long term & short term (institution planning)/review process",
        stepsTaken: [
          "Prepare and engage in school observation",
          "Post your observations, write down 2 ideas on how to include concepts on Nonviolent communication, active listening for your next conversation with your staff",
          "Discuss with 1 teacher about student's performance based on your above ideas",
          "Post the discussion, note down feedback points for the teacher",
          "Note down 2 techniques on how you want to give the feedback",
          "Based on your techniques, give feedback to more teachers regarding their student performance",
          "Write your reflections on the feedback process on DIKSHA (as evidence or remarks)",
        ],
        tags: ["HMs"],
      },
      {
        title: "Using data to achieve a goal along with your staff",
        description: null,
        objective: "Setting a goal for the school",
        date: "2 Weeks ",
        subCategory:
          "Long term & short term (institution planning)/review process",
        stepsTaken: [
          "Understand how self-awareness and growth and fixed mindset are important for setting and achieving a goal for your school",
          "Organise a staff circle and share your learnings with your staff as a PPT or poster",
          "In the staff circle, together identify a problem area in which you need improvement based on your observations and feedback to teachers",
          "Find data affecting your problem area",
          "Reflecting on your observations and data, set one common goal for this academic year's end",
          "Draft a plan together to achieve these goals",
        ],
        tags: ["HMs"],
      },
    ],
  },
  {
    title: "Beneficiary Satisfaction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    image: "assets/images/micro-improve/m2.png",
    buttonLabel: "See More",
    route: "/domain/beneficiary-satisfaction",
    blogs: [
      {
        title: "Enabling collaboration between school and parents",
        description: null,
        objective: "Develop parent engagement plan",
        date: "1 month",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Identify the factors that motivates/demotivates parents to participate in the school activities",
          "Take suggestions from SMC/standing committee members on parents' involvement for improving students' learnings",
          "Conduct staff meeting to discuss parent's expectations to improve students' learning and enablers/barries for the same",
          "List down priority areas for parents' engagement through meeting reflections",
          "Develop an annual calendar of parent engagement activities",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Learning at Home",
        description: null,
        objective:
          "Orienting parents on how they can engage in students' learning process at home ",
        date: "1 month",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Collaborate with teachers/SMC members to conduct home visits to understand the home scenario",
          "Conduct staff meeting to discuss & prepare guidelines for parents' engagement in student learning process at home",
          "Organize session for parents to orient on importance of parental engagement in children's learning",
          "Discuss the guidelines with parents and take their suggestions on it",
          "Finalize and share the guidelines with them",
        ],
        tags: ["Head Teachers "],
      },
      {
        title: "Game Day with parents",
        description: null,
        objective:
          "To build an understanding about the importance of regular attendance in the classroom",
        date: "1 month",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Invite parents with invitation cards designed by students",
          "During staff meeting, Curate benefits & consequences of regular & irregular attendance respectively",
          "During staff meeting, Design game(s) with teachers & assign them roles as Facilitator, Co-facilitator, Observer for different games",
          "During the game day, Discuss benefits & consequences of regular& irregular attendance respectively with parents",
          "During the game day, Acknowledge parents of students who attend school regularly",
          "Post game day, Develop a collaborative action plan to overcome attendance barriers discussed with parents & teachers",
          "Post game day, Upload Self-Evaluation form and photographs from 'game day.'",
        ],
        tags: ["Head Teacher"],
      },
      {
        title: "Gender Equitable Parenting ",
        description: null,
        objective:
          "Building parents' understanding on gender equitable parenting",
        date: "1 month",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Before PTM, Conduct meeting with teachers & class representatives to discuss current parental practices leading to gender discrimination & biases",
          "Before PTM, Discuss with students, ways to initiate reflective discussions with parents on gender equitable practices",
          "Before PTM, Prepare a role play with teachers to demonstrate gender-equitable practices in PTM",
          'During PTM, Discuss with parents; "How gender equitable practices enable children\'s growth and impact their career/educational aspirations."',
          "During PTM, Conduct an activity for parents to reflect on their parenting practices",
          "Post PTM, Create a common channel of communication with parents to maintain regular communication and promote gender-equitable parenting practices",
        ],
        tags: ["Head Teachers"],
      },
      {
        title:
          "\u0c2a\u0c3f\u0c32\u0c4d\u0c32\u0c32\u0c15\u0c4b\u0c38\u0c02 PTM",
        description: null,
        objective:
          "Schools conduct an engaging parent teacher meeting (PTM) and shares some innovative practices that made the meeting effective",
        date: "15 Days",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Before Pillalakosam PTM, Attend the program & DIKSHA orientation conducted by the district and read the DIKSHA user guide",
          "Before Pillalakosam PTM, Share theme & 'Best Practices' document of PTM with teachers & create a plan for PTM day",
          "Before Pillalakosam PTM, Share PTM invitation with parents through posters, audio/video messages & home visits a week in advance",
          "Before Pillalakosam PTM, Setup school spaces for conducting parent-teacher interaction, student performance & fun activities for parents & students",
          "During Pillalakosam PTM, Welcome parents & conduct the activities as per the plan",
          "During Pillalakosam PTM, Have individual conversations with parents regarding their child's talents, academic progress, positive behaviour & health etc",
          "Post  Pillalakosam PTM, Conduct staff meeting & fill the PTM survey form on DIKSHA",
          "Post  Pillalakosam PTM, Upload PTM pictures on DIKSHA and click on 'Submit the improvement.'",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Career Card making",
        description: null,
        objective:
          "To explore different professions and create an opportunity for parents to engage in their child's careers interests and aspirations",
        date: "1 month",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Before PTM\nInvite parents with career themed invitation postcards designed by students.,\nBefore PTM\nSupport teachers to facilitate the session on career exploration in PTM.,\nDuring PTM\nConduct \"Career Card' activity with parents & students.,\nPost PTM\nUpload the Self-Evaluation form and pictures from 'Career day.'",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Skill sharing session by parents",
        description: null,
        objective:
          "To use the parent's skill/ knowledge to engage students in the learning process and also make teaching interactive and effective",
        date: "1 month",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Co-create parents' portfolios with teachers, indicating the skills/ knowledge possessed in fields relevant for students learning.,\nConduct staff meetings to plan for skill-sharing sessions.,\nProvide required support to teachers helping parents to prepare for skill sharing session.,\nConduct skill sharing session for parents to share their skills/knowlege & experiences with students.,\nDistribute a certificate or momento to parents. ,\nUpload Self-Evaluation forms and pictures from 'skill sharing session.'",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Maape Adhyapak Vidyarthi Milni",
        description: null,
        objective:
          "School welcomes the parents and students to hold discussion about their child\u2019s holistic development",
        date: "1 week",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Before PTM\nConduct a meeting to inform teachers about PTM, create a plan of action & allot responsibilities.,\nBefore PTM\nCreate awareness about PTM by sending invites in form of poster, audio, video message etc. (Use social media, newspaper, religious places to make PTM announcement),\nDuring PTM\nWelcome parents and conduct the engagement activities as per the plan.,\nDuring PTM\nVisit classrooms to observe teachers holding one on one meeting with parents and students.,\nDuring PTM\nIn classroom visit, participate in some one-one discussions between teachers and parents.,\nPost PTM\nCollect parents\u2019 testimonial videos from teachers and upload on DIKSHA.,\nPost PTM\nConduct staff meeting and fill the PTM reflection form.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Magical Basket Day",
        description: null,
        objective:
          "School leaders, teachers and SMC members together organise an exhibition to showcase TLMs created for children",
        date: "1 month",
        subCategory: "Staff engagement",
        stepsTaken: [
          "Form a planning committee of teachers and SMC members to organise the TLM Mela.,\nConduct a meeting with planning committee to create a plan of action and assign responsibilities.,\nDiscuss with teachers how to set up TLM stalls in the Mela.,\nInvite the parents and students to the TLM Mela.,\nOrganise the TLM Mela (upload pictures).,\nShare the Mela highlights and reflections in your school/district groups.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Effective staff meeting",
        description: null,
        objective: "Plan and conduct effective staff meeting.",
        date: "2 weeks",
        subCategory: "Staff engagement",
        stepsTaken: [
          "Set the agenda for the staff meeting,\nShare the time, date, and agenda with the teachers.,\nPlan the meeting flow.,\nShare the discussion points with teachers,\nAsk any teacher to write minutes during meeting.,\nDiscuss the possible agenda for next meeting.,\nAsk teachers for feedback and document it.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Conducive working environment for teachers ",
        description: null,
        objective:
          "To create a safe and conducive working environment for teachers ",
        date: "2 months",
        subCategory: "Staff engagement",
        stepsTaken: [
          "Identify the indicators for creating a good school culture.",
          "Assess the current status by taking feedback from teachers and students.",
          "Create a plan for systematic improvement of school culture.",
          "Identify the list of activities.",
          "Include the teachers and students by allocating responsibilities.",
          "Create an observation and feedback mechanism to track progress.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Bringing back the dropouts",
        description: null,
        objective:
          "To engage teachers and SMC members to create a plan to bring back students who have dropped out to school.",
        date: "2 months",
        subCategory: "SMC & Community Engagement",
        stepsTaken: [
          "Create a consolidated list of students who have dropped out of school.",
          "Organise a meeting with teachers and SMC members to identify the reasons for dropouts.",
          "Identify strategies to bring dropout students back into the school system.",
          "Create an action plan.",
          "Allot responsibilities to teachers & SMC members at the meeting based on action plan.",
          "Implement the strategies.",
          "Conduct a follow up session for updates and challenges.",
          "Document the learnings, challenges, experiences.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: " Establishment of Community Resrource Group",
        description:
          '"With their rich skills, the community resource persons may find a scope to\r\ndemonstrate their knowledge and skills in guiding children towards the learning goals\r\nof the class. This community-based approach enriches the school\u2019s pedagogical\r\nprocesses significantly."',
        objective: '"To form a Community Resource Group"',
        date: "2 months",
        subCategory: "SMC & Community Engagement",
        stepsTaken: [
          "Call meeting with teachers and SMC members.",
          "Identify community volunteers who can be a part of CRG",
          "Schedule a meeting with CRGs.",
          "Identify areas where CRG can help.",
          "Create an action plan for CRG engagement.",
        ],
        tags: ["HT", "SMC"],
      },
      {
        title: "Community BALA",
        description: null,
        objective:
          "To enable community improve the infrastructural development of community surrounding to make the physical space engaging and lively",
        date: "2 weeks",
        subCategory: "SMC & Community Engagement",
        stepsTaken: [
          "Assess the current resources available in the community for BALA.",
          "Identify spaces that can be used for BALA.",
          "Assign use of those spaces.",
          "Assign/distribute responsibilities among community members.",
          "Identify resources that the community can support with.",
          "Share the list with the community/panchayat members.",
          "Make necessary arrangement and follow up with incharge.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Community Chaupal",
        description:
          "Reading and Telling Stories to the children at schools/Chaupal where grandparents and youth can play and active role in this.",
        objective:
          "To create spaces where community members and children come together and encourage learning",
        date: "2 weeks",
        subCategory: "SMC & Community Engagement",
        stepsTaken: [
          "Decide day/date to conduct community chaupal.",
          "Identify the activities for community chaupal.",
          "Call for community volunteers who can facilitate.",
          "Assign the activities to different facilitators.",
          "Inform parents and students about community chaupal through WhatsApp group.",
          "Start the session by setting context and end it with inviting facilitators to start the activity.",
          "Take feedback on session from parents and students through WhatsApp.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Shiksha Samvad",
        description:
          "Shiksha Samvaad will be a connecting link between parents and teachers. It will help parents to be involved in the learning of their child and ensure better academic progress and help the child in developing holistically.",
        objective:
          '"To communicate with parents about the activities in the school and update on their child\'s learning."\n',
        date: "1 month",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Conduct staff meeting to plan for PTM.",
          "Discuss the agenda, objective and date for PTM.",
          "Ask teachers to communicate to parents.",
          "Conduct the PTM in the school.",
          "Circulate a feedback form with the parents.",
          "Plan for the follow up meeting in the coming month.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Back to school",
        description:
          "HT with other teachers plans an Awareness drive in the community to educate and inform parents about having children return to school. They will create posters, banners and go around the community. Visit homes of students to talk to parents and educate them about sending children to shcool. They will convey the measures taken by the school for the safety of children.",
        objective:
          "HT will be able to conduct an awareness drive in the community to educate and inform parents about children returning to school.",
        date: "15 days",
        subCategory: "SMC & Community Engagement",
        stepsTaken: [
          "Call Teachers and SMC members for a meeting.",
          "Discuss the information to be shared with parents.",
          "List down the tasks for the awareness campaign.",
          "Allot tasks among Teachers and SMC members in the meeting.",
          "Set timelines for completing the tasks.",
          "Conduct the awareness campaign.",
          "Document the learnings, challenges, experiences from awareness campaign.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Unity in Diversity",
        description:
          "Using Republic day as an opportunity to help bridge the gap created by the pandemic and once again inculcate the sense of belonging by organizing an event where each stakeholder involve gets the opportunity to present their views and interact with each other. ",
        objective:
          "HT will be able to involve community to conduct Republic day effectively",
        date: "15 days",
        subCategory: "Learner personal and socal development",
        stepsTaken: [
          "Organise & conduct a meeting with teachers to discuss the event on Republic day.",
          "List down activities for the event.",
          "Identify ways in which community members can contribute to event.",
          "Identify volunteers from the community to provide support with the event.",
          "Allocate tasks of the event among the teachers and volunteers.",
          "Conduct the Republic day event.",
          "Take feedback from the attendees of the event.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "My parent My inspiration",
        description:
          '"When parents are invited to school to  share their achievements, to talk about their struggles and challenges it creates opportunity for students to learn and relate. Students also feel a sense of pride when they see their parents in the school."',
        objective:
          "HT  invites parents of the school who can come and talk about their achievements.",
        date: "3 weeks",
        subCategory: "Parent Engagement",
        stepsTaken: [
          "Set date and time to call parents for meeting.",
          "Communicate the agenda of the meeting to parents.",
          "Identify parent volunteers.",
          "Collect ideas from parent volunteers to share their journey.",
          "Create a calendar of events and share it.",
          "Share the final plan through WhatsApp/email.",
        ],
        tags: ["Head Teachers"],
      },
      {
        title: "Aao School Chalein ",
        description: null,
        objective:
          "School leaders (Principals, HMs and HTs) will conduct activities for increasing enrolment of students in their schools.",
        date: "1 month",
        subCategory: "SMC & Community Engagement",
        stepsTaken: [
          "Collect and analyze the enrolment data from the last 5 years.",
          "Conduct a meeting with teachers and SMC members to discuss and set the enrolment target for this year.",
          "Form a working committee and plan activities and timeline of the enrolment program.",
          "Conduct different enrolment activities along with the working committee.",
          "Calculate percentage increase in enrolment from the last year and create an enrolment report.",
        ],
        tags: ["Principals, HMs and HTs"],
      },
      {
        title: "Back to school Awareness campaign",
        description:
          "HM with other teachers plans an Awareness drive in the community to educate and inform parents about having children return to school. They will create posters, banners and go around the community. Visit homes of students to talk to parents and educate them about sending children to shcool. They will convey the measures taken by the school for the safety of children.",
        objective:
          "HM will be able to conduct an awareness drive in the community to educate and inform parents about children returning to school.",
        date: "2 Weeks",
        subCategory: "SMC & Community Engagement",
        stepsTaken: [
          "Call Teachers and SMC members for a meeting.",
          "Discuss the information to be shared with parents.",
          "List down the tasks for the awareness campaign.",
          "Distribute the tasks among Teachers and SMC members in the meeting.",
          "Set timelines for completing the tasks in the meeting.",
          "Conduct awareness campaign.",
          "Conduct a de-brief session post the awareness campaign.",
          "Document the learnings, challenges, experiences.",
        ],
        tags: ["HM"],
      },
      {
        title: "Making the vision come alive",
        description: null,
        objective:
          "School leader organises a campaign to communicate & celebrate the school's vision with the staff, students & community members",
        date: "2 weeks",
        subCategory: "Staff engagement",
        stepsTaken: [
          "Plan activities for the campaign with staff members.",
          "Invite the parents and students to participate in the campaign.",
          "Conduct the activities for the school vision campaign.",
          "Capture the best moments of the campaign.",
          "Reflect on the campaign using this form.",
        ],
        tags: ["HM"],
      },
      {
        title: "Re-entry of  school dropouts",
        description: null,
        objective:
          "To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.",
        date: "1 month",
        subCategory: "SMC & Community Engagement",
        stepsTaken: [
          "Create a consolidated list of students who have dropped out of school.",
          "Organise a meeting with teachers and SMC members to identify the reasons for dropouts.",
          "Identify strategies to bring dropout students back into the school system.",
          "Create an action plan.",
          "Allot responsibilities to teachers & SMC members at the meeting based on the action plan.",
          "Implement the strategies.",
          "Conduct a follow-up session for updates and challenges.",
          "Document the learnings, challenges, experiences.",
        ],
        tags: ["HM"],
      },
      {
        title: "1 hour learning challenge",
        description: null,
        objective:
          "Parent engagement with children's learning is critical, and a great way to nudge new practices is through a motivating campaign such as the 1 hour learning challenge",
        date: "4 weeks",
        subCategory: "Parent Enagagement",
        stepsTaken: [
          "Introduce 1 hour learning challenge to HMs.",
          "Support HMs in conducting a discussion with teachers about implementing 1 hour learning challenge.",
          "Support HMs in orienting and motivating parents about 1 hour learning challenge.",
          "Instruct children to participate in 1 hour challenge with their parents.",
          "Appreciate students and parents actively engaging in the challenge.",
          "Support HMs in following up and supporting parents not able to participate in the challenge.",
        ],
        tags: ["CRP"],
      },
    ],
  },
];


interface Blog {
  title: string;
  description: string | null;
  tags: string[];
  date: string | null;
  objective: string | null;
  sqaDomain?: string;
  subCategory: string | null;
  stepsTaken: string[];
  isVideo? : boolean;

}

interface Card {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  route: string;
  blogs?: Blog[];
}

export interface CardsData {
  cardsData: Card[];
}


export const blogsData: Blog[] = [
  // {
  //   title: 'To conduct an exposure visit for parents and students to local primary schools.',
  //   description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
  //   tags: ['HM & Teachers ', 'SMC'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'To enable community to improve the infrastructural development of community surrounding to make the physical space engaging and lively',
  //   description: 'This event may be organized in the village or community a few months before enrolment into Std I and once again once at the time when Std I classes begins.',
  //   tags: ['HM & Teachers ', 'Panchayat'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'To improve the resources available in the school',
  //   description: 'The HM understands the importance of having good school resources.',
  //   tags: ['HM'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'To engage with teachers and SMC members to create a plan to bring back students who have dropped out to school.',
  //   description: '',
  //   tags: ['Teachers', 'Education'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'HT will take a walk around the school to observe that proper safety measures are implemented.',
  //   description: 'HTs takes a walk around school to ensure that the difference spaces in the school',
  //   tags: ['HT And Officials'],
  //   date: '4 weeks'
  // },
  // {
  //   title: 'HT will be able to improve the infrastructural development within the school to make the physical space engaging and lively',
  //   description: 'Building as a Learning Aid , or BaLA - create a plan to develop',
  //   tags: ['HT And Officials'],
  //   date: '4 weeks'
  // },

];


export const exposureVisit: ExposureVisit[] = [
  {
    objective: "To conduct an exposure visit for parents and students to local primary schools.",
    description: "This event may be organized in the village or community a few months before enrollment into Std I and once again at the time when Std I classes begins.",
    recommendedFor: ['HM & Teachers', 'SMC'],
    recommendedDuration: "4 Weeks",
    sqaaDomain: "Curriculum, Pedagogy Assessment",
    subDomain: "Access",
    stepsTaken: [
      "Identify the local primary school to visit for exposure.",
      "Connect with local primary school HM to schedule an exposure visit.",
      "Inform parents about the primary school and exposure visit to school.",
      "Plan the visit to the primary school.",
      "Plan an interactive session with the primary school HM, teacher, and students.",
      "Take feedback from the parents on the visit."
    ]
  },

  {
    objective: "Heyyy an exposure visit for parents and students to local primary schools.",
    description: "This event may be organized in the village or community a few months before enrollment into Std I and once again at the time when Std I classes begin.",
    recommendedFor: ['HM & Teachers', 'SMC'],
    recommendedDuration: "4 Weeks",
    sqaaDomain: "Curriculum, Pedagogy Assessment",
    subDomain: "Access",
    stepsTaken: [
      "Identify the local primary school to visit for exposure.",
      "Connect with local primary school HM to schedule an exposure visit.",
      "Inform parents about the primary school and exposure visit to school.",
      "Plan the visit to the primary school.",
      "Plan an interactive session with the primary school HM, teacher, and students.",
      "Take feedback from the parents on the visit."
    ]
  }
];



export const sortOptions: string[] = [
    "A-Z",
    "Z-A",
]

export const roleOptions : string[] =  [
    "Teachers",
    "HM",
    "HT",
    "SMC",
    "Education Leader",
    "Panchayat",
    "School Leaders",
    "Principal"
]
export interface ExposureVisit {
  objective: string;
  description: string;
  recommendedFor: any;
  recommendedDuration: string;
  sqaaDomain: string;
  subDomain: string;
  stepsTaken: any;
}

// interface Card {
//   title: string;
//   description: string;
//   image: string;
//   buttonLabel: string;
//   route: string;
//   blogs: Blog;
// }

interface Stats {
  stat: string;
  desc: string;
  decimalData?: string;
  sign?: string;
}

interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
}


interface CardDetail {
  time: string;
  title: string;
  description: string;
  tags: string[];
}

// interface Blog {
//   title: string;
//   description: any;
//   date: string;
//   tags: any;
// }