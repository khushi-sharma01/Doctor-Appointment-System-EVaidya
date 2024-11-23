# Doctor Appointment System - E-Vaidya  

Welcome to the **E-Vaidya Doctor Appointment System**! This is a feature-rich, user-friendly web application designed to streamline the doctor-patient interaction process. It offers robust Role-Based Access Control (RBAC) with separate login systems for **Admin**, **Doctor**, and **User/Patient**, ensuring secure and efficient management of permissions and actions.

---

## **Key Features**

### **Role-Based Access Control (RBAC)**
- **Admin**:  
  - Manage users and doctors.  
  - Approve or reject user requests to become doctors after manual verification.  
  - Block or unblock any user/doctor as needed.  
- **Doctor**:  
  - View and manage appointments.  
  - Accept or reject appointment requests.  
  - Update availability and consultation timings.  
- **User/Patient**:  
  - Register and book appointments with doctors.  
  - Track the status of appointments.  
  - Apply for doctor status by submitting relevant documents.

---

## **Technologies Used**

- **Frontend**:  
  - **Next.js**: Modern React framework for server-side rendering and improved SEO.  
  - **CSS3** & **Tailwind CSS**: For crafting responsive, accessible, and visually appealing designs.  

- **Backend**:  
  - **Node.js**: Scalable and efficient backend runtime.  
  - **Express.js**: Robust routing and middleware framework.  

- **Database**:  
  - **MongoDB**: NoSQL database for dynamic and scalable data handling.  
  - **Mongoose**: Elegant MongoDB object modeling for Node.js.  

---

## **Features in Detail**

### **Admin Dashboard**
- **User Management**:  
  - View and manage user accounts.  
  - Approve or reject doctor applications.  
  - Block/unblock users or doctors.  

- **Doctor Management**:  
  - Oversee doctor profiles and activity.  
  - Monitor appointments and system activity.  

---

### **Doctor Portal**
- **Appointment Handling**:  
  - View appointment requests from patients.  
  - Accept or reject appointments based on availability.  

- **Profile Management**:  
  - Update availability status.  
  - Manage personal and professional details.  

---

### **User Portal**
- **Appointment Booking**:  
  - Search and book appointments with available doctors.  
  - View and manage scheduled appointments.  

- **Doctor Application**:  
  - Apply to become a doctor by submitting relevant details and documentation.  

---

## **How to Run the Project Locally**

### Prerequisites
- Node.js (v14+)
- MongoDB

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/khushi-sharma01/Doctor-Appointment-system-EVaidya.git
   cd Doctor-Appointment-system-EVaidya
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:  
   Create a `.env` file in the root directory and add the following:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## **Screenshots**
1. **Admin Dashboard**:  
   - Approve/reject doctor requests and manage user accounts.  
   ![Screenshot 2024-11-23 175134](https://github.com/user-attachments/assets/f4102059-284e-4b36-b924-7c5959669f4d)
![Screenshot 2024-11-23 175147](https://github.com/user-attachments/assets/ec6f0f34-370f-407f-8333-520c92606160)



2. **Doctor Portal**:  
   - Manage appointments and update availability.  
  ![Screenshot 2024-11-23 175020](https://github.com/user-attachments/assets/2d9394da-7332-4ae9-a440-67153771044f)


3. **User Portal**:  
   - Book appointments and apply for doctor status.  
![Screenshot 2024-11-23 175043](https://github.com/user-attachments/assets/66d58a47-93a9-495a-9363-2cb84e73e2f8)
 

---

## **Security Practices**
- **Role-Based Access Control** ensures each user type can only access their permitted features.  
- **JWT Authentication** for secure and scalable session management.  
- **Input Validation** prevents malicious input and injection attacks.  

---

## **Future Enhancements**
- **Real-Time Notifications**: Notify users and doctors about appointment status updates.  
- **Payment Integration**: Enable users to pay for appointments online.  
- **Analytics Dashboard**: Provide admin insights into system usage and activity trends.  


---

## **About the Developer**
Developed by [Khushi Sharma](https://github.com/khushi-sharma01), a passionate software developer with expertise in **React**, **React-Native**, **Next.js**, **MongoDB**, and **user-friendly UI design**.  
Connect with me on [LinkedIn](https://www.linkedin.com/in/khushi-sharma01) for collaborations or feedback!  

---
