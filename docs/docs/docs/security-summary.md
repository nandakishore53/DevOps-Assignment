# Security Summary

## Security Measures Implemented

### IAM

- Created a dedicated IAM user.
- Followed the Principle of Least Privilege.

### Security Groups

Allowed:

- SSH (22)
- HTTP (80)
- HTTPS (443)

### SSH Authentication

- Connected using PEM private key.
- Password authentication disabled.

### S3

- Block Public Access enabled.
- Bucket Versioning enabled.

### EC2

- Ubuntu Server
- Security Group configured
- PM2 for process management

### GitHub

- Used GitHub Secrets for:

  - EC2_HOST
  - EC2_USER
  - EC2_SSH_KEY

No sensitive credentials are stored in the repository.