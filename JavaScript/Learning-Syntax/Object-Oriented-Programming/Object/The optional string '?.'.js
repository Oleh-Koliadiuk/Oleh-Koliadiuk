class BankAccount {
    #balance = 100;

    withdraw(amount) {
        this.#balance -= amount;
    }
}