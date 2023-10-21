export const roots = {
  auth: {
    login: 'auth/login',
    signup: 'auth/register',
    uploadcv: 'candidates/uploadcv',
    countries: 'countries',
    getUserData: '/get-user-data',
    forgetPassword: '/forget-password',
  },

  profile:{
    getProfile: 'users/profile/',
    updataProfile: 'users/profile-update/',
    resumeUpload: 'users/resume-upload/',
    newSkill: 'users/new-skill/',
    newEducation: 'users/new-education/',
    newExperience: 'users/new-experience/',
    newCertification: 'users/new-certification/',
    newLanguage: 'users/new-language/',
    skillAssessment: 'users/skill-assessment/',

  },

  jops :{
    jobsNew: 'jobs/new',
    jobs: 'jobs/',
    recommendation: 'jobs/recommendations/',
   all: 'jobs/all',
   jobApplicants: 'jobs/job-applicants/',
   jobsApply: 'jobs/apply/',
  }

}
