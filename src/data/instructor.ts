export interface InstructorProfile {
  id: string;
  name: string;
  slug: string;
  title: string;
  role: string;
  avatarText: string;
  avatarUrl: string;
  bio: string;
  shortBio: string;
  qualifications: string[];
  examinerCredentials: string[];
  totalStudentsTrained: number;
  distinctionRate: string;
  yearsOfExperience: number;
  contactEmail: string;
}

/**
 * Single source of truth for the course instructor across the entire Trainbow Hub platform.
 * Mr Oyedeji S.T teaches and directs all academic curriculum offerings.
 */
export const PRIMARY_INSTRUCTOR: InstructorProfile = {
  id: "inst-mr-oyedeji-st",
  name: "Mr Oyedeji S.T.",
  slug: "mr-oyedeji-st",
  title: "Educator. Learning Innovator. Founder of Trainbow Hub.",
  role: "Founder & Director of Trainbow Hub",
  avatarText: "OS",
  avatarUrl: "/images/instructors/mr-oyedeji-st.jpg",
  shortBio:
    "Educator, Learning Innovator, and Founder of Trainbow Hub with over 15 years of teaching experience and a B.Sc. in Mathematics Education from the University of Lagos.",
  bio:
    "Mr Oyedeji S.T. is a Nigerian educator with over 15 years of teaching experience and a B.Sc. in Mathematics Education from the University of Lagos. He is a TRCN-certified teacher with a passion for making quality education more accessible, engaging and effective.\n\nAs the founder of Trainbow Hub, he is building a modern learning ecosystem that gives every student four ways to grow:\n\n• Academy: Structured lessons, quizzes and examination-focused learning resources aligned with WAEC, NECO, UTME and Cambridge standards.\n• AI: Intelligent, instant study assistance that helps learners understand difficult concepts, practise and learn at their own pace.\n• Tutors: Access to personalised academic support through tutor matching.\n• Music: Opportunities to explore music theory and develop practical instrumental skills.\n\nDriven by the belief that every learner deserves the opportunity to excel, he combines years of classroom experience with educational technology to make learning more accessible, personalised and rewarding.\n\nA Message to Parents: Your child's potential deserves the right environment to flourish. At Trainbow Hub, we bring quality teaching, smart learning technology and personalised support together to help your child learn better, grow in confidence and achieve more.\n\nGive your child a better way to learn. Welcome to Trainbow Hub.",
  qualifications: [
    "B.Sc. in Mathematics Education — University of Lagos",
    "TRCN-Certified Teacher (Teachers Registration Council of Nigeria)",
    "Educational Technology & Curriculum Innovation Specialist",
    "Cambridge & West African Examination Preparation Lead",
  ],
  examinerCredentials: [
    "Over 15 Years of Classroom and Examination Preparation Experience",
    "Curriculum Alignment Specialist for WAEC, NECO, UTME and Cambridge Standards",
    "Founder & Lead Educational Innovator, Trainbow Hub",
    "Director of Tutor Verification & Quality Safeguarding",
  ],
  totalStudentsTrained: 18500,
  distinctionRate: "94.8%",
  yearsOfExperience: 15,
  contactEmail: "oyedeji.st@trainbowhub.com",
};

export default PRIMARY_INSTRUCTOR;

