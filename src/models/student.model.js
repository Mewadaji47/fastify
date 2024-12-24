const mongoose = require('mongoose');



const AddressSchema = new mongoose.Schema({
 
    address1: String,
    address2: String,
    country: String,
    state: String,
    district: String,
    pinCode: String,
 
});

const ProfessionalDetailsSchema = new mongoose.Schema({
  Handicapped: String,
  Medium: String,

  ScholarshipRequired: String,
  FathersOccupation: String,
  MothersOccupation: String,
  FathersIncome: String,
  MothersIncome: String,
  SamagraId: String,
  AadharNumber: String,
  ParentMobile: String,
});


const AcademicDetailsSchema = new mongoose.Schema({
  tenthSchool: String,
  tenthPassingYear: String,
  tenthRollNo: String,
  tenthBoard: String,
  tenthExamType: String,
  tenthMarksObtain: String,
  tenthMaxMarks: String,
  tenthPercentage: String,
  twelfthSchool: String,
  twelfthPassingYear: String,
  twelfthRollNo: String,
  twelfthBoard: String,
  twelfthExamType: String,
  twelfthMarksObtain: String,
  twelfthMaxMarks: String,
  twelfthPercentage: String,
  graduationCollege: String,
  graduationPassingYear: String,
  graduationRollNo: String,
  graduationUniversity: String,
  graduationExamType: String,
  graduationMarksObtain: String,
  graduationMaxMarks: String,
  graduationPercentage: String,
  postGraduationCollege: String,
  postGraduationPassingYear: String,
  postGraduationRollNo: String,
  postGraduationUniversity: String,
  postGraduationExamType: String,
  postGraduationMarksObtain: String,
  postGraduationMaxMarks: String,
  postGraduationPercentage: String,
  otherSchool: String,
  otherPassingYear: String,
  otherRollNo: String,
  otherBoard: String,
  otherExamType: String,
  otherMarksObtain: String,
  otherMaxMarks: String,
  otherPercentage: String,
});
const DocumentSchema = new mongoose.Schema({
  applicantPhoto:String,
  applicantSignature:String,
  aadharCard:String,
  marksheet10th:String,
  marksheet12th:String,
  undergraduateCertificate:String,
  postgraduateCertificate:String,
  domicileCertificate:String,
  transferCertificate:String,
  incomeCertificate:String,
  migrationCertificate:String,
  diplomaMarksheet:String,
  otherCertificate:String,
   ItImarksheet: String,
  allotmentLetter:String,
  neetScoreCard:String,
  
});


const StudentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
     type:String,
     required:true
  },
  academicDetails: AcademicDetailsSchema,
  address: AddressSchema,
  professional:ProfessionalDetailsSchema,
  dob:{
    type:Date,
    required:true
  } ,
  randomId :{
    type:String,
  },
  IsEnrollGenerated:{
    type:Boolean,
    default:false
  },
  randomPassword:{
    type:String,
  },
  courseName:{
    type:String,
  },
  courseType:{
    type:String,
  },
  courseBranch:{
    type:String
  },
  fathersname:{
    type:String,
  },
  mothersname:{
    type:String,
  },
  qualifyingEntranceExam:{
    type:String
  },
  mobile:{
    type:String,

  },
  domicile:{
    type:String,

  },
  admissionSession:{
    type:String,
  },
  QualifiedCourse:{
    type:String,

  },
  qualificationPercentage:{
    type:String,

  },
  gender:{
    type:String
  },
  lastExamType:{
    type:String,
  },
  qualification:{
    type:String,
  },
  assignedCollege:{
    type:String,
  },
  passingYear:{
    type:String
  },
  category:{
    type:String,
  },
entranceBasedTypeanceExam:{
    type:String,
  },
  nationality:{
    type:String
  },
  isApproved:{
    type:Boolean,
    default:false
  },
  isEnrolled:{
    type:Boolean,
    default:false
  },
  isRegistered:{
    type:Boolean,
    default:false
  },
  isPaid:{
    type:Boolean,
    default:false
  },
    isEnrollPaid:{
    type:Boolean,
    default:false
  },
  enrollmentNumber:{
    type:String
  },
  Documents:DocumentSchema,
  currentSemester: {
    type: Number,
    default: 0,
  },
  admissionDate:{
      type:String
  },



 AbcId:{
    type: String
  },
  lastPassedSubject: {
    type: String,
  },
  ObtainedMarks: {
    type: String,
  },

  LastPercentage: {
    type: String,
  },

  lastExamType: {
    type: String,
  },
  NeetPercentage: {
    type: String,
  },
  Concession:{
      type:String
  },
 
  StudentType: {
    type: String,
    enum: ["EPravesh", "Normal"],
  },
  
  semesterScheme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SemesterScheme',
  },


    
},{timestamps:true});





const Student = mongoose.model('Students',StudentSchema)

module.exports = Student;