import {Component} from 'react'
import {IoMdSearch} from 'react-icons/io'

import Item from '../Item'
import {
  BannerCont,
  BannerHead,
  BannerPara,
  PlaylistBg,
  PlaylistTSCont,
  PlaylistSearchCont,
  InputEle,
  ItemUl,
  ErrorCont,
} from './styledComponents'

class MusicPlayList extends Component {
  state = {ItemList: [], searchInput: ''}

  componentDidMount() {
    const {initialTracksList} = this.props
    this.setState({ItemList: initialTracksList})
  }

  onDelete = id => {
    this.setState(prevState => ({
      ItemList: [...prevState.ItemList.filter(eachobj => eachobj.id !== id)],
    }))
  }

  onEnterText = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    // const {initialTracksList} = this.props
    const {searchInput, ItemList} = this.state
    const updatedList = ItemList.filter(eachobj =>
      eachobj.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        <BannerCont>
          <BannerHead>Ed Sheeran</BannerHead>
          <BannerPara>Singer</BannerPara>
        </BannerCont>
        <PlaylistBg>
          <PlaylistTSCont>
            <BannerHead>Songs Playlist</BannerHead>
            <PlaylistSearchCont>
              <InputEle
                type="search"
                value={searchInput}
                placeholder="Search"
                onChange={this.onEnterText}
              />
              <IoMdSearch size="30" />
            </PlaylistSearchCont>
          </PlaylistTSCont>
          <ItemUl>
            {updatedList.length === 0 ? (
              <ErrorCont>
                <BannerPara>No Songs Found</BannerPara>
              </ErrorCont>
            ) : (
              updatedList.map(eachobj => (
                <Item
                  eachobj={eachobj}
                  key={eachobj.id}
                  onDelete={this.onDelete}
                />
              ))
            )}
          </ItemUl>
        </PlaylistBg>
      </>
    )
  }
}

export default MusicPlayList
