import styled from "styled-components";

const Wrapper = styled.section`
    /* color: white;
    margin-top: 100px;
    .container1{
        display: flex;
        justify-content: space-evenly;

    }
    .heading{
        font-size: 25px;
        text-align: center;
    }
    .image{
        img{
            height: 350px;
            margin: 90px 0;
        }
    }
    .content{
        font-size: 22px;
        span{
            color: #cd5ff8;
        }
    }
    ul li{
        list-style-type: none;
        font-size: 22px;
        display: flex;
        gap: 20px;
    }
    .container2{
        display: flex;
        flex-direction: column; 
        justify-content: center; 
        align-items: center;         
        text-align: center; 
        h1{
            font-size: 25px;
            margin-bottom: 50px;
            strong{
                color: #cd5ff8; 
            }
        }
    }
    .main-container{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 100px;
        div{
            border: white 1px solid;
            padding: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        div:hover{
            border: #cd5ff8 2px solid;
            transform: scale(1.1);
            box-shadow: 0 0 15px #cd5ff8;
        }
    }
    
   @media screen and (max-width: 600px) {
  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding-inline: 16px;
    box-sizing: border-box;
    text-align: center;
  }

  .description {
    font-size: 14px;
    width: 100%;
  }

  .heading {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .content {
    font-size: 14px;
    line-height: 1.6;
    margin: 0 auto;
  }

  ul {
    padding: 0;
    list-style: none;
    margin: 10px 0 0 0;
  }

  ul li {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    margin-left: 15px;
  }

  ul li img {
    height: 14px;
    margin-right: 8px;
  }

  .image {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .image img {
    width: 90%;
    max-width: 260px;
    height: auto;
  }

  .container2 {
    margin-top: 40px;
    padding-inline: 16px;
    box-sizing: border-box;
    text-align: center;
  }

  .container2 h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }

  .main-container div {
    width: 60px;
    height: 60px;
  }

  .main-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
 */


/* .about {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 80px 100px;
  gap: 100px;
  color: #ffffff;
  overflow-x: hidden;
}

.about-photo {
  flex: 0 0 350px;
  position: sticky;
  top: 150px;
  align-self: flex-start;
}

.about-photo img {
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(72, 71, 71, 0.5);
}

.about-content {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 0 90px;
  padding-right: 20px;
  margin-top: 50px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
}


.about-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #c77dff;
}

.about-content p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #cccccc;
}

.about-content h2 {
  margin-top: 40px;
  font-size: 28px;
  color: #c77dff;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.skills span {
  background: #3b82f6;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
}

.timeline {
  margin-top: 20px;
}

.timeline-item {
  margin-bottom: 20px;
  border-left: 3px solid #c77dff;
  padding-left: 15px;
}

.timeline-item .year {
  font-weight: bold;
  color: #3b82f6;
}

.timeline-item p {
  margin: 5px 0 0 0;
  color: #cccccc;
}

.facts {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.fact-card {
  background: #1f1f3a;
  padding: 15px 20px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  min-width: 200px;
  text-align: center;
  transition: all 0.3s ease;
}

.fact-card:hover {
  background: #c77dff;
  color: #000000;
}

@media (max-width: 900px) {
  .about {
    flex-direction: column;
    align-items: center;
    padding: 60px 30px;
  }

  .about-photo img {
    max-width: 250px;
  }

  .about-content h1 {
    font-size: 36px;
  }
} */


/* ========== Animations ========== */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== About Section ========== */

.about {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 80px 150px;
  gap: 100px;
  color: #ffffff;
  overflow-x: hidden;
  animation: fadeIn 1.5s ease;
}

/* Left photo wrapper */
.about-photo {
  flex: 0 0 350px;
  position: sticky;
  top: 100px;
  align-self: flex-start;
  animation: slideInLeft 1.5s ease;
  padding: 70px ;
}

.about-photo img {
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(72, 71, 71, 0.5);
}

/* Right content */
.about-content {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 0 90px;
  padding-right: 20px;
  margin-top: 50px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  animation: slideInRight 1.5s ease;
}

/* hide scrollbar for webkit browsers */
.about-content::-webkit-scrollbar {
  display: none;
}

.about-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #c77dff;
  animation: fadeUp 1s ease;
}

.about-content p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #cccccc;
  animation: fadeIn 2s ease;
}

.about-content h2 {
  margin-top: 40px;
  font-size: 28px;
  color: #c77dff;
  animation: fadeUp 1s ease;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.skills span {
  background: #3b82f6;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  animation: fadeUp 0.8s ease;
}

.skills span:nth-child(1) { animation-delay: 0.3s; }
.skills span:nth-child(2) { animation-delay: 0.5s; }
.skills span:nth-child(3) { animation-delay: 0.7s; }
.skills span:nth-child(4) { animation-delay: 0.9s; }
.skills span:nth-child(5) { animation-delay: 1.1s; }
.skills span:nth-child(6) { animation-delay: 1.3s; }
.skills span:nth-child(7) { animation-delay: 1.5s; }
.skills span:nth-child(8) { animation-delay: 1.7s; }

.timeline {
  margin-top: 20px;
}

.timeline-item {
  margin-bottom: 20px;
  border-left: 3px solid #c77dff;
  padding-left: 15px;
  opacity: 0;
  animation: fadeUp 1s ease forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.4s; }
.timeline-item:nth-child(2) { animation-delay: 0.6s; }
.timeline-item:nth-child(3) { animation-delay: 0.8s; }

.timeline-item .year {
  font-weight: bold;
  color: #3b82f6;
}

.timeline-item p {
  margin: 5px 0 0 0;
  color: #cccccc;
}

.facts {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.fact-card {
  background: #1f1f3a;
  padding: 15px 20px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  min-width: 200px;
  text-align: center;
  transition: all 0.3s ease;
}

.fact-card:hover {
  background: #c77dff;
  color: #000000;
  box-shadow: 0 0 15px #c77dff;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .about {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    gap: 0;
  }

  .about-photo {
  position: static;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin-top: 50px;
  margin-bottom: -150px;
}

.about-photo img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  background-color: #1a1a40;
}


  .about-content {
    padding: 0;
    max-height: none;
    overflow: visible;
    animation: none;
  }

  .about-content h1 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 15px;
  }

  .about-content p {
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 25px;
  }

  .about-content h2 {
    font-size: 22px;
    text-align: center;
    margin-top: 30px;
  }

  .skills {
    justify-content: center;
    gap: 8px;
  }

  .skills span {
    font-size: 13px;
    padding: 6px 12px;
  }

  .timeline {
    margin-top: 15px;
  }

  .timeline-item {
    padding-left: 10px;
    margin-bottom: 15px;
    font-size: 14px;
  }

  .timeline-item .year {
    font-size: 14px;
  }

  .timeline-item p {
    font-size: 14px;
  }

  .facts {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .fact-card {
    min-width: unset;
    width: 80%;
    font-size: 14px;
    padding: 12px 15px;
  }
}


`
export default Wrapper