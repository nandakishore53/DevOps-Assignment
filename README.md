# 🚀 DevOps Assignment - AWS Production Deployment

## 📖 Project Overview

This project demonstrates the deployment of a production-like Node.js web application on AWS using DevOps best practices. The application is deployed on an Amazon EC2 instance, managed by PM2, served through Nginx, monitored using Amazon CloudWatch, backed up using Amazon S3, and automatically deployed using GitHub Actions CI/CD.

---

## 🏗️ Architecture

```
Developer (VS Code)
        │
        ▼
GitHub Repository
        │
        ▼
GitHub Actions (CI/CD)
        │
        ▼
Amazon EC2 (Ubuntu)
        │
        ▼
Nginx Reverse Proxy
        │
        ▼
PM2 Process Manager
        │
        ▼
Node.js Express Application
        │
        ├────────► Amazon CloudWatch
        │             (Monitoring & Alarms)
        │
        └────────► Amazon S3
                      (Application Backup)
```

---

## ☁️ AWS Services Used

- Amazon EC2
- Amazon S3
- Amazon IAM
- Amazon CloudWatch
- Security Groups

---

## 🛠️ Technologies Used

- Ubuntu Linux
- Node.js
- Express.js
- PM2
- Nginx
- Git
- GitHub
- GitHub Actions
- k6 (Load Testing)

---

## ⚙️ Features

- Production deployment on AWS EC2
- Reverse proxy using Nginx
- Process management using PM2
- CI/CD using GitHub Actions
- CloudWatch Dashboard & Alarm
- S3 backup
- IAM least privilege configuration
- Load testing with k6

---

## 🚀 Deployment Steps

### Clone Repository

```bash
git clone https://github.com/nandakishore53/DevOps-Assignment.git
```

### Install Dependencies

```bash
npm install
```

### Start Application

```bash
pm2 start server.js --name devops-app
```

### Configure Nginx

Configure Nginx to proxy traffic to:

```
http://localhost:3000
```

---

## 🔄 CI/CD Pipeline

Every push to the `main` branch automatically:

- Pulls the latest code
- Installs dependencies
- Restarts the application using PM2

---

## 📊 Monitoring

Monitoring is implemented using Amazon CloudWatch.

Metrics monitored:

- CPU Utilization
- CloudWatch Dashboard
- CloudWatch Alarm

---

## 📈 Load Testing

Tool Used:

- k6

Test Configuration:

- 10 Virtual Users
- 30 Seconds

Results:

| Metric | Result |
|---------|---------|
| Requests | 300 |
| Average Response Time | 2.07 ms |
| Requests/sec | 9.97 |
| Error Rate | 0% |

---

## 🔐 Security

- IAM Least Privilege
- Security Groups
- Private SSH Key Authentication
- S3 Block Public Access
- HTTPS Ready

---

## 📷 Screenshots

Include screenshots of:

- EC2 Instance
- GitHub Actions
- CloudWatch Dashboard
- CloudWatch Alarm
- S3 Bucket
- Running Application
- Load Testing Results

---

## 👨‍💻 Author

**Nanda Kishore**

GitHub:
https://github.com/nandakishore53