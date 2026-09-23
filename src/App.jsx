import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import Home from "./pages/public/Home";
import History from "./pages/public/about/History";
import OurCollege from "./pages/public/about/OurCollege";
import OurInspiration from "./pages/public/about/OurInspiration";
import Objectives from "./pages/public/about/Objectives";
import VisionMission from "./pages/public/about/VisionMission";
import Affiliation from "./pages/public/about/Affiliation";
import GoverningBody from "./pages/public/about/GoverningBody";
import CodeOfConduct from "./pages/public/about/CodeOfConduct";
import OrganizationalStructure from "./pages/public/about/OrganizationalStructure";
import CommitteeCellsClub from "./pages/public/about/CommitteeCellsClub";
import BestPractices from "./pages/public/about/BestPractices";
import CoursesOffered from "./pages/public/academics/CoursesOffered";
import UnderGraduate from "./pages/public/academics/UnderGraduate";
import PostGraduate from "./pages/public/academics/PostGraduate";
import OtherCourses from "./pages/public/academics/OtherCourses";
import ProgramLearningOutcomes from "./pages/public/academics/ProgramLearningOutcomes";
import AdmissionSchedule from "./pages/public/academics/AdmissionSchedule";
import Eligibility from "./pages/public/academics/Eligibility";
import EligibilityUnderGraduate from "./pages/public/academics/EligibilityUnderGraduate";
import EligibilityPostGraduate from "./pages/public/academics/EligibilityPostGraduate";
import EligibilityOther from "./pages/public/academics/EligibilityOther";
import FeeStructure from "./pages/public/academics/FeeStructure";
import UGFees from "./pages/public/academics/UGFees";
import PGFees from "./pages/public/academics/PGFees";
import OtherFees from "./pages/public/academics/OtherFees";
import FeeConcession from "./pages/public/academics/FeeConcession";
import AcademicCalendar from "./pages/public/academics/AcademicCalendar";
import ScholarshipDetails from "./pages/public/academics/ScholarshipDetails";
import UpcomingCourses from "./pages/public/academics/UpcomingCourses";
import TeachingStaff from "./pages/public/faculty/TeachingStaff";
import NonTeachingStaff from "./pages/public/faculty/NonTeachingStaff";
import Infrastructure from "./pages/public/facilities/Infrastructure";
import Labs from "./pages/public/facilities/Labs";
import Library from "./pages/public/facilities/Library";
import Hostel from "./pages/public/facilities/Hostel";
import Sports from "./pages/public/facilities/Sports";
import Cultural from "./pages/public/facilities/Cultural";
import Canteen from "./pages/public/facilities/Canteen";
import Research from "./pages/public/facilities/Research";
import TimeTable from "./pages/public/student/TimeTable";
import Notices from "./pages/public/student/Notices";
import Rules from "./pages/public/student/Rules";
import ImportantInstructions from "./pages/public/student/ImportantInstructions";
import MajorAchievements from "./pages/public/student/MajorAchievements";
import StudentProfile from "./pages/public/student/StudentProfile";
import Examination from "./pages/public/student/Examination";
import DateSheet from "./pages/public/student/DateSheet";
import Results from "./pages/public/student/Results";
import LessonPlan from "./pages/public/student/LessonPlan";
import SCBCCell from "./pages/public/student/SCBCCell";
import ExtensionActivities from "./pages/public/student/ExtensionActivities";
import NAAC from "./pages/public/iqac/NAAC";
import IQACCommittee from "./pages/public/iqac/IQACCommittee";
import AQAR from "./pages/public/iqac/AQAR";
import IQACMeetings from "./pages/public/iqac/IQACMeetings";
import InstitutionalDevelopmentPlan from "./pages/public/iqac/InstitutionalDevelopmentPlan";
import NSS from "./pages/public/community/NSS";
import NCC from "./pages/public/community/NCC";
import YouthRedCross from "./pages/public/community/YouthRedCross";
import UniversityOutreach from "./pages/public/community/UniversityOutreach";
import WomenCell from "./pages/public/community/WomenCell";
import GenderChampion from "./pages/public/community/GenderChampion";
import LegalLiteracy from "./pages/public/community/LegalLiteracy";
import EkBharat from "./pages/public/community/EkBharat";
import AntiSexualHarassment from "./pages/public/community/AntiSexualHarassment";
import OurPride from "./pages/public/footer/OurPride";
import LocationMap from "./pages/public/footer/LocationMap";
import ImageGallery from "./pages/public/footer/ImageGallery";
import AlumniRegistration from "./pages/public/footer/AlumniRegistration";
import NCTE from "./pages/public/footer/NCTE";
import AICTE from "./pages/public/footer/AICTE";
import Education from "./pages/public/footer/Education";
import GuestFaculty from "./pages/public/footer/GuestFaculty";
import FooterResults from "./pages/public/footer/Results";
import Delnet from "./pages/public/footer/Delnet";
import Inflibnet from "./pages/public/footer/Inflibnet";
import AcademicProgrammes from "./pages/public/footer/AcademicProgrammes";

