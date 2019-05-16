import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div
      style={{
        // height: '100px',
        margin: '0 auto',
        textAlign: 'center',
        // paddingTop: '10vh',
      }}
      className="center loading"
    >
      <ClipLoader color={'#48ded7'} loading={true} />
    </div>
  )
}

export default Loading
