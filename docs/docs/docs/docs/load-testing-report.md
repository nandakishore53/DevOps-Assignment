# Load Testing Report

## Tool Used

k6

---

## Test Configuration

- Virtual Users: 10
- Duration: 30 Seconds

---

## Results

| Metric | Result |
|---------|---------|
| Total Requests | 300 |
| Average Response Time | 2.07 ms |
| Requests/sec | 9.97 |
| Error Rate | 0% |

---

## Observations

- Application handled all requests successfully.
- Zero request failures observed.
- Response time remained consistently low.
- PM2 maintained application stability.
- Nginx successfully proxied incoming requests.

---

## Conclusion

The application performed reliably under the configured workload and demonstrated stable performance suitable for this assignment.