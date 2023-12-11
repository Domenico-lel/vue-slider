const app = Vue.createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Vivi l\'ascesa di Miles Morales come il nuovo eroe che padroneggia incredibili ed esplosivi nuovi poteri per diventare il suo Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Viaggia attraverso le dimensioni con Ratchet e Clank mentre affrontano un malvagio imperatore proveniente da un\'altra realtà.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Raccogli tutti i tuoi amici e tuffati nell'epico Fortnite di Epic Games, un enorme scontro tra 100 giocatori che combina saccheggi, crafting, sparatorie e caos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Perso, ferito e solo, un gatto randagio deve svelare un antico mistero per sfuggire a una città dimenticata da tempo.',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers è un epico gioco d'azione e avventura in terza persona che unisce una storia originale e cinematografica con modalità di gioco in singolo e cooperativo.",
                }
            ],
            currentSlide: 0,
        };
    },
    methods: {
        changeSlide(index) {
            this.currentSlide = index;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
    },
});

app.mount('#app');