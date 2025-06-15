## 🚧 Under Construction

Hold on to your seatbelts! 🏎️ The RideShare app is still in the garage getting turbo upgrades. Stay tuned for some smooth coding rides! 🚗💨





# 🚗 RideShare - Carpooling & Ride Sharing Platform

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made with MERN](https://img.shields.io/badge/stack-MERN-green)](https://github.com/yasssh-shinde/RideShare)

**RideShare** is a full-stack carpooling application built using the MERN stack. Inspired by platforms like BlaBlaCar, it enables users to offer or book rides, helping reduce travel expenses and carbon footprints.

🔗 **GitHub Repo:** [github.com/yasssh-shinde/RideShare](https://github.com/yasssh-shinde/RideShare)

---

## 📌 Table of Contents

- [Features](#features)
- [User Roles](#user-roles)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [API Overview](#api-overview)
- [Contribution Guidelines](#contribution-guidelines)
- [Author](#author)
- [License](#license)

---

## 🚀 Features

- 🔐 JWT Authentication
- 🧍 User Role Management (Passenger, Driver, Admin)
- 🚗 Post & Manage Rides (Driver)
- 🔍 Search Rides by Route and Date (Passenger)
- 📅 Book or Cancel Seats
- 🛠 Admin Dashboard: Manage users and rides
- 📩 Email Notifications (planned)
- 🌍 Google Maps Integration (planned)
- ⭐ Ride Reviews & Ratings (planned)

---

## 👤 User Roles

### 🚶 Passenger
- Register/Login
- Search for rides
- View driver details
- Book rides

### 🚘 Driver
- Register/Login
- Create and manage rides
- View passenger requests
- Accept/decline bookings

### 🛡 Admin
- Access full database (users/rides)
- Block or delete users/rides
- Monitor abuse reports

---

## 🛠️ Tech Stack

| Layer        | Technology                |
|--------------|---------------------------|
| Frontend     | React.js, React Router    |
| Backend      | Node.js, Express.js       |
| Database     | MongoDB, Mongoose         |
| Authentication | JWT, bcryptjs           |
| Styling      | Tailwind CSS / Plain CSS  |
| Deployment   | Vercel (Frontend), Render (Backend), MongoDB Atlas |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (Local or Atlas)
- Git CLI

---

## 📥 Installation

1. **Clone the Repository**

```bash
git clone https://github.com/yasssh-shinde/RideShare.git
cd RideShare
