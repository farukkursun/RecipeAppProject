import styled from "styled-components";

export const MainContainer = styled.div`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu */
  display: flex;
  flex-wrap: wrap;
  /* sığmayan taşsın düşsün */
  flex-direction: row;
  justify-content: center;
  /* height: fit-content; */
  
`;

export const RecipeCards = styled.div`
  /* search den sonra çıkan herbir yiyecek kart */
  height: 300px;
  background: #e1f1dd;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  box-shadow: 8px 8px 5px black;
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
    /* box-shadow: none özelliğinin yavaşça uygulanmasını sağlar; */
  }
`;

export const RecipeImage = styled.img`
  /* kartların içindeki resimler */
  height: 150px;
  border-radius: 10px;
  
`;

export const Button = styled.button`
  /* view more  buton */
  background-color: #00adb5;
  padding: 5px;
  /* outline: none; */
  height: 2rem;
  border: none;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
`;

export const RecipeHeader = styled.h1`
  /* kartlardaki yiyeceklerin adları */
  font-size: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  /* anasayfadaki aşçı resminin en dış kutusu */

  display: flex;
  justify-content: center;
  margin: 50px;
  /* background-color: #00adb5; */
  background-color: #e1f1dd;
  border-radius: 8px;
`;

export const HomeImg = styled.img`
  /* ana sayfadaki esas resim */
  width: 80%;
  max-width: 750px;
`;
