body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  .dashboard-container {
    display: flex;
  }
  .sidebar {
    padding-top: 10px;
    border-radius: 7px;
    overflow-y: auto; /* Enable vertical scroll */
    box-shadow: 2px 0 5px rgba(59, 92, 97, 0.1); /* Sidebar shadow effect */
  }
  
  .sidebar .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .sidebar .logo img {
    width: 235px; /* Adjust the logo size */
    height: auto;
    border-radius: 10px; /* Optional: Rounded corners */
    margin-bottom: 10px; 
  }
  
  .sidebar .logo h2 {
    font-size: 20px;
    margin: 0;
    color: rgb(255, 255, 255);
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar .menu-item {
    padding: 6px;
    cursor: pointer;
  }
  
  .sidebar .menu-item:hover {
    background-color: #023d5f;
    color: white;
    border-radius: 7px;
  }
  
  .sidebar .menu-item a {
    text-decoration: none;
    color: rgb(0, 0, 0);
  }
  .sidebar .menu-item a:hover {
    background-color: #023d5f;
    color: rgb(255, 255, 255);
    border-radius: 7px;
  }
  
  .sidebar .menu-item a.active {
    background-color: #023d5f;
    color: white;
    border-radius: 7px;
  }
  
  .menu-item .menu-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
  }
  
  .menu-item .menu-title span {
    margin: 0 8px;
  }
  
  .submenu-item {
        display: flex;
        align-items: center;
        padding: 3px 4px;
  }
  
  .submenu-item span {
    margin-right: 8px;
  }
  
  .menu-item .dropdown {
    margin-left: 20px;
    list-style: none;
  }
  
  .menu-item .dropdown .submenu-item a  {
    display: flex;
    /* justify-content: space-between; */
  }
  .menu-item .dropdown .submenu-item a  span {
    display: flex  ;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        cursor: pointer;
    
  }
  .menu-item.open .dropdown {
    display: block; /* Dropdown always visible when open */
  }
  .menu-item .dropdown {
    display: none; /* Default hidden */
  }
  
  .menu-item .dropdown .submenu-item.active {
    background-color: #355058; /* Customize active submenu color */
    color: #fff;
    border-radius: 7px;
  }
  
  .menu-item .dropdown .submenu-item.active a {
    color: #fff; 
  }
  
  .menu-item .dropdown .submenu-item:hover {
    background-color: #2a5057;
  }
  
  .sidebar .dropdown {
    padding-left: 6px;
    margin-left: 20px;
  }
  
  .topbar {
    background-color: #34495e;
    color: white;
    padding: 15px;
    position: fixed;
    width: calc(100% - 250px);
    left: 250px;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .main-content {
    margin-left: 0px;
    margin-top: 60px;
    padding: 20px;
  }
  
  /* Keep the submenu hidden, only show when the corresponding index is active */
  .sidebar .menu-item.active .dropdown {
    display: block;
  }
  .main-content {
    padding: 20px;
    overflow-y: auto;
    height: calc(100vh - 50px); /* Ensure space for the top bar */
  }
  
  /* -----------sidebar------------ */
  
  .dashboard-container {
  display: flex;
  }
  
  .main-content {
  margin-left:0px;
  margin-top: 60px;
  padding: 65px;
  display: flex;
  flex-direction: column;
  width: 1200px;
  
  }
  
  .topbar {
    display: flex  ;
        justify-content: space-between;
        align-items: center;
        background-color: #fafafa;
        color: rgb(0, 0, 0);
        height: 80px;
        padding: 0 20px;
        position: fixed;
        width: calc(100% - 300px);
        left: 300px;
        top: 0;
        z-index: 1000;
  }
  
  .topbar .notifications,
  .topbar .messages {
  cursor: pointer;
  }
  
  .topbar .icon {
  font-size: 20px;
  }
  
  .topbar .profile-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  }
  
  .topbar .profile-icon {
  font-size: 24px;
  margin-right: 10px;
  }
  
  .topbar .admin-name {
  font-size: 16px;
  font-weight: bold;
  }
  
  .topbar .dropdown-menu {
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  list-style: none;
  
  }
  
  .topbar .dropdown-menu li {
  padding: 5px 10px;
  }
  
  .topbar .dropdown-menu li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  display: flex;
  align-items: center;
  }
  
  .topbar .dropdown-menu li a:hover {
  background-color: #797979;
  color: white;
  }
  
  .topbar .dropdown-menu li a svg {
  margin-right: 8px;
  }
  
  .topbar .profile-dropdown:hover .dropdown-menu {
  display: block;
  }
  
  /* -----imageupload----- */
  .gallery-upload-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  /* text-align: center;  this is fontend */
  }
  
  .input-group {
  width: 100%;
  margin-bottom: 15px;
  }
  
  .input-group label {
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
  display: block;
  }
  
  .input-group input {
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  }
  
  .input-group input:focus {
  border-color: #007bff;
  outline: none;
  }
  
  .image-preview-container {
  width: 50%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  }
  
  .image-preview {
  max-width: 20%;
  max-height: 200px;
  border-radius: 5px;
  object-fit: cover;
  }
  
  .image-placeholder {
  width: 100%;
  height: 130px;
  border: 1px dashed #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  }
  
  .upload-button {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 50%;
  margin-top: 20px;
  }
  
  .upload-button:hover {
  background-color: #0056b3;
  }
  
  .upload-button:active {
  background-color: #003f7f;
  }
  
  /* ------------- */
  /* -----------addcourse----------- */
  .course-form {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 20px; /* Spacing between columns and rows */
  }
  
  .form-group {
  display: flex;
  flex-direction: column;
  }
  
  .form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  }
  
  .form-group input,
  .form-group textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  }
  
  /* Full-width elements spanning both columns */
  .form-group.full-width {
  grid-column: span 2; /* Span across both columns */
  }
  
  .submit-btn {
  grid-column: span 2; /* Center submit button */
  background-color: #2980b9;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-self: center; /* Center align button */
  }
  
  .submit-btn:hover {
  background-color: #1e6a8a;
  }
  
  
  /* -----staff------ */
  .staff-list {
    padding: 20px;
  }
  
  
  .view-toggle button {
    margin: 5px;
  }
  
  .staff-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .staff-table th, .staff-table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  .staff-table th {
    background-color: #f4f4f4;
  }
  
  .staff-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .staff-item {
    background-color: #f9f9f9;
    padding: 15px;
    border: 1px solid #ddd;
    text-align: center;
  }
  
  .staff-photo {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .staff-details {
    text-align: left;
  }
  
  .staff-actions {
    margin-top: 10px;
  }
  
  .staff-actions a {
    margin-right: 10px;
  }
  
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
  
  .pagination button {
    padding: 5px 10px;
    margin: 0 5px;
  }
  
  .add-staff-form {
    width: 50%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    /* text-align: center;   //frontend */
    margin-bottom: 20px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  input[type="text"], input[type="email"], input[type="date"], input[type="file"] {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 4px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .photo-preview {
    margin-top: 10px;
    max-width: 200px;
    height: auto;
    border-radius: 8px;
  }
  .staff-photo-wrapper {
    position: relative;
    text-align: center; /* Center align for the photo and dots */
  }
  
  .menu-button {
    display: block;
    margin: 10px auto 0; /* Add spacing below the photo */
    background: none;
    border: none;
    font-size: 24px; /* Size of the three dots */
    cursor: pointer;
    color: #000; /* Dots color */
  }
  
  .menu-options {
    display: none;
    position: absolute;
    top: 50px; /* Adjust dropdown position relative to the dots */
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    border-radius: 5px;
  }
  
  .menu-options button {
    display: block;
    width: 100%;
    padding: 10px;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }
  
  .menu-options button:hover {
    background-color: #f0f0f0;
  }
  
  .menu-button:hover + .menu-options,
  .menu-options:hover {
    display: block;
  }
  
  .menu-text {
    display: block;
    margin: 5px 0;
    color: blue;
    cursor: pointer;
    text-decoration: underline;
    font-size: 14px;
  }
  
  .menu-text:hover {
    color: darkblue;
  }
  .menu-container {
    position: relative;
  }
  
  .menu-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
  .menu-options {
    position: absolute;
    top: 25px;
    right: 0;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 5px;
    z-index: 10;
  }
  
  .menu-text {
    display: block;
    margin: 5px 0;
    color: blue;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
  }
  
  .menu-text:hover {
    color: darkblue;
  }
  
  .staff-photo-wrapper {
    position: relative;
    text-align: center;
  }
  .view-toggle {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .view-toggle-button {
    padding: 10px 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    color: #333;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .view-toggle-button.active {
    background-color: #007bff; /* Active background color */
    color: white; /* Active text color */
    border-color: #007bff; /* Active border color */
  }
  
  .view-toggle-button:hover {
    background-color: #e6e6e6; /* Hover background color */
    color: #333; /* Hover text color */
  }
  
  .staff-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .staff-item {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
  
  .menu-container {
    position: relative;
  }
  
  .menu-options {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .menu-text {
    display: block;
    padding: 8px 12px;
    cursor: pointer;
  }
  
  .menu-text:hover {
    background-color: #f5f5f5;
  }
  .staff-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .view-toggle {
    display: flex;
    gap: 10px;
  }
  
  .view-toggle-button {
    padding: 10px 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    color: #333;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .view-toggle-button.active {
    background-color: #007bff; /* Active background color */
    color: white; /* Active text color */
    border-color: #007bff; /* Active border color */
  }
  
  .view-toggle-button:hover {
    background-color: #e6e6e6; /* Hover background color */
    color: #333; /* Hover text color */
  }
  
  .add-staff-button {
        padding: 4px 15px;
      font-size: 12px;
      color: white;
      background-color: #28a745;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
  }
  
  .add-staff-button:hover {
    background-color: #218838;
  }
  .staff-profile-photo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  .pagination button {
    padding: 10px 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .pagination button.active {
    background-color: #4CAF50; /* Green for active */
    color: white;
  }
  
  .pagination button.inactive {
    background-color: #f1f1f1; /* Light grey for inactive */
    color: #888; /* Grey text color for inactive */
    cursor: not-allowed;
  }
  @media (min-width:768px){
    .topbar  .toggle{
      display: none;
    }
  }
  
  
  
  /* ----------paymentdetails------------ */
  .payment-details-container {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  
  .payment-details-container h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .payment-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  .payment-table th,
  .payment-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  .payment-table th {
    background-color: #4CAF50;
    color: white;
  }
  
  .payment-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .payment-table tr:hover {
    background-color: #ddd;
  }
  
  
  
  /* -------------transaction details----------- */
  .transaction-details-container {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  
  .transaction-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .transaction-table th,
  .transaction-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  table th input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0 auto;
    color: #000000;
    background-color: #0056b3;
  }
  
  .transaction-table th {
    background-color: #4CAF50;
    color: white;
  }
  
  .recipient {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .recipient-photo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .icon-green {
    color: green;
  }
  
  .icon-red {
    color: red;
  }
  
  .status-pending {
    background-color: #ffedcc;
    color: #d67c00;
  }
  
  .status-completed {
    background-color: #d4fdd4;
    color: #1b8e1b;
  }
  
  .status-canceled {
    background-color: #fddcdc;
    color: #b90000;
  }
  
  .action-menu-container {
    position: relative;
    cursor: pointer;
  }
  
  .action-menu-dropdown {
    position: absolute;
    top: 20px;
    right: 0;
    background-color: rgb(6, 127, 148);
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    z-index: 10;
    cursor: pointer;
  }
  
  .action-menu-dropdown button {
    display: block;
    width: 100%;
    padding: 8px 12px;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
  }
  
  .action-menu-dropdown button:hover {
    background-color: #285758;
    color: white;
  }
  
  
  /* -------audiofile------ */
  /* 
  .audio-upload-container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .audio-upload-container h1 {
    text-align: center;
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .audio-upload-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  form div {
    width: 48%;
  }
  
  form label {
    font-size: 1rem;
    color: #333;
    margin-bottom: 5px;
  }
  
  form input[type="text"],
  form input[type="date"],
  form input[type="file"],
  form textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    width: 100%;
  }
  
  form input[type="text"]:focus,
  form input[type="date"]:focus,
  form input[type="file"]:focus,
  form textarea:focus {
    border-color: #0066cc;
  }
  
  form textarea {
    height: 100px;
    resize: none;
  }
  
  form button {
    padding: 12px;
    font-size: 1.2rem;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  form button:hover {
    background-color: #0057b7;
  }
  
  @media (max-width: 768px) {
    form div {
      width: 100%; 
    }
  }
  @media (max-width: 768px) {
    .audio-upload-container {
      width: 90%;
      padding: 15px;
    }
  
    form h1 {
      font-size: 1.8rem;
    }
  
    form input[type="text"],
    form input[type="date"],
    form input[type="file"],
    form textarea {
      font-size: 0.9rem;
    }
  
    form button {
      font-size: 1rem;
      padding: 10px;
    }
  } */
  
  /* -------------registerd course----------*/
  
  /* Styling for the main container */
  .registered-courses {
    margin: 20px auto;
    max-width: 800px;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .registered-courses h2 {
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 10px;
  }
  
  th {
    background-color: #4CAF50;
    color: white;
    text-transform: uppercase;
  }
  
  td {
    color: #555;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f1f1f1;
  }
  
  th, td {
    text-align: left;
  }
  
  @media (max-width: 600px) {
    table {
      font-size: 12px;
    }
  
    th, td {
      padding: 8px;
    }
  }
  
  
  
  /* ----------dashboard------ */
  
  /* Container for all cards */
  .dashboard-container {
    gap: 20px;
    padding: 20px;
  }
  
  .dashboard-card {
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth zoom effect */
  }
  
  .dashboard-card:hover {
    transform: scale(1.05); /* Slightly increase the size on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow for hover */
  }
  
  .dashboard-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .dashboard-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .dashboard-icon {
    font-size: 24px;
    color: #0056b3;
  }
  
  .dashboard-value {
    font-size: 18px;
    font-weight: bold;
  }
  
  .dashboard-increase {
    font-size: 14px;
    background-image: linear-gradient(to right, #b27edd, #22c8e6);
    -webkit-background-clip: text; 
    color: transparent;
    
  }
  
  .progress-bar {
    background-color: #f0f0f0;
    border-radius: 4px;
    height: 8px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .progress-bar-fill {
    height: 100%;
    background-image: linear-gradient(to right, #b27edd, #22c8e6);
    border-radius: 4px;
    transition: width 0.3s ease; 
  }
  
  



// -------------------//

import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaSortAmountUpAlt, FaSortAmountDownAlt } from "react-icons/fa";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [filter, setFilter] = useState("Yearly");

  const data = [
    {
      icon: <FaArrowUpLong />,
      icon2: <FaArrowDownLong />,
      title: "Total Students",
      value: "450",
      increase: "55%",
      period: "28 Days",
      color: "#4CAF50",
    },
    {
      icon: <FaArrowUpLong />,
      icon2: <FaArrowDownLong />,
      title: "New Students",
      value: "155",
      increase: "40%",
      color: "#E04446",
    },
    {
      icon: <MdOutlineLibraryBooks />,
      title: "Total Course",
      value: "10",
      increase: "85%",
      color: "#FFC107",
    },
    {
      icon: <FaSortAmountUpAlt />,
      icon2: <FaSortAmountDownAlt />,
      title: "Yearly Collection",
      value: "₹13,921",
      increase: "51%",
      color: "#4CAF50",
    },
  ];

  const chartDataSets = {
    Yearly: {
      labels: ["2020", "2021", "2022", "2023"],
      data: [1200, 1500, 2000, 2500],
    },
    Monthly: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      data: [200, 150, 180, 300, 250, 400, 450, 500, 350, 300, 200, 150],
    },
    Weekly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [50, 70, 90, 100],
    },
  };

  const chartData = {
    labels: chartDataSets[filter].labels,
    datasets: [
      {
        label: `Statistics (${filter})`,
        data: chartDataSets[filter].data,
        backgroundColor: ["#4CAF50", "#E04446", "#FFC107", "#4CAF50"],
        borderColor: ["#388E3C", "#B71C1C", "#FFA000", "#388E3C"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: `Dashboard Statistics - ${filter}` },
    },
  };
  const monthlyEarningsOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Total Earnings" },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `₹${value}`, // Add currency symbol
        },
      },
    },
  };
  const monthlyEarningsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Earnings (₹)",
        data: [
          12000, 15000, 18000, 20000, 22000, 25000, 27000, 30000, 28000, 26000,
          24000, 20000,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const data2 = [
    {
      platform: "Twitter",
      icon: <FaTwitter style={{ color: "#1DA1F2" }} />,
      likes: "12,281",
      growth: "+7.2%",
      target: "35,098",
      duration: "350",
    },
    {
      platform: "Facebook",
      icon: <FaFacebook style={{ color: "#1877F2" }} />,
      likes: "11,200",
      growth: "+6.2%",
      target: "34,185",
      duration: "800",
    },
    {
      platform: "Google",
      icon: <FaGoogle style={{ color: "#DB4437" }} />,
      likes: "10,500",
      growth: "+5.9%",
      target: "25,998",
      duration: "900",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="dashboard-container">
            {data.map((item, index) => (
              <div className="dashboard-card" key={index}>
                <h3 className="dashboard-title">{item.title}</h3>
                <div className="dashboard-row">
                  <div className="dashboard-icon" style={{ color: item.color }}>
                    {parseInt(item.increase) > 50 ? item.icon : item.icon2}
                  </div>
                  <div className="dashboard-value">{item.value}</div>
                  <div className="dashboard-increase">{item.increase}</div>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: item.increase }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="filter-section">
        <label htmlFor="filter">Filter By: </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
        </select>
      </div>

      <div className="row">
        <div className="col-sm-6 statistics">
          <Bar
            data={{
              labels: ["2020", "2021", "2022", "2023"],
              datasets: [
                {
                  label: `Statistics (${filter})`,
                  data: [1200, 1500, 2000, 2500],
                  backgroundColor: ["#4CAF50", "#E04446", "#FFC107", "#4CAF50"],
                  borderColor: ["#388E3C", "#B71C1C", "#FFA000", "#388E3C"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: {
                  display: true,
                  text: `Dashboard Statistics - ${filter}`,
                },
              },
            }}
          />
        </div>
        <div className="col-sm-6">
          <Bar data={monthlyEarningsData} options={monthlyEarningsOptions} />
        </div>
      </div> */}
        <div className="dashboard-container">
          <div className="row">
            <div className="col-lg-4">
              <div className="dashboard-container">
                {data2.map((item, index) => (
                  <div className="dashboard-card" key={index}>
                    <h3 className="dashboard-title">{item.title}</h3>
                    <div className="dashboard-row">
                      <div
                        className="dashboard-icon"
                        style={{ color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div className="dashboard-value">{item.platform}</div>
                      <div className="dashboard-increase">{item.likes}</div>
                    </div>
                    {/* <div className="progress-bar">
                    <p
                      style={{
                        color: item.growth.startsWith("+")
                          ? "#4CAF50"
                          : "#E04446",
                      }}
                    >
                      {item.growth} Total Likes
                    </p>
                    <p>Target: {item.target}</p>
                    <p>Duration: {item.duration} days</p>
                  </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;



// ----------------------------//


import React from "react";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaSortAmountUpAlt, FaSortAmountDownAlt } from "react-icons/fa";

const Dashboard = () => {
  const data = [
    {
      icon: <FaArrowUpLong />,
      icon2: <FaArrowDownLong />,
      title: "Total Students",
      value: "450",
      increase: "55%",
      period: "28 Days",
      color: "#4CAF50",
    },
    {
      icon: <FaArrowUpLong />,
      icon2: <FaArrowDownLong />,
      title: "New Students",
      value: "155",
      increase: "40%",
      color: "#E04446",
    },
    {
      icon: <MdOutlineLibraryBooks />,
      title: "Total Course",
      value: "10",
      increase: "85%",
      color: "#FFC107",
    },
    {
      icon: <FaSortAmountUpAlt />,
      icon2: <FaSortAmountDownAlt />,
      title: "Fees Collection",
      value: "₹13,921",
      increase: "51%",
      color: "#4CAF50",
    },
  ];

  return (
    <>
    <div className="dashboard-container">
      {data.map((item, index) => (
        <div className="dashboard-card" key={index}>
          <h3 className="dashboard-title">{item.title}</h3>
          <div className="dashboard-row">
            <div
              className="dashboard-icon"
              style={{ color: item.color }}
            >
              {parseInt(item.increase) > 50 ? item.icon : item.icon2} {/* Conditional rendering of icons */}
            </div>
            <div className="dashboard-value">{item.value}</div>
            <div className="dashboard-increase">{item.increase}</div>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: item.increase }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    <div className="statistics">

    </div>
    </>
  );
};

export default Dashboard;
