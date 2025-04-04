// JavaScript code to handle adding/removing options, questions, and quizzes dynamically

jQuery(document).ready(function ($) {
  // Add active class to selected radio/checkbox inputs
  $('input[type="radio"], input[type="checkbox"]').on("change", function () {
    var inputType = $(this).attr("type");
    var question = $(this).closest(".question");

    // Remove active class from all inputs in the question
    question.find("label").removeClass("active");

    // Add active class to the selected input
    jQuery(this).closest("label").addClass("active");
  });
  // Handle form submission via AJAX
  $("form.quiz-form").on("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    // Collect form data and the submit button value
    var formData = $(this).serialize();
    var submitValue = $(e.originalEvent.submitter).val();
    console.log(submitValue);

    var isValid = true; // Assume the form is valid initially
    if (submitValue != "previous") {
      // Validate each question
      $(".question").each(function () {
        var errorMessage = $(this).find(".error-message");
        var isAnswered =
          $(this).find(
            "input[type='radio']:checked, input[type='checkbox']:checked"
          ).length > 0;

        if (!isAnswered) {
          isValid = false;
          $(this).addClass("error"); // Add error class
          errorMessage.text("Please select an answer.");
        } else {
          $(this).removeClass("error"); // Remove error class if answered
          errorMessage.text(""); // Clear error message
        }
      });
      if (submitValue == "submit" || submitValue == "Final Submit") {
        // Validate the username field
        var username = $("#username").val();
        if (!username.trim()) {
          isValid = false;
          $("#username").addClass("error"); // Add error class
          $("#username").next(".error-message").text("Please enter your name.");
        } else {
          $("#username").removeClass("error"); // Remove error class if valid
          $("#username").next(".error-message").text(""); // Clear error message
        }

        // Validate the email field
        var email = $("#email").val();
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email regex
        if (!email.trim() || !emailPattern.test(email)) {
          isValid = false;
          $("#email").addClass("error"); // Add error class
          $("#email")
            .next(".error-message")
            .text("Please enter a valid email.");
        } else {
          $("#email").removeClass("error"); // Remove error class if valid
          $("#email").next(".error-message").text(""); // Clear error message
        }

        // Validate the phone field
          var phone = $("#phone").val();
          var phonePattern = /^[0-9]{10}$/; // Ensures exactly 10 digits
          if (!phone.trim() || !phonePattern.test(phone)) {
              console.log("Phone validation failed");
              isValid = false;
              $("#phone").addClass("error");
              $("#phone").next(".error-message").text("Please enter a valid 10-digit phone number.");
          } else {
              console.log("Phone validation passed");
              $("#phone").removeClass("error");
              $("#phone").next(".error-message").text("");
          }
      }
    }
    // If the form is not valid, stop the AJAX request
    if (!isValid) {
      console.log(
        "Please answer all the questions and fill in your name and email before submitting."
      );
      return; // Exit function if validation fails
    }

    // Add the submit button value to the form data
    formData += "&submit_value=" + encodeURIComponent(submitValue);

    // Send AJAX request
    $.ajax({
      url: quiz_ajax_obj.ajax_url, // AJAX URL from WordPress
      type: "POST",
      data:
        formData +
        "&action=handle_quiz_submission&nonce=" +
        quiz_ajax_obj.nonce, // Include action and nonce for security
      success: function (response) {
        if (response.success) {
          // Check if response has the 'data' property with HTML content
          if (response.data.message) {
            // If the response contains a message, display it (optional)
            console.log(response.data.message);
          }

          // Update the form with the new HTML content (progress bar, message, and consultation link)
          $(".quiz-form").html(response.data.form_html);
        } else {
          // Display error message
          console.log(response.data.message);
        }
      },
      error: function (xhr, status, error) {
        // Handle errors (e.g., network issues)
        console.log("An error occurred: " + error);
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let quizContainer = document.getElementById("quiz-container");

  document.getElementById("add-quiz").addEventListener("click", function () {
    let quizIndex = document.querySelectorAll(".quiz-block").length;
    let quizBlock = document.createElement("div");
    quizBlock.classList.add("quiz-block");
    quizBlock.innerHTML = `
        <h2>Quiz <span class="quiz-number">${quizIndex + 1}</span></h2>
        <input type="text" name="quiz_data[${quizIndex}][title]" placeholder="Quiz Title" required>
        <button type="button" class="remove-quiz">Remove Quiz</button>
        <table class="questions-table">
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Options</th>
                    <th>Points</th>
                    <th>Correct Answer(s)</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <button type="button" class="add-question">Add Question</button>
    `;
    quizContainer.appendChild(quizBlock);
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-quiz")) {
      e.target.closest(".quiz-block").remove();
    }
    if (e.target.classList.contains("add-question")) {
      let quizBlock = e.target.closest(".quiz-block");
      let quizIndex = Array.from(quizContainer.children).indexOf(quizBlock);
      let questionTable = quizBlock.querySelector(".questions-table tbody");
      let questionIndex = questionTable.children.length;
      let row = document.createElement("tr");
      row.innerHTML = `
            <td><input type="text" name="quiz_data[${quizIndex}][questions][${questionIndex}][question]" required></td>
            <td>
                <div class="options-container"></div>
                <button type="button" class="add-option">Add Option</button>
            </td>
            <td>
                <select name="quiz_data[${quizIndex}][questions][${questionIndex}][correct_answers][]" multiple></select>
            </td>
            <td><button type="button" class="remove-question">Remove</button></td>
        `;
      questionTable.appendChild(row);
    }
    if (e.target.classList.contains("add-option")) {
      let optionsContainer = e.target.previousElementSibling;
      let quizBlock = e.target.closest(".quiz-block");
      let quizIndex = Array.from(quizContainer.children).indexOf(quizBlock);
      let questionRow = e.target.closest("tr");
      let questionIndex = Array.from(
        questionRow.parentElement.children
      ).indexOf(questionRow);
      let optionIndex = optionsContainer.children.length;
      let optionInput = document.createElement("div");
      optionInput.innerHTML = `
            <input type="text" name="quiz_data[${quizIndex}][questions][${questionIndex}][options][${optionIndex}]" required>
            <select name="quiz_data[${quizIndex}][questions][${questionIndex}][points][${optionIndex}]" required>
                <option value="1">A (Low Burden)</option>
                <option value="2">B (Moderate Burden)</option>
                <option value="3">C (Significant Burden)</option>
                <option value="4">D (Overwhelmed/High Burden)</option>
            </select>
            <button type="button" class="remove-option">✖</button>
        `;
      optionsContainer.appendChild(optionInput);
    }
    if (e.target.classList.contains("remove-option")) {
      e.target.closest("div").remove();
    }
    if (e.target.classList.contains("remove-question")) {
      e.target.closest("tr").remove();
    }
  });
});

document
  .getElementByClass("quiz-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Quiz submitted! (You can handle form submission via AJAX or PHP)");
  });
