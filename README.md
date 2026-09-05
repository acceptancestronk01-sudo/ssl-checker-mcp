# SSL/TLS Certificate Checker MCP

**x402 Payment-Protected SSL Certificate Validation & Security Analysis API**

Check SSL/TLS certificates, monitor expiration, verify certificate chains, and analyze security for AI agents doing website monitoring and security audits.

## 🚀 Features

- **✅ Certificate Validation** - Check if SSL certificate is valid and trusted
- **⏰ Expiration Monitoring** - Get expiration date and days remaining
- **🔗 Chain Verification** - Verify certificate chain and CA issuers
- **🔐 Security Analysis** - Check protocol versions, cipher suites, security grade
- **📊 Security Grading** - A-F rating based on security posture
- **⚠️ Alert Warnings** - Identify expired or expiring soon certificates
- **💳 x402 Micropayments** - Pay $0.002 USDC per check on Base Mainnet
- **🤖 MCP Compatible** - Works with Claude and other AI agents

## 📡 Live Endpoint

**Base URL**: `https://ssl-checker-mcp.vercel.app` (will be updated after deployment)

### Check SSL Certificate

```bash
POST /api/check
Content-Type: application/json
```

**Body:**
```json
{
  "domain": "example.com"
}
```

**Example:**
```bash
curl -X POST https://ssl-checker-mcp.vercel.app/api/check \
  -H "Content-Type: application/json" \
  -d '{"domain": "example.com"}'
```

### Get Detailed SSL Info

```bash
POST /api/detailed
Content-Type: application/json
```

**Body:**
```json
{
  "domain": "example.com"
}
```

**Example:**
```bash
curl -X POST https://ssl-checker-mcp.vercel.app/api/detailed \
  -H "Content-Type: application/json" \
  -d '{"domain": "github.com"}'
```

**Response (402 Payment Required):**
```json
{
  "error": "Payment Required",
  "message": "This endpoint requires x402 payment",
  "payment": {
    "scheme": "exact",
    "network": "eip155:8453",
    "price": "$0.002",
    "currency": "USDC",
    "payTo": "0xf081ee84c0d85278a6242bc265f0b312021ebeb1"
  },
  "instructions": "Include payment proof in X-Payment-Proof header"
}
```

## 🔍 Discovery Endpoints

- **Bazaar Discovery**: `/.well-known/x402`
- **MCP Metadata**: `/mcp/tools`
- **Health Check**: `/health`

## 💰 Payment Details

- **Network**: Base Mainnet (Chain ID: eip155:8453)
- **Currency**: USDC
- **Price**: $0.002 per check
- **Protocol**: x402 "exact" scheme
- **Payment Address**: `0xf081ee84c0d85278a6242bc265f0b312021ebeb1`

## 🤖 Use with AI Agents

This MCP server is designed to work with Claude Code and other AI agents that support the Model Context Protocol (MCP) and x402 payments.

AI agents can:
1. Discover the service on x402 Bazaar
2. Pay via CDP Facilitator
3. Check SSL certificate validity
4. Monitor certificate expiration
5. Verify certificate chains
6. Audit website security
7. Alert on security issues

## 📦 Response Format

### Basic Check Response
```json
{
  "success": true,
  "domain": "example.com",
  "valid": true,
  "certificate": {
    "subject": "example.com",
    "issuer": "DigiCert Inc",
    "validFrom": "2025-01-13T00:00:00.000Z",
    "validTo": "2026-02-13T23:59:59.000Z",
    "daysRemaining": 162,
    "expired": false
  },
  "security": {
    "protocol": "TLSv1.3",
    "grade": "A",
    "authorized": true,
    "error": null
  },
  "checkedAt": "2026-09-04T20:30:00.000Z",
  "payment": {
    "verified": true,
    "amount": "0.002",
    "currency": "USDC"
  }
}
```

### Detailed Response
```json
{
  "success": true,
  "domain": "example.com",
  "valid": true,
  "certificate": {
    "subject": {
      "commonName": "example.com",
      "organization": "Example Organization",
      "organizationalUnit": null,
      "locality": "Los Angeles",
      "state": "California",
      "country": "US"
    },
    "issuer": {
      "commonName": "DigiCert TLS RSA SHA256 2020 CA1",
      "organization": "DigiCert Inc",
      "country": "US"
    },
    "validity": {
      "validFrom": "2025-01-13T00:00:00.000Z",
      "validTo": "2026-02-13T23:59:59.000Z",
      "daysRemaining": 162,
      "expired": false,
      "expiringSoon": false
    },
    "serialNumber": "0F8B4F6F32D02F5A8F82C9E0F6A3B2D1",
    "fingerprint": "A1:B2:C3:D4:E5:F6...",
    "fingerprint256": "SHA256:A1B2C3D4E5F6...",
    "subjectAltNames": [
      "DNS:example.com",
      "DNS:www.example.com"
    ]
  },
  "security": {
    "protocol": "TLSv1.3",
    "cipher": {
      "name": "TLS_AES_128_GCM_SHA256",
      "version": "TLSv1.3"
    },
    "grade": "A",
    "authorized": true,
    "authorizationError": null
  },
  "analysis": {
    "protocolSecure": true,
    "certificateValid": true,
    "notExpired": true,
    "expirationWarning": false,
    "recommendations": []
  },
  "checkedAt": "2026-09-04T20:30:00.000Z"
}
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Run locally
npm start

# Development mode with auto-reload
npm run dev
```

