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
  name: "Mr Oyedeji S.T",
  slug: "mr-oyedeji-st",
  title: "Senior Mathematics Lecturer & WAEC Chief Examiner Consultant, Director",
  role: "Director of Academic Curriculum & Chief Examiner Consultant",
  avatarText: "OS",
  avatarUrl: "/images/instructors/mr-oyedeji-st.jpg",
  shortBio:
    "Senior Mathematics Lecturer, veteran WAEC Chief Examiner Consultant, and Academic Director at Trainbow Hub with over two decades of experience training top distinctions across Nigeria and West Africa.",
  bio:
    "Mr. Oyedeji S.T is a distinguished Nigerian educator, Senior Mathematics Lecturer, and longtime Chief Examiner Consultant to West African examination bodies. With over 22 years in senior secondary, Cambridge International, and university-preparatory mathematics, he has personally trained more than 18,000 students to secure straight A's in WASSCE, UTME, and IGCSE. As Director at Trainbow Hub, Mr Oyedeji oversees the instructional design, curriculum alignment, step-by-step marking schemes, and examiner-vetted video masterclasses across all secondary departments.",
  qualifications: [
    "M.Sc. Mathematics & Educational Measurement",
    "B.Sc. (Ed) Mathematics — First Class Honours",
    "Fellow, Mathematical Association of Nigeria (FMAN)",
    "Certified Cambridge International Assessment Specialist (0580/0607)",
  ],
  examinerCredentials: [
    "Chief Examiner Consultant, WAEC / WASSCE Mathematics & Further Mathematics",
    "Technical Item Moderator, JAMB UTME National Question Bank",
    "Senior Consultant, National Examination Council (NECO)",
    "Advisor, Lagos State Junior Secondary BECE Mathematics Curriculum Review Board",
  ],
  totalStudentsTrained: 18500,
  distinctionRate: "94.8%",
  yearsOfExperience: 22,
  contactEmail: "oyedeji.st@trainbowhub.com",
};

export default PRIMARY_INSTRUCTOR;

