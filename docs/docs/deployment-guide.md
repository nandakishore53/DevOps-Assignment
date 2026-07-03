# Deployment Guide

## Prerequisites

- AWS Free Tier Account
- Ubuntu EC2 Instance
- Git Installed
- Node.js Installed
- Nginx Installed
- PM2 Installed

---

## Clone Repository

```bash
git clone https://github.com/nandakishore53/DevOps-Assignment.git
cd DevOps-Assignment
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Application

```bash
pm2 start server.js --name devops-app
```

---

## Configure Nginx

Configure Nginx to proxy requests to:

```
http://localhost:3000
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

---

## Verify Deployment

Open:

```
http://<EC2-PUBLIC-IP>
```

The application should return the JSON response.

---

## CI/CD

Every push to the `main` branch automatically:

- Pulls the latest code
- Installs dependencies
- Restarts PM2