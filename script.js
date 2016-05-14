// Code goes here

;(function() {
  var starRating = {
    init: function() {
      this.catchDom();
      this.bindEvents();
      this.renderUserInput();
    },
    catchDom: function() {
      this.$el = $('#star-rating');
      this.$star = this.$el.find('label');
      this.$form = this.$el.find('#ratingFrm');
      this.$inputRadio = this.$el.find(':input');
      this.$formImprove = this.$el.find('#rating1On');
      this.$formGood = this.$el.find('#rating4On');
      this.$submitButton = this.$el.find('#sumbit5StarRating');
      this.msgBox = this.$el.find('textarea');
      this.selectedVal = null;
    },
    bindEvents: function() {
      this.$star.on('click', function() {
        setTimeout(starRating.getSelectedVal.bind(this), 10);
      });
      this.$submitButton.on('click', function() {
        starRating.submitRating();
      });
    },
    getSelectedVal: function() {
      this.selectedVal = $('#star-rating input:checked').val();
      starRating.showForm(this.selectedVal);
    },
    showForm: function(selectedVal) {
      selectedVal = selectedVal <= 3 ? 'default' : selectedVal;
      var starsCount = {
        5: function() {
          starRating.renderUserInput(selectedVal);
        },
        4: function() {
          starRating.renderUserInput(selectedVal);
        },
        default: function() {
          starRating.renderUserInput('default');
        }
      };
      starsCount[selectedVal]();
    },
    renderUserInput: function(selectedVal) {
      var selectedUserInput, activeVal;

      if (typeof selectedVal === "undefined") return false;

      selectedVal = selectedVal === 'default' ? 1 : selectedVal;

      if (this.selectedVal === selectedVal) return false;
      selectedUserInput = $('#rating' + selectedVal + 'On');

      $('#ratingFrm > div:not(":last-child")').hide('slow');
      $('#rating' + selectedVal + 'On').show('slow');
      $('#sumbit5StarRating').css('display', 'block');
      this.selectedVal = selectedVal;
    },
    submitRating: function() {
      $('.starRating').addClass('posted');
      $('#ratingFrm').hide('slow');
      $('#infoBlk').show('slow');
    }
  };

  starRating.init();

})();
