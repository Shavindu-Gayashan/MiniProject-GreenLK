new Vue({
    el: '#app',
    data: {
      feedback: {
        name: '',
        email: '',
        message: ''
      },
      submissionMessage: 'Feedback Submited'
    },
    methods: {
      submitFeedback() {
        console.log('Feedback submitted:', this.feedback);
  
       
        setTimeout(() => {
          this.submissionMessage = '';
          this.resetForm();
        }, 2000);
      },
      resetForm() {
        this.feedback.name = '';
        this.feedback.email = '';
        this.feedback.message = '';
      }
    }
  });
  