import express from 'express';
import tls from 'tls';
import https from 'https';
import dotenv from 'dotenv';
import { verifyPayment } from '@x402/evm';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Payment configuration
const PAYMENT_CONFIG = {
  price: '0.002',
  currency: 'USDC',
  chainId: 'eip155:8453',
  payTo: '0xf081ee84c0d85278a6242bc265f0b312021ebeb1'
};

// Root landing page
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSL/TLS Certificate Checker MCP - x402 Payment Protected API</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        .card {
            background: white;
            border-radius: 12px;
            padding: 40px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            color: #00b894;
        }
        .subtitle {
            font-size: 1.2em;
            color: #666;
            margin-bottom: 30px;
        }
        .badge {
            display: inline-block;
            padding: 6px 12px;
            background: #00b894;
            color: white;
            border-radius: 20px;
            font-size: 0.85em;
            margin-right: 10px;
            margin-bottom: 10px;
        }
        .price {
            font-size: 2em;
            color: #00b894;
            font-weight: bold;
            margin: 20px 0;
        }
        .feature {
            padding: 15px 0;
            border-bottom: 1px solid #eee;
        }
        .feature:last-child { border-bottom: none; }
        .feature strong { color: #00b894; }
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }
        .code-block {
            background: #1e1e1e;
            color: #d4d4d4;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 15px 0;
        }
        .btn {
            display: inline-block;
            padding: 12px 30px;
            background: #00b894;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            margin-right: 10px;
            transition: background 0.3s;
        }
        .btn:hover { background: #00a881; }
        .endpoint {
            background: #f8f9fa;
            padding: 15px;
            border-left: 4px solid #00b894;
            margin: 15px 0;
            border-radius: 4px;
        }
        ul { margin-left: 20px; }
        li { margin: 8px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <h1>🔒 SSL/TLS Certificate Checker MCP</h1>
            <p class="subtitle">x402 Payment-Protected SSL Certificate Validation & Security Analysis API</p>

            <div style="margin: 20px 0;">
                <span class="badge">MCP Compatible</span>
                <span class="badge">x402 Payments</span>
                <span class="badge">Base Mainnet</span>
                <span class="badge">USDC</span>
            </div>

            <div class="price">$0.002 per check</div>

            <div class="feature">
                <strong>✅ Certificate Validation</strong><br>
                Check if SSL certificate is valid and not expired
            </div>
            <div class="feature">
                <strong>🔗 Chain Verification</strong><br>
                Verify certificate chain and trusted CA issuers
            </div>
            <div class="feature">
                <strong>⏰ Expiration Monitoring</strong><br>
                Get expiration date and days remaining
            </div>
            <div class="feature">
                <strong>🔐 Security Analysis</strong><br>
                Check protocol versions, cipher suites, and security grade
            </div>
            <div class="feature">
                <strong>💳 Micropayments</strong><br>
                Pay only $0.002 USDC per check via x402 protocol on Base
            </div>
        </div>

        <div class="card">
            <h2 style="color: #00b894; margin-bottom: 20px;">🚀 API Endpoints</h2>

            <div class="endpoint">
                <strong>POST /api/check</strong><br>
                Check SSL certificate for a domain
                <div class="code-block">POST /api/check
Content-Type: application/json
{ "domain": "example.com" }</div>
            </div>

            <div class="endpoint">
                <strong>POST /api/detailed</strong><br>
                Get detailed SSL certificate information
                <div class="code-block">POST /api/detailed
Content-Type: application/json
{ "domain": "example.com" }</div>
            </div>

            <div class="endpoint">
                <strong>GET /mcp/tools</strong><br>
                Get MCP tool metadata (free)
            </div>

            <div class="endpoint">
                <strong>GET /.well-known/x402</strong><br>
                x402 Bazaar discovery endpoint (free)
            </div>
        </div>

        <div class="card">
            <h2 style="color: #00b894; margin-bottom: 20px;">💰 Payment Details</h2>
            <ul>
                <li><strong>Network:</strong> Base Mainnet (eip155:8453)</li>
                <li><strong>Currency:</strong> USDC</li>
                <li><strong>Price:</strong> $0.002 per check</li>
                <li><strong>Protocol:</strong> x402 "exact" scheme</li>
                <li><strong>Payment Address:</strong> <code>0xf081ee84c0d85278a6242bc265f0b312021ebeb1</code></li>
            </ul>
        </div>

        <div class="card">
            <h2 style="color: #00b894; margin-bottom: 20px;">🤖 For AI Agents</h2>
            <p>This MCP server works with Claude Code and other AI agents supporting MCP and x402 payments.</p>
            <br>
            <p><strong>Agents can:</strong></p>
            <ul>
                <li>Discover this service on x402 Bazaar</li>
                <li>Pay automatically via CDP Facilitator</li>
                <li>Check SSL certificate validity</li>
                <li>Monitor certificate expiration</li>
                <li>Verify certificate chains</li>
                <li>Audit website security</li>
                <li>Alert on security issues</li>
            </ul>
        </div>

        <div class="card" style="text-align: center;">
            <a href="https://x402bazaar.app" class="btn">Browse x402 Bazaar</a>
            <a href="/mcp/tools" class="btn">MCP Tools</a>
            <a href="/health" class="btn">Health Check</a>
        </div>
    </div>
</body>
</html>
  `);
});

// x402 Bazaar discovery endpoint
app.get('/.well-known/x402', (req, res) => {
  res.json({
    name: 'SSL/TLS Certificate Checker MCP',
    description: 'SSL/TLS certificate validation and security analysis with x402 micropayments. Check validity, expiration, chain, and security grade.',
    version: '1.0.0',
    payment: {
      scheme: 'exact',
      network: PAYMENT_CONFIG.chainId,
      price: `$${PAYMENT_CONFIG.price}`,
      currency: PAYMENT_CONFIG.currency,
      payTo: PAYMENT_CONFIG.payTo
    },
    endpoints: [
      {
        path: '/api/check',
        method: 'POST',
        description: 'Check SSL certificate validity and expiration',
        parameters: [
          { name: 'domain', required: true, description: 'Domain name to check (e.g., example.com)' }
        ]
      },
      {
        path: '/api/detailed',
        method: 'POST',
        description: 'Get detailed SSL certificate information and security analysis',
        parameters: [
          { name: 'domain', required: true, description: 'Domain name to check' }
        ]
      }
    ],
    mcp: {
      toolsEndpoint: '/mcp/tools'
    }
  });
});

// MCP tools metadata endpoint
app.get('/mcp/tools', (req, res) => {
  res.json({
    tools: [
      {
        name: 'check_ssl_certificate',
        description: 'Check SSL/TLS certificate validity, expiration, and basic security',
        inputSchema: {
          type: 'object',
          properties: {
            domain: {
              type: 'string',
              description: 'Domain name to check (without https://, e.g., example.com)'
            }
          },
          required: ['domain']
        }
      },
      {
        name: 'get_detailed_ssl_info',
        description: 'Get detailed SSL certificate information including chain, issuer, and security analysis',
        inputSchema: {
          type: 'object',
          properties: {
            domain: {
              type: 'string',
              description: 'Domain name to analyze'
            }
          },
          required: ['domain']
        }
      }
    ]
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'ssl-checker-mcp',
    timestamp: new Date().toISOString(),
    payment: {
      enabled: true,
      price: `$${PAYMENT_CONFIG.price}`,
      currency: PAYMENT_CONFIG.currency,
      network: PAYMENT_CONFIG.chainId
    }
  });
});

// Payment required response helper
function paymentRequired(res) {
  return res.status(402).json({
    error: 'Payment Required',
    message: 'This endpoint requires x402 payment',
    payment: {
      scheme: 'exact',
      network: PAYMENT_CONFIG.chainId,
      price: `$${PAYMENT_CONFIG.price}`,
      currency: PAYMENT_CONFIG.currency,
      payTo: PAYMENT_CONFIG.payTo
    },
    instructions: 'Include payment proof in X-Payment-Proof header'
  });
}

// Helper function to check SSL certificate
function checkSSLCertificate(domain, port = 443) {
  return new Promise((resolve, reject) => {
    const options = {
      host: domain,
      port: port,
      method: 'GET',
      rejectUnauthorized: false, // Allow checking even invalid certs
      requestCert: true,
      agent: false
    };

    const socket = tls.connect(options, () => {
      const cert = socket.getPeerCertificate(true);
      const protocol = socket.getProtocol();
      const cipher = socket.getCipher();

      socket.end();

      if (!cert || Object.keys(cert).length === 0) {
        reject(new Error('No certificate found'));
        return;
      }

      resolve({
        cert,
        protocol,
        cipher,
        authorized: socket.authorized,
        authorizationError: socket.authorizationError
      });
    });

    socket.on('error', (error) => {
      reject(error);
    });

    socket.setTimeout(10000, () => {
      socket.destroy();
      reject(new Error('Connection timeout'));
    });
  });
}

// Calculate days until expiration
function getDaysUntilExpiration(validTo) {
  const now = new Date();
  const expiryDate = new Date(validTo);
  const diffTime = expiryDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Get security grade
function getSecurityGrade(data) {
  let score = 100;

  // Check protocol version
  if (data.protocol === 'TLSv1' || data.protocol === 'TLSv1.1') {
    score -= 30; // Old protocols
  } else if (data.protocol === 'TLSv1.2') {
    score -= 10; // Acceptable but not best
  }

  // Check cipher strength
  if (data.cipher && data.cipher.name) {
    if (data.cipher.name.includes('RC4') || data.cipher.name.includes('DES')) {
      score -= 40; // Weak ciphers
    } else if (data.cipher.name.includes('CBC')) {
      score -= 10; // CBC mode ciphers have known vulnerabilities
    }
  }

  // Check certificate validity
  const daysRemaining = getDaysUntilExpiration(data.cert.valid_to);
  if (daysRemaining < 0) {
    score -= 50; // Expired
  } else if (daysRemaining < 30) {
    score -= 20; // Expiring soon
  }

  // Check if authorized
  if (!data.authorized) {
    score -= 30;
  }

  // Convert score to grade
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

// SSL check endpoint with payment requirement
app.post('/api/check', async (req, res) => {
  const paymentProof = req.headers['x-payment-proof'];

  if (!paymentProof) {
    return paymentRequired(res);
  }

  // Verify payment on-chain
  try {
    const isValidPayment = await verifyPayment({
      proof: paymentProof,
      expectedAmount: PAYMENT_CONFIG.price,
      expectedCurrency: PAYMENT_CONFIG.currency,
      expectedRecipient: PAYMENT_CONFIG.payTo,
      chainId: PAYMENT_CONFIG.chainId
    });

    if (!isValidPayment) {
      return res.status(402).json({
        error: 'Payment verification failed',
        message: 'Invalid or insufficient payment proof'
      });
    }
  } catch (error) {
    return res.status(402).json({
      error: 'Payment verification error',
      message: error.message || 'Could not verify payment'
    });
  }

  const { domain } = req.body;

  if (!domain) {
    return res.status(400).json({
      error: 'Missing required parameter',
      message: 'Domain parameter is required in request body'
    });
  }

  // Clean domain (remove https://, www., trailing slashes)
  const cleanDomain = domain
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '')
    .split('/')[0];

  try {
    const data = await checkSSLCertificate(cleanDomain);
    const daysRemaining = getDaysUntilExpiration(data.cert.valid_to);
    const grade = getSecurityGrade(data);

    res.json({
      success: true,
      domain: cleanDomain,
      valid: data.authorized,
      certificate: {
        subject: data.cert.subject?.CN || cleanDomain,
        issuer: data.cert.issuer?.O || data.cert.issuer?.CN || 'Unknown',
        validFrom: data.cert.valid_from,
        validTo: data.cert.valid_to,
        daysRemaining: daysRemaining,
        expired: daysRemaining < 0
      },
      security: {
        protocol: data.protocol,
        grade: grade,
        authorized: data.authorized,
        error: data.authorizationError || null
      },
      checkedAt: new Date().toISOString(),
      payment: {
        verified: true,
        amount: PAYMENT_CONFIG.price,
        currency: PAYMENT_CONFIG.currency
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'SSL check failed',
      message: error.message,
      domain: cleanDomain
    });
  }
});

// Detailed SSL info endpoint with payment requirement
app.post('/api/detailed', async (req, res) => {
  const paymentProof = req.headers['x-payment-proof'];

  if (!paymentProof) {
    return paymentRequired(res);
  }

  // Verify payment on-chain
  try {
    const isValidPayment = await verifyPayment({
      proof: paymentProof,
      expectedAmount: PAYMENT_CONFIG.price,
      expectedCurrency: PAYMENT_CONFIG.currency,
      expectedRecipient: PAYMENT_CONFIG.payTo,
      chainId: PAYMENT_CONFIG.chainId
    });

    if (!isValidPayment) {
      return res.status(402).json({
        error: 'Payment verification failed',
        message: 'Invalid or insufficient payment proof'
      });
    }
  } catch (error) {
    return res.status(402).json({
      error: 'Payment verification error',
      message: error.message || 'Could not verify payment'
    });
  }

  const { domain } = req.body;

  if (!domain) {
    return res.status(400).json({
      error: 'Missing required parameter',
      message: 'Domain parameter is required in request body'
    });
  }

  // Clean domain
  const cleanDomain = domain
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '')
    .split('/')[0];

  try {
    const data = await checkSSLCertificate(cleanDomain);
    const daysRemaining = getDaysUntilExpiration(data.cert.valid_to);
    const grade = getSecurityGrade(data);

    res.json({
      success: true,
      domain: cleanDomain,
      valid: data.authorized,
      certificate: {
        subject: {
          commonName: data.cert.subject?.CN || cleanDomain,
          organization: data.cert.subject?.O || null,
          organizationalUnit: data.cert.subject?.OU || null,
          locality: data.cert.subject?.L || null,
          state: data.cert.subject?.ST || null,
          country: data.cert.subject?.C || null
        },
        issuer: {
          commonName: data.cert.issuer?.CN || 'Unknown',
          organization: data.cert.issuer?.O || null,
          country: data.cert.issuer?.C || null
        },
        validity: {
          validFrom: data.cert.valid_from,
          validTo: data.cert.valid_to,
          daysRemaining: daysRemaining,
          expired: daysRemaining < 0,
          expiringSoon: daysRemaining > 0 && daysRemaining < 30
        },
        serialNumber: data.cert.serialNumber || null,
        fingerprint: data.cert.fingerprint || null,
        fingerprint256: data.cert.fingerprint256 || null,
        subjectAltNames: data.cert.subjectaltname ? data.cert.subjectaltname.split(', ') : []
      },
      security: {
        protocol: data.protocol,
        cipher: {
          name: data.cipher?.name || 'Unknown',
          version: data.cipher?.version || 'Unknown'
        },
        grade: grade,
        authorized: data.authorized,
        authorizationError: data.authorizationError || null
      },
      analysis: {
        protocolSecure: data.protocol === 'TLSv1.3' || data.protocol === 'TLSv1.2',
        certificateValid: data.authorized,
        notExpired: daysRemaining > 0,
        expirationWarning: daysRemaining > 0 && daysRemaining < 30,
        recommendations: []
      },
      checkedAt: new Date().toISOString(),
      payment: {
        verified: true,
        amount: PAYMENT_CONFIG.price,
        currency: PAYMENT_CONFIG.currency
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'SSL check failed',
      message: error.message,
      domain: cleanDomain
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'Endpoint not found',
    availableEndpoints: [
      'GET /',
      'POST /api/check',
      'POST /api/detailed',
      'GET /mcp/tools',
      'GET /.well-known/x402',
      'GET /health'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`SSL/TLS Certificate Checker MCP server running on port ${PORT}`);
  console.log(`Payment: ${PAYMENT_CONFIG.price} ${PAYMENT_CONFIG.currency} on ${PAYMENT_CONFIG.chainId}`);
});

export default app;
