* {
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #1f2d3d;
  }
  
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: #ee5253;
  }
  
  body::after {
    content: "kimbug©";
    display: block;
    margin-top: 50px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
  }
  
  .sr-only {
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: -1;
    width: 1px;
    height: 1px;
    overflow: hidden;
    visibility: hidden;
  }
  
  .inbox {
    max-width: 1140px;
    border-collapse: collapse;
    border-radius: 4px;
    background-color: #fff;
    font-size: 13.5px;
    color: #212529;
    white-space: nowrap;
  }
  
  .inbox thead {
    position: absolute;
    z-index: -1;
  }
  
  .inbox tr {
    transition: box-shadow 150ms ease-in-out;
  }
  
  .inbox tr:not(:last-child) {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  }
  
  .inbox tr:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.14);
  }
  
  .inbox tr.unread {
    font-weight: 700;
  }
  
  .inbox tr.unread span {
    font-weight: 400 !important;
  }
  
  .inbox span:not(:nth-child(2)) {
    opacity: 0.75;
  }
  
  .inbox th,
  .inbox td {
    padding: 8px 16px;
  }
  
  .inbox th:nth-child(3),
  .inbox td:nth-child(3) {
    padding-right: 64px;
  }
  
  .inbox th:last-child,
  .inbox td:last-child {
    font-size: 12px;
  }
  
  .inbox a {
    color: inherit;
    text-decoration: none;
  }
  
  .inbox-actions {
    display: flex;
    align-items: center;
  }
  
  .inbox-actions > * {
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0 2px;
  }
  
  .inbox-star,
  .inbox-checkbox::after {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: opacity 100ms;
  }
  
  .inbox-star:hover,
  .inbox-checkbox:hover::after {
    opacity: 0.75;
  }
  
  .inbox-star:focus,
  .inbox-checkbox:focus {
    outline: none;
    box-shadow: none;
  }
  
  .inbox-star {
    background-image: url(./assets/icon-star-border.svg);
  }
  
  .inbox-star.active {
    background-image: url(./assets/icon-star.svg);
  }
  
  .inbox-checkbox::after {
    content: "";
    background-size: 90% auto;
    background-image: url(./assets/icon-checkbox-outlined.svg);
  }
  
  .inbox-checkbox.active::after {
    background-image: url(./assets/icon-checkbox-checked.svg);
  }
  
  .inbox-checkbox {
    position: relative;
    top: 1px;
    overflow: hidden;
  }
  
  .inbox-checkbox input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }