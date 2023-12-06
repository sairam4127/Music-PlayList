import styled from 'styled-components'

export const BannerCont = styled.div`
  height: 450px;

  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 50px;
`
export const BannerHead = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
`

export const BannerPara = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
`
export const PlaylistBg = styled.div`
  background-color: #152850;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const PlaylistTSCont = styled.div`
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
`
export const PlaylistSearchCont = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ffffff;
  font-family: 'Roboto';
  color: #ffffff;
  padding: 10px;
`
export const InputEle = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Roboto';
  color: #ffffff;
`

export const ItemUl = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const ErrorCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
