# Getting Listed on x402 Bazaar

## Overview

Your SSL/TLS Certificate Checker MCP will automatically appear on **https://x402bazaar.app** after your first paid call settles through the CDP Facilitator. No registration form needed!

## Current Status

✅ **Implementation Complete**: SSL/TLS checker with native Node.js TLS module
✅ **x402 Discovery**: `/.well-known/x402` endpoint ready
✅ **MCP Compatible**: `/mcp/tools` endpoint configured
⏳ **Deployment**: Ready to deploy to Vercel

## How to Get Listed

### Step 1: Deploy to Vercel ✅ IN PROGRESS

Once deployed, validate your endpoint:

```bash
curl -X POST -i https://ssl-checker-mcp.vercel.app/api/check \
  -H "Content-Type: application/json" \
  -d '{"domain": "example.com"}'
```

Should return:
```
HTTP/1.1 402 Payment Required
```

### Step 2: Wait for First Paid Call

Once a user or AI agent completes a paid call through the CDP Facilitator:
1. Payment settles on Base Mainnet
2. CDP automatically catalogs your endpoint
3. Your service appears on x402bazaar.app within minutes

## Your Endpoint Details

**Base URL**: `https://ssl-checker-mcp.vercel.app` (to be deployed)
**Method**: `POST`  
**Price**: $0.002 USDC  
**Network**: Base Mainnet (eip155:8453)  
**Payment Address**: `0xf081ee84c0d85278a6242bc265f0b312021ebeb1`

**Primary Endpoints**:
1. `/api/check` - Check SSL certificate validity and expiration
2. `/api/detailed` - Get detailed SSL certificate information

**Example Response**:
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
    "authorized": true
  }
}
```

## Use Cases for AI Agents

Your SSL/TLS Certificate Checker MCP is perfect for:
- **Certificate Expiry Monitoring** - Alert before certificates expire
- **Security Audits** - Check SSL configuration across domains
- **Compliance Checking** - Ensure valid SSL on all company domains
- **Incident Response** - Quick SSL validation during outages
- **CI/CD Integration** - Validate SSL in deployment pipelines
- **Infrastructure Audits** - Check all domains regularly
- **Vendor Validation** - Verify partner SSL security
- **Automated Alerts** - Notify teams of security issues

## Metadata Quality

**Description**: 
"SSL/TLS certificate checker for AI agents. Validate certificates, check expiration dates, verify certificate chains, and analyze security. Get protocol versions, cipher suites, and security grades (A-F). Perfect for monitoring, security audits, and compliance checking."

**Tags**:
- ssl
- tls
- certificate
- security
- validation
- https
- monitoring
- expiration
- audit
- mcp

## Support

- **x402 Docs**: https://docs.cdp.coinbase.com/x402
- **GitHub**: https://github.com/coinbase/x402
- **Bazaar**: https://x402bazaar.app
- **Live API**: https://ssl-checker-mcp.vercel.app (to be deployed)

## Next Steps

⏳ Deploying to Vercel
⏳ Creating GitHub repository
⏳ Validating all endpoints
⏳ Waiting for first paid call to auto-list on Bazaar

Your MCP is ready for deployment!

---

**Coming soon!** After deployment, your first paid call will automatically list you on x402bazaar.app! 🚀
