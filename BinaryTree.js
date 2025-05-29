//NODE CLASS
//Kuidas üksik sõlm puus välja näeb 
class Node {
    constructor(value) {
        this.value = value;
        this.left = null; // Alguses pole vasakut 
        this.right = null; // Alguses pole paremat
    }
}

//BINARY SEARCH TREE CLASS
class BinarySearchTree {
    constructor() {
        this.root = null; //puu algab tühjana
    }

    //Sisu lisamine

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root; 
        while (true) { 
            if (value === current.value) return undefined;  //väldib duplikaate või käsitleb eraldi

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this; 
                }
                current = current.left; 

            }

            else {
                if (current.right === null ) {
                    current.right = newNode;
                    return this; 
                }
                current = current.right;
            }
        }
    }

    // #########################################################
    //Konkreetse väärtuse otsimine puust FIND meetodiga
    // Siis kui tahan leida midagi ühe konkreetse väärtuse     

    find(value){
        if (this.root === null) return false; // kui puu tühi, siis ei võta midagi 

        let current = this.root; 
        let found = false; 

        //while loop, kuni lõppu jõuame 
        while (current && !found) {
            //väärtus on väiksem, siis lähme vasakule 
            if (value < current.value) {
                current = current.left;
                //väärtus on suurem, siis lähme paremale 
            } else if (value > current.value) {
                current = current.right;
            } else {
                // kui väärtused on võrdsed, siis oleme leidnud
                found = true; 
            }
        }

        //tagastame leitud sõlme või undefined, kui ei leitud 
        return found ? current : undefined;
    }

    // #########################################################
    // 1. Algoritm
    //Järjestikune läbimine 
    //järjekord: vasak, juur,parem 
    
    //BST puhul annab alati sorteeritud jada 
    //BST on puu, kus vasak pool on väiksemad väärtused ja parem pool on suuremad väärtused 

    inOrderTraversal() {
        const result = [];

        //abifunktsioon, mis toetab rekursiivset läbimist
        const traverse = (node) => {
            if (node.left) traverse(node.left); // külastab vasakut alampuud rekursiivselt
            result.push(node.value); //lisab praeguse sõlme tulemuse result array'sse 
            if(node.right) traverse(node.right); // külastab paremat alampuud rekursiivselt 
        }
        traverse(this.root); //alustame läbimist puu juurest 
        return result; //tagastame tulemuse 
    }

    // #########################################################
    // 2. Algoritm 
    //Eeljärjekordne läbimine
    //järjekord: juur, vasak, parem
    // Kasulik puu kopeerimiseks või selle struktuuri salvestamiseks 
    preOrderTraversal() {
        const result = []; 

        const traverse = (node) => {
            result.push(node.value); //lisab praeguse sõlme tulemuse result array'sse 
            if (node.left) traverse(node.left); // käib vasakule
            if (node.right) traverse(node.right); //käib paremale 
        }
        traverse(this.root);
        return(result);

    }


    // #########################################################
    postOrderTraversal() {
        const result = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left); // käib vasakule
            if(node.right) traverse(node.right); //käib paremale 
            result.push(node.value); //lisab praeguse sõlme tulemuse result array'sse 
        }
        traverse(this.root);
        return(result);
    }

    // mida teeb traverse?
    // 1. külastab vasakut alampuud rekursiivselt
    // 2. külastab paremat alampuud rekursiivselt
    // 3. lisab praeguse sõlme tulemuse result array'sse 
    // 4. tagastab result array'i 

    // #########################################################

    // #########################################################





    
}


