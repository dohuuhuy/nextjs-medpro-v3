export const handleResize = ({ state, setstate, listFeature }: any) => {
  let missItem = 0
  const limitfeature = state?.limitfeature ? 5 : -1

  const width = window.innerWidth
  const widthMobile = width < 768
  const numColumn = Number(width < 768 ? 3 : 4)
  const compareNum = listFeature?.length > limitfeature

  const listSlice = compareNum
    ? listFeature?.slice(0, widthMobile ? limitfeature : -1)
    : listFeature
  const lengthItem = Number(listSlice?.length)

  const numXemthem = compareNum && widthMobile ? 1 : 0

  compareNum &&
    widthMobile &&
    listSlice.push({
      btn: true,
      name: state.limitfeature ? 'Xem thêm' : 'Thu gọn',
      image: require('./images/xemthem.svg'),
      toggle: state.limitfeature
    } as any)

  for (let i = 1; i <= 3; i++) {
    if ((lengthItem + i) % numColumn === 0) {
      missItem = i - numXemthem
    }
  }

  const missItemArr: any = [...Array(missItem).keys()]

  const y = listSlice?.concat(missItemArr)

  setstate((prev: any) => ({
    ...prev,
    list: y,
    isMobile: compareNum && widthMobile
  }))
}
