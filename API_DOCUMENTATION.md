# API Documentation

## Base URL

- **Development:** `http://localhost:5000/api`
- **Production:** `https://your-backend-url.com/api`

## Authentication

Current implementation is public (no authentication required).

Future versions will include JWT-based authentication.

## Rate Limiting

- 100 requests per 15 minutes per IP address
- Response header: `X-RateLimit-Remaining`

## Response Format

### Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "fieldName",
      "message": "Validation error message"
    }
  ]
}
```

## API Endpoints

### 1. Contact Form Submission

**POST /api/contact**

Submit a contact form message.

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss collaboration on your projects."
}
```

**Request Validation:**
- `name`: Required, 2-50 characters
- `email`: Required, valid email format
- `subject`: Required, 3-100 characters
- `message`: Required, 10-5000 characters

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Your message has been received. We will get back to you soon!",
  "contactId": "507f1f77bcf86cd799439011"
}
```

**Error Responses:**

400 Bad Request (Validation Error):
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    },
    {
      "field": "message",
      "message": "Message must be at least 10 characters"
    }
  ]
}
```

500 Internal Server Error:
```json
{
  "success": false,
  "message": "Error submitting contact form. Please try again later."
}
```

**Curl Example:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "This is a test message from the contact form."
  }'
```

**JavaScript/Axios Example:**
```javascript
import axios from 'axios';

const submitContact = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/contact', {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Hello',
      message: 'This is a test message.'
    });
    
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
};
```

**Python/Requests Example:**
```python
import requests

data = {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "This is a test message from Python."
}

response = requests.post('http://localhost:5000/api/contact', json=data)
print(response.json())
```

### 2. Contact Form Status

**GET /api/contact/status**

Check if the contact form service is operational.

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Contact form service is operational",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Curl Example:**
```bash
curl http://localhost:5000/api/contact/status
```

**JavaScript Example:**
```javascript
fetch('http://localhost:5000/api/contact/status')
  .then(res => res.json())
  .then(data => console.log(data));
```

### 3. Health Check

**GET /api/health**

Check if the server is running and healthy.

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Server is healthy",
  "timestamp": "2024-01-15T10:30:00Z",
  "uptime": 3600.5
}
```

**Curl Example:**
```bash
curl http://localhost:5000/api/health
```

## Error Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request successful |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid request or validation error |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Server Error | Internal server error |

## CORS Headers

**Allowed Origins:**
- Development: `http://localhost:3000`
- Production: Your frontend URL

**Allowed Methods:**
- GET
- POST
- OPTIONS

**Allowed Headers:**
- Content-Type
- Accept

**Max Age:** 86400 seconds

## Rate Limiting

**Endpoint:** `/api/*`

**Limit:** 100 requests per 15 minutes

**Response Headers:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1705315800
```

**Rate Limit Error (429):**
```json
{
  "success": false,
  "message": "Too many requests from this IP, please try again later."
}
```

## Email Notifications

When a contact form is submitted:

1. **Confirmation Email** sent to user
2. **Notification Email** sent to portfolio owner

### Confirmation Email

- To: Submitter's email
- Subject: "We received your message - Samridha's Portfolio"
- Contains: Thank you message

### Notification Email

- To: `EMAIL_TO` environment variable
- Subject: "New Portfolio Contact: [Subject]"
- Contains: Full message details

## API Client Usage

### Frontend Service

File: `frontend/src/services/apiService.js`

```javascript
import { submitContactForm, checkHealth } from '../services/apiService';

// Submit contact form
try {
  const response = await submitContactForm({
    name: 'John',
    email: 'john@example.com',
    subject: 'Hello',
    message: 'Message content'
  });
  console.log(response);
} catch (error) {
  console.error(error);
}

// Check health
try {
  const response = await checkHealth();
  console.log(response);
} catch (error) {
  console.error(error);
}
```

## Response Examples

### Successful Submission

**Request:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Smith",
    "email": "alice@example.com",
    "subject": "Collaboration Opportunity",
    "message": "I would like to collaborate on a web development project with you. Can we discuss more details?"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been received. We will get back to you soon!",
  "contactId": "507f1f77bcf86cd799439011"
}
```

### Validation Error

**Request:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bob",
    "email": "invalid-email",
    "subject": "Hi",
    "message": "Short"
  }'
```

**Response:**
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    },
    {
      "field": "message",
      "message": "Message must be at least 10 characters"
    }
  ]
}
```

## Testing the API

### Using Postman

1. Open Postman
2. Create new POST request
3. URL: `http://localhost:5000/api/contact`
4. Body (JSON):
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "subject": "Test Subject",
  "message": "This is a test message with at least 10 characters."
}
```
5. Send request

### Using Thunder Client (VS Code)

1. Install Thunder Client extension
2. Create new request
3. Configure like Postman
4. Send request

### Using Browser DevTools

```javascript
// In browser console
fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@example.com',
    subject: 'Test',
    message: 'This is a test message with sufficient length.'
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

## Webhook Integration (Future)

Planned features:
- Discord webhook for notifications
- Slack integration
- Email digest
- Custom webhooks

## API Versioning (Future)

Future versions may use API versioning:
- `/api/v1/contact`
- `/api/v2/contact`

Current version is v0 (development).

## Best Practices

1. **Always validate on client-side first**
2. **Catch errors and display user-friendly messages**
3. **Test with different data types**
4. **Monitor API response times**
5. **Implement exponential backoff for retries**
6. **Log errors for debugging**
7. **Don't expose sensitive data in responses**
8. **Use HTTPS in production**

## Troubleshooting

### Connection Refused

**Issue:** Cannot connect to API
```
Error: ECONNREFUSED 127.0.0.1:5000
```

**Solution:**
1. Ensure backend is running: `npm start`
2. Check port is 5000 (or configured port)
3. Verify no other process using port 5000

### CORS Error

**Issue:** Cross-Origin request blocked
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**
1. Check `FRONTEND_URL` in backend `.env`
2. Verify frontend URL matches
3. Clear browser cache and cookies

### Email Not Sending

**Issue:** Contact submitted but no email received

**Solution:**
1. Check SMTP credentials in `.env`
2. Verify Gmail 2FA and app password
3. Check spam folder
4. Review server logs

### Validation Errors

**Issue:** Valid data rejected

**Solution:**
1. Check message length (10-5000 chars)
2. Verify email format
3. Check special characters
4. Ensure all fields are present

## Support

For API issues:
1. Check logs: `tail -f backend.log`
2. Test with Postman
3. Review error response
4. Check environment variables
5. Restart server

For more information, see [README.md](./README.md) and [ARCHITECTURE.md](./ARCHITECTURE.md)
