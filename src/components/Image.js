import { React, useState } from 'react'
import './Image.css'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function Image({ json }) {

    let ipfs = json.artifact_uri
    if (json.display_uri) {
        ipfs = json.display_uri
    }
    if (json.thumbnail_uri && json.thumbnail_uri !== 'ipfs://QmNrhZHUaEqxhyLfqoq1mtHSipkWHeT31LNHb1QEbDHgnc') {
        ipfs = json.thumbnail_uri
    }
    let imageUri = '';
    if (ipfs) {
        imageUri = ipfs.replace("ipfs://", "https://ipfs.io/ipfs/")
    }

    return (
        <img className='image' src={imageUri}/>
    )
}

export default Image