import styled from "styled-components";

const Wrapper = styled.div`
    /* color: white;
    margin-left: 30px;
    .container{
        display: flex;
        margin: 150px 0 0 100px;
        gap: 100px;
    }
    .home-header{
        font-size: 25px;
    }
    .main-name{
        color: #cd5ff8;
        margin-left: 10px;
    }
    .image{
        width: 300px;
    }
    .image img{
        height: 200px;
        margin: 20px auto 0;
    }
    .description{
        margin: 70px auto;
        display: flex;
        justify-content: space-evenly;
    }
    .profile{
        background-color: white;
        border-radius: 50%;
        height: 200px;
        width: 200px;
        border: 5px solid white;
        img{
            width: 100%;   
            height: 100%;   
            object-fit: cover; 
            border-radius: 50%;
        }
    }
    .intro{
        text-align: left;
        font-size: 20px;
    }
    .heading{
        font-size: 25px;
        span{
            color: #cd5ff8;
        }
    }
    .social-link{
        text-align: center;
        font-size: 20px;
        margin-bottom: 100px;
        p{
            margin: 0;
            padding: 0;  
            span{
                color: #cd5ff8;
            }
        }
    }
    .social-heading{
        font-size: 25px;
        margin: 0;
        padding: 0;
    }
    .icon-div{
        height: 50px;
        width: 30%;
        margin: 20px auto;
        display: flex;
        justify-content: space-evenly;
        img{
            height: 40px;
        }
    }
    .textWrapper{
        font-size: 22px;
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        align-items: center;
        color: #cd5ff8;
    }
    .cursor{
        display: inline-block;
        animation: blink 0.7s steps(2, start) infinite;
        color: #c77dff;

        @keyframes blink {
            0% {
            opacity: 1;
            }
            50% {
            opacity: 0;
            }
            100% {
            opacity: 1;
            }
        }
    }
    @media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
    align-items: center;
    margin: 120px 10px 0 10px;
    gap: 30px;
    text-align: center;
  }

  .profile {
    height: 140px;
    width: 140px;
    border: 3px solid white;
    margin-bottom: 10px;
  }

  .profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .home-header {
    font-size: 18px;
    margin-top: 10px;
  }

  .heading-name {
    font-size: 20px;
  }

  .main-name {
    margin-left: 5px;
  }

  .textWrapper {
    font-size: 16px;
    margin-top: 5px;
  }

  .description {
    flex-direction: column;
    align-items: center;
    margin: 40px 10px;
    gap: 20px;
    text-align: center;
  }

  .intro {
    font-size: 16px;
    line-height: 1.5;
  }

  .heading {
    font-size: 18px;
  }

  .image {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .image img {
    height: auto;
    width: 80%;
    max-width: 300px;
    margin-top: 10px;
  }

  .social-link {
    font-size: 16px;
    margin: 50px 10px;
  }

  .social-heading {
    font-size: 18px;
  }

  .icon-div {
    width: 80%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 80px;
  }

  .icon-div img {
    height: 30px;
    margin: 5px;
  }
} */

/* Hero Section */
.hero {
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  justify-content: center;
  padding: 10px 60px;
  flex-wrap: wrap;
  color: #ffffff;
  gap: 150px;
}
.hero-text{
  animation: fadeIn 1.5s ease;
}
.hero-text h1 {
  font-size: 72px;
  font-weight: 700;
}
.hero-text h2 {
  margin-top: -15px;
  color:rgb(203, 195, 195);
}

.hero-text h1 span {
  color: #c77dff;
}

.buttons {
  margin-top: 30px;
}

.btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn.primary {
  border: 2px solid #3b82f6;
  color: #3b82f6;
  background: none;
}

.btn.primary:hover {
  background: #3b82f6;
  color: #ffffff;
}

.btn.outline {
  border: 2px solid #c77dff;
  color: #c77dff;
  background: none;
  margin-left: 20px;
}

.btn.outline:hover {
  background: #c77dff;
  color: #ffffff;
}
.hero-image img {
  height: 655px;
  width: 100%;
}

@media (max-width: 600px) {
  .hero {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 10px;
    gap: 40px;
    margin-top: 50px;
  }

  .hero-image img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #ffffff;
    margin: 20px 0;
  }

  .hero-text h1 {
    font-size: 36px;
    line-height: 1.2;
  }

  .hero-text h2 {
    font-size: 18px;
    margin-top: 10px;
    color: #ccc;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .btn {
    width: 90%;
    font-size: 15px;
    padding: 12px;
  }

  .btn.outline {
    margin-left: 0;
  }
}

`

export default Wrapper