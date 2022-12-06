// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista.
// (chiaramente usando Vue, etc.,)
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const {createApp} = Vue

createApp({
    data(){
        return{
            emails: []

        }
    },
    methods:{
        
    },
    mounted(){
        for(let i = 0; i < 15; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risultato) => {
                
                // console.log('risultato.data.response');
                // console.log(risultato.data.response);
                (this.emails).push(risultato.data.response);
            });
        }

    }
}).mount('#app')













// const {createApp} = Vue

// createApp({
//     data(){
//         return{

//         }
//     },
//     methods:{
        
//     },
//     mounted(){

//     }
// }).mount('#app')



// posts.forEach((element, index, array) => {});

// ciclo for console esplicativo 
// for(let i = 0; i < arr.length; i++){
//     console.log("arr[" + i + "]: " + arr[i]);

// };

// ciclo while console esplicativo 
// let i = 0;
// while(i < arr.length){
//     console.log("arr[" + i + "]: " + arr[i]);

//     i++;
// };

// for(){};

// A = document.getElementById("B").value;


//``

// console.log("");
// for(let i = 0; i < 10; i++){

// }

// }