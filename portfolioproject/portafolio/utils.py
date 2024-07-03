from cryptography.fernet import Fernet
import base64


key = Fernet.generate_key()
cipher_suite = Fernet(key)

def encrypt_menssage(message):
    cipher_text = cipher_suite.encrypt(message.encode())
    return base64.urlsafe_b64encode(cipher_text).decode()

def decrypt_message(cipher_text):
    decoded_cipher_text = base64.urlsafe_b64decode(cipher_text)
    decrypted_message = cipher_suite.decrypt(decoded_cipher_text).decode()
    return decrypted_message