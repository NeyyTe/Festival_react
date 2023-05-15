if(document.querySelector('.containerClips'))
{
    /* Tabs */
    const filters = document.querySelectorAll('.filterClips .buttonTabs');
    const clipsContainers = document.querySelectorAll('.clips');
    const page = document.querySelector('.pagination button');

    class Clip {
        constructor(linkClip, srcVideo, views, dateHour, srcImageStreamer, titleVideo, nameStreamer, activityStreamer, containerClip)
        {
            this.linkClip = linkClip;
            this.srcVideo = srcVideo;
            this.views = views;
            this.dateHour = dateHour;     
            this.srcImageStreamer = srcImageStreamer;
            this.titleVideo = titleVideo;
            this.nameStreamer = nameStreamer;
            this.activityStreamer = activityStreamer;
            this.containerClip = containerClip;
        }

        createClips() {
            const views = new Intl.NumberFormat().format(this.views);
            const date = new Date(this.dateHour).toLocaleDateString();
            const hours = new Date(this.dateHour).toLocaleTimeString();

            const card = document.createElement('a');
            card.setAttribute('href', this.linkClip);
            card.setAttribute('class', 'card');
            
            card.innerHTML = `           
                <video src="${this.srcVideo}" controls></video>
                
                <div class="desc">
                    <div><span>${views} Vues</span><span>${date} à ${hours}</span></div>
                    <div class="title">
                        <img src="${this.srcImageStreamer}" alt="Image logo de ${this.nameStreamer}">
                        <h2>${this.titleVideo}</h2>
                    </div>
                    <p><span>${this.nameStreamer}</span> - <span>${this.activityStreamer}</span></p>
                </div>
            `;

            this.containerClip.appendChild(card);
        }
        
    }   

    clipsContainers.forEach(container => {
        
        for(let i = 0 ; i < 5 ; i++)
        {
            // Card
            let card = new Clip(
                'https://www.youtube.com', 
                '', 
                1000000, 
                '01/01/2022 01:00:00', 
                'https://static-cdn.jtvnw.net/jtv_user_pictures/2895647a-2e57-45ac-a42c-0a837d42f9a1-profile_image-300x300.png', 
                'Titre video', 
                'Nom streamer', 
                'Activité',
                container
            ).createClips();
        }
    });

    for (let i = 0 ; i < filters.length ; i++)
    {
        filters[i].addEventListener('click', () => {
            
            switch(i)
            {
                case 0 : page.innerHTML = '1'; break;
                case 1 : page.innerHTML = '2'; break;
                case 2 : page.innerHTML = '3'; break;
                case 3 : page.innerHTML = '4'; break;
            }

            if(!clipsContainers[i].classList.contains('activeTabs'))
            {
                clipsContainers.forEach(container => {
                    
                    container.classList.remove('activeTabs');
        
                });

                clipsContainers[i].classList.add('activeTabs');
            } 

            if(!filters[i].classList.contains('activeClips'))
            {
                filters.forEach(filter => {
                    filter.classList.remove('activeClips');
                });
                filters[i].classList.add('activeClips');
            }

        });
    }

    const buttonSlideBar = document.querySelector('.filterClips .buttonSlideBar');
    const slideBar = document.querySelector('.slideBar')

    buttonSlideBar.addEventListener('click', () => {
        slideBar.classList.toggle('activeSlideBar');
    });

}