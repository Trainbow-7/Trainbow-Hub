import crypto from "crypto";

/**
 * Hash a plain-text password using scrypt with a unique cryptographically secure salt.
 * Output format: <salt_hex>:<hash_hex>
 */
export async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString("hex");
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(`${salt}:${derivedKey.toString("hex")}`);
    });
  });
}

/**
 * Verify a plain-text password against a stored <salt_hex>:<hash_hex> using constant-time comparison.
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  return new Promise((resolve) => {
    const parts = storedHash.split(":");
    if (parts.length !== 2) {
      resolve(false);
      return;
    }
    const [salt, key] = parts;
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) {
        resolve(false);
        return;
      }
      const keyBuffer = Buffer.from(key, "hex");
      if (keyBuffer.length !== derivedKey.length) {
        resolve(false);
        return;
      }
      resolve(crypto.timingSafeEqual(keyBuffer, derivedKey));
    });
  });
}
