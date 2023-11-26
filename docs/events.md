---
hide:
  - toc
---

# Events, Workshops und Unterweisungen

<style>
  .event-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow-x: auto;
  }

  .event {
    background: var(--high-contrast-bg);
    margin-bottom: 20px;
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    width: 850px;
    color: var(--high-contrast-font);
  }

  .event-content {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .event-image-container {
    display: flex;
    position: relative;
    height: 300px;
    width: 400px;
    overflow: hidden;
    margin-right: 10px;
    border-radius: var(--border-radius);
  }

  .event-img {
    background-size: cover;
  }

  .event-details {
    width: 360px;
  }

  .event h2 {
    margin-top: 0;
    font-weight: bold;
  }

  .event p {
    margin: 10px 0;
  }

  .event form {
    width: 100%;
    max-width: 1200px;
    min-width: 400px;
    margin: 0 auto;
    background-color:var(--contact-form);
    padding: 20px;
    border-radius: var(--border-radius);
    margin-top: 10px;
  }

  .event-subject textarea {
    width: 100%;
    height: auto;  /* Adjust the height to fit the content */
    resize: none;  /* Prevent resizing of the textarea */
    color:var(--high-contrast-font);
    font-size: 1.3em;
    padding: 2px;
    background-color: var(--contact-form);
    border-color: var(--contact-form);
  }

  @media only screen and (max-width: 849px) {
  .event {
    width: 100%;
    max-width: 550px;
    min-width: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .event-content {
    flex-wrap: wrap;
  }

  .image-container {
    width: 100%;
    aspect-ratio: 4 / 3;
    height: auto;
  }

  .event-details {
    width: 100%;
    text-align: center;
    overflow: auto;
  }
  }
</style>

<div class="event-wrapper">
<div id="events"></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>
<script src="../javascripts/events.js"></script>



