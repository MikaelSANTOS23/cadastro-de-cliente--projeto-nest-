from flask import Flask, render_template, request
import sqlite3


app = Flask(__name__)
app.secret_key = '1234'

def conectar_db():
 conectar = sqlite3.connect('clientes.db')
 return conectar

def criar_tabela():
 conectar = conectar_db()
 cursor = conectar.cursor()
 cursor.execute('''
                CREATE TABLE IF NOT EXISTS clientes(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                email TEXT NOT NULL
                )

''')
 conectar.commit()
 conectar.close()

@app.route('/')
def index():
 return render_template('index.html')

@app.route('/cadastrarCliente' , metods=["POST"])
def adicionar_cliente():
      if request.method == 'POST' :
         nome = request.form['nome']
         email = request.form['email']
         phonenumber = request.form['phonenumber']