import StudentGrievances from "./pages/public/footer/StudentGrievances";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminContact from "./pages/admin/AdminContact";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminAcademicPrograms from "./pages/admin/AdminAcademicPrograms";
import AdminAbout from "./pages/admin/AdminAbout";
import AdminInquiries from "./pages/admin/AdminInquiries";
import AdminFaculty from "./pages/admin/AdminFaculty";
import AdminAcademics from "./pages/admin/AdminAcademics";
import AdminFacilities from "./pages/admin/AdminFacilities";
import AdminNews from "./pages/admin/AdminNews";
import AboutUs from "./pages/public/AboutUs";
import Academics from "./pages/public/Academics";
import Faculty from "./pages/public/Faculty";
import Facilities from "./pages/public/Facilities";
import StudentCorner from "./pages/public/StudentCorner";
import IQAC from "./pages/public/IQAC";
import CommunityServices from "./pages/public/CommunityServices";
import Contact from "./pages/public/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPopup from "./pages/admin/AdminPopup";
import PopupNotice from "./pages/public/PopupNotice";
function AdminGuard({children}){return localStorage.getItem("mkjk_admin_auth")==="1"?children:<Navigate to="/admin/mkjklogin" replace/>}
export default function App() {
  return <Routes>
<Route path="/admin/mkjklogin" element={<AdminLogin/> } />
<Route path="/admin/dashboard" element={<AdminGuard><AdminDashboard/></AdminGuard> } />
<Route path="/admin/contact" element={<AdminGuard><AdminContact/></AdminGuard> } />
<Route path="/admin/inquiries" element={<AdminGuard><AdminInquiries/></AdminGuard> } />
<Route path="/admin/popup" element={<AdminGuard><AdminPopup/></AdminGuard> } />
<Route path="/admin/courses" element={<AdminGuard><AdminCourses/></AdminGuard> } />
<Route path="/admin/academic-programs" element={<AdminGuard><AdminAcademicPrograms/></AdminGuard> } />
<Route path="/admin/about" element={<AdminGuard><AdminAbout/></AdminGuard> } />
<Route path="/admin/faculty" element={<AdminGuard><AdminFaculty/></AdminGuard> } />
<Route path="/admin/academics" element={<AdminGuard><AdminAcademics/></AdminGuard> } />
<Route path="/admin/facilities" element={<AdminGuard><AdminFacilities/></AdminGuard> } />
<Route path="/admin/news" element={<AdminGuard><AdminNews/></AdminGuard> } />
<Route path="/" element={<PublicLayout><Home/></PublicLayout>} />
<Route path="/about" element={<PublicLayout><AboutUs/></PublicLayout>} />
<Route path="/academics" element={<PublicLayout><Academics/></PublicLayout>} />
<Route path="/faculty" element={<PublicLayout><Faculty/></PublicLayout>} />
<Route path="/facilities" element={<PublicLayout><Facilities/></PublicLayout>} />
<Route path="/student-corner" element={<PublicLayout><StudentCorner/></PublicLayout>} />
<Route path="/iqac" element={<PublicLayout><IQAC/></PublicLayout>} />
<Route path="/community-services" element={<PublicLayout><CommunityServices/></PublicLayout>} />
<Route path="/contact" element={<PublicLayout><Contact/></PublicLayout>} />
<Route path="/about/history" element={<PublicLayout><History/></PublicLayout>} />
<Route path="/about/our-college" element={<PublicLayout><OurCollege/></PublicLayout>} />
<Route path="/about/our-inspiration" element={<PublicLayout><OurInspiration/></PublicLayout>} />
<Route path="/about/objectives" element={<PublicLayout><Objectives/></PublicLayout>} />
<Route path="/about/vision-mission" element={<PublicLayout><VisionMission/></PublicLayout>} />
<Route path="/about/affiliation" element={<PublicLayout><Affiliation/></PublicLayout>} />
<Route path="/about/governing-body" element={<PublicLayout><GoverningBody/></PublicLayout>} />
<Route path="/about/code-of-conduct" element={<PublicLayout><CodeOfConduct/></PublicLayout>} />
<Route path="/about/organizational-structure" element={<PublicLayout><OrganizationalStructure/></PublicLayout>} />
<Route path="/about/committee-cells-club" element={<PublicLayout><CommitteeCellsClub/></PublicLayout>} />
<Route path="/about/best-practices" element={<PublicLayout><BestPractices/></PublicLayout>} />
<Route path="/academics/courses-offered" element={<PublicLayout><CoursesOffered/></PublicLayout>} />
<Route path="/academics/undergraduate" element={<PublicLayout><UnderGraduate/></PublicLayout>} />

<Route path="/footer/student-grievances-redressal-cell" element={<PublicLayout><StudentGrievances/></PublicLayout>} />

<Route path="/academics/postgraduate" element={<PublicLayout><PostGraduate/></PublicLayout>} />
<Route path="/academics/other-courses" element={<PublicLayout><OtherCourses/></PublicLayout>} />
<Route path="/academics/program-learning-outcomes" element={<PublicLayout><ProgramLearningOutcomes/></PublicLayout>} />
<Route path="/academics/admission-schedule" element={<PublicLayout><AdmissionSchedule/></PublicLayout>} />
<Route path="/academics/eligibility" element={<PublicLayout><Eligibility/></PublicLayout>} />
<Route path="/academics/eligibility/undergraduate" element={<PublicLayout><EligibilityUnderGraduate/></PublicLayout>} />
<Route path="/academics/eligibility/postgraduate" element={<PublicLayout><EligibilityPostGraduate/></PublicLayout>} />
<Route path="/academics/eligibility/other" element={<PublicLayout><EligibilityOther/></PublicLayout>} />
<Route path="/academics/fee-structure" element={<PublicLayout><FeeStructure/></PublicLayout>} />
<Route path="/academics/fee-structure/undergraduate" element={<PublicLayout><UGFees/></PublicLayout>} />
<Route path="/academics/fee-structure/postgraduate" element={<PublicLayout><PGFees/></PublicLayout>} />
<Route path="/academics/fee-structure/other" element={<PublicLayout><OtherFees/></PublicLayout>} />
<Route path="/academics/fee-concession" element={<PublicLayout><FeeConcession/></PublicLayout>} />
<Route path="/academics/academic-calendar" element={<PublicLayout><AcademicCalendar/></PublicLayout>} />
<Route path="/academics/scholarship-details" element={<PublicLayout><ScholarshipDetails/></PublicLayout>} />
<Route path="/academics/upcoming-courses" element={<PublicLayout><UpcomingCourses/></PublicLayout>} />
<Route path="/faculty/teaching-staff" element={<PublicLayout><TeachingStaff/></PublicLayout>} />
<Route path="/faculty/non-teaching-staff" element={<PublicLayout><NonTeachingStaff/></PublicLayout>} />
<Route path="/facilities/infrastructure" element={<PublicLayout><Infrastructure/></PublicLayout>} />
<Route path="/facilities/labs" element={<PublicLayout><Labs/></PublicLayout>} />
<Route path="/facilities/library" element={<PublicLayout><Library/></PublicLayout>} />
<Route path="/facilities/hostel" element={<PublicLayout><Hostel/></PublicLayout>} />
<Route path="/facilities/sports" element={<PublicLayout><Sports/></PublicLayout>} />
<Route path="/facilities/cultural" element={<PublicLayout><Cultural/></PublicLayout>} />
<Route path="/facilities/canteen" element={<PublicLayout><Canteen/></PublicLayout>} />
<Route path="/facilities/research" element={<PublicLayout><Research/></PublicLayout>} />
<Route path="/student/time-table" element={<PublicLayout><TimeTable/></PublicLayout>} />
<Route path="/student/notices" element={<PublicLayout><Notices/></PublicLayout>} />
<Route path="/student/rules" element={<PublicLayout><Rules/></PublicLayout>} />
<Route path="/student/important-instructions" element={<PublicLayout><ImportantInstructions/></PublicLayout>} />
<Route path="/student/major-achievements" element={<PublicLayout><MajorAchievements/></PublicLayout>} />
<Route path="/student/student-profile" element={<PublicLayout><StudentProfile/></PublicLayout>} />
<Route path="/student/examination" element={<PublicLayout><Examination/></PublicLayout>} />
<Route path="/student/date-sheet" element={<PublicLayout><DateSheet/></PublicLayout>} />
<Route path="/student/results" element={<PublicLayout><Results/></PublicLayout>} />
<Route path="/student/lesson-plan" element={<PublicLayout><LessonPlan/></PublicLayout>} />
<Route path="/student/scbc-cell" element={<PublicLayout><SCBCCell/></PublicLayout>} />
<Route path="/student/extension-activities" element={<PublicLayout><ExtensionActivities/></PublicLayout>} />
<Route path="/iqac/naac" element={<PublicLayout><NAAC/></PublicLayout>} />
<Route path="/iqac/committee" element={<PublicLayout><IQACCommittee/></PublicLayout>} />
<Route path="/iqac/aqar" element={<PublicLayout><AQAR/></PublicLayout>} />
<Route path="/iqac/meetings" element={<PublicLayout><IQACMeetings/></PublicLayout>} />
<Route path="/iqac/development-plan" element={<PublicLayout><InstitutionalDevelopmentPlan/></PublicLayout>} />
<Route path="/community/nss" element={<PublicLayout><NSS/></PublicLayout>} />
<Route path="/community/ncc" element={<PublicLayout><NCC/></PublicLayout>} />
<Route path="/community/youth-red-cross" element={<PublicLayout><YouthRedCross/></PublicLayout>} />
<Route path="/community/university-outreach" element={<PublicLayout><UniversityOutreach/></PublicLayout>} />
<Route path="/community/women-cell" element={<PublicLayout><WomenCell/></PublicLayout>} />
<Route path="/community/gender-champion" element={<PublicLayout><GenderChampion/></PublicLayout>} />
<Route path="/community/legal-literacy" element={<PublicLayout><LegalLiteracy/></PublicLayout>} />
<Route path="/community/ek-bharat" element={<PublicLayout><EkBharat/></PublicLayout>} />
<Route path="/community/anti-sexual-harassment" element={<PublicLayout><AntiSexualHarassment/></PublicLayout>} />
<Route path="/footer/our-pride" element={<PublicLayout><OurPride/></PublicLayout>} />
<Route path="/footer/location-map" element={<PublicLayout><LocationMap/></PublicLayout>} />
<Route path="/footer/image-gallery" element={<PublicLayout><ImageGallery/></PublicLayout>} />
<Route path="/footer/alumni-registration" element={<PublicLayout><AlumniRegistration/></PublicLayout>} />
<Route path="/footer/ncte" element={<PublicLayout><NCTE/></PublicLayout>} />
<Route path="/footer/aicte" element={<PublicLayout><AICTE/></PublicLayout>} />
<Route path="/footer/education" element={<PublicLayout><Education/></PublicLayout>} />
<Route path="/footer/guest-faculty" element={<PublicLayout><GuestFaculty/></PublicLayout>} />
<Route path="/footer/results" element={<PublicLayout><FooterResults/></PublicLayout>} />
<Route path="/footer/delnet" element={<PublicLayout><Delnet/></PublicLayout>} />
<Route path="/footer/inflibnet" element={<PublicLayout><Inflibnet/></PublicLayout>} />
<Route path="/footer/academic-programmes" element={<PublicLayout><AcademicProgrammes/></PublicLayout>} />
<Route path="/popup" element={<PublicLayout><PopupNotice/></PublicLayout>} />
<Route path="/notice-popup" element={<PublicLayout><PopupNotice/></PublicLayout>} />
<Route path="*" element={<Navigate to="/" replace/>}/></Routes>
}