Server will start on `http://localhost:3000`

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

The `vercel.json` configuration is already set up for Express.

## 📊 Use Cases

### Security Monitoring
- **Certificate Expiry Alerts** - Monitor when certificates will expire
- **Security Audits** - Check SSL configuration across multiple domains
- **Compliance Checking** - Ensure all domains have valid SSL
- **Uptime Monitoring** - Verify SSL as part of health checks

### DevOps & SRE
- **CI/CD Integration** - Validate SSL in deployment pipelines
- **Infrastructure Audits** - Check all company domains
- **Incident Response** - Quick SSL validation during outages
- **Migration Validation** - Verify SSL after migrations

### Business Applications
- **Vendor Validation** - Check partner/vendor SSL security
- **Customer Support** - Diagnose customer SSL issues
- **Security Reports** - Generate SSL security reports
- **Automated Alerts** - Alert teams before certificates expire

### Research & Analysis
- **Security Research** - Analyze SSL adoption trends
- **Competitor Analysis** - Check competitor SSL configurations
- **Vulnerability Assessment** - Identify weak SSL configurations
- **Trend Analysis** - Track SSL protocol adoption

## 🔐 Security Grading

Grades are calculated based on:

### Grade A (90-100 points)
- ✅ TLS 1.3 protocol
- ✅ Strong cipher suites
- ✅ Valid certificate (30+ days remaining)
- ✅ Properly authorized

### Grade B (80-89 points)
- TLS 1.2 protocol
- Good cipher suites
- Valid certificate

### Grade C (70-79 points)
- TLS 1.2 protocol
- Acceptable ciphers
- Certificate expiring soon (< 30 days)

### Grade D (60-69 points)
- Old protocols (TLS 1.1)
- Weak ciphers
- Authorization issues

### Grade F (< 60 points)
- Expired certificate
- Very old protocols (TLS 1.0)
- Insecure ciphers (RC4, DES)
- Invalid certificate chain

## ⚠️ What Gets Checked

### Certificate Information
- **Subject** - Domain name and organization
- **Issuer** - Certificate Authority information
- **Validity Period** - Start and expiration dates
- **Days Remaining** - Time until expiration
- **Serial Number** - Certificate serial number
- **Fingerprints** - SHA-1 and SHA-256 fingerprints
- **Subject Alt Names** - Additional covered domains

### Security Analysis
- **Protocol Version** - TLS 1.0, 1.1, 1.2, 1.3
- **Cipher Suite** - Encryption algorithm used
- **Certificate Chain** - Verification of trust chain
- **Authorization** - Whether cert is trusted
- **Security Grade** - Overall security rating (A-F)

### Warnings & Alerts
- ⚠️ Expired certificates
- ⚠️ Expiring soon (< 30 days)
- ⚠️ Old protocols (TLS 1.0/1.1)
- ⚠️ Weak ciphers
- ⚠️ Invalid certificate chains
- ⚠️ Self-signed certificates

## 🔗 Integration Example

### With Claude Code

```javascript
// AI agent automatically handles x402 payment
const response = await fetch('https://ssl-checker-mcp.vercel.app/api/check', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Payment-Proof': '<payment_proof>'
  },
  body: JSON.stringify({
    domain: 'example.com'
  })
});

const data = await response.json();
if (data.certificate.daysRemaining < 30) {
  console.log(`⚠️ Certificate expiring in ${data.certificate.daysRemaining} days!`);
}
```

### MCP Tool Schema

```json
{
  "name": "check_ssl_certificate",
  "description": "Check SSL/TLS certificate validity, expiration, and basic security",
  "inputSchema": {
    "type": "object",
    "properties": {
      "domain": {
        "type": "string",
        "description": "Domain name to check (without https://, e.g., example.com)"
      }
    },
    "required": ["domain"]
  }
}
```

## 📝 Important Notes

### Supported Domains
- ✅ Any publicly accessible HTTPS website
- ✅ Standard ports (443)
- ✅ Valid and invalid certificates (for checking)
- ❌ Localhost or private IPs
- ❌ Non-standard ports (requires custom implementation)

### Limitations
- Checks certificates even if invalid (for diagnostic purposes)
- Timeout after 10 seconds
- Port 443 only (standard HTTPS)
- No support for client certificates

### Best Practices
- Check certificates regularly (weekly recommended)
- Alert when < 30 days remaining
- Monitor grade changes (downgrade = potential issue)
- Keep records of certificate changes
- Verify after certificate renewals

## 🔐 Security & Privacy

- No certificate data is stored
- Connections are made directly to target servers
- No logging of domains checked
- All payments via x402 protocol on Base Mainnet
- Payment verification on every request
- Rate limiting and validation built-in

## 📝 License

MIT

## 🔗 Links

- **Live API**: https://ssl-checker-mcp.vercel.app (will be updated)
- **x402 Bazaar**: https://x402bazaar.app
- **MCP Protocol**: https://modelcontextprotocol.io
- **Base Network**: https://base.org
- **GitHub**: https://github.com/acceptancestronk01-sudo/ssl-checker-mcp

---

Built with ❤️ for the AI agent ecosystem
