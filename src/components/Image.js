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



    const [loaded, setLoaded] = useState(false);

    return (
        <div className='image'>
            {loaded ? null : (
                <SkeletonTheme color="#202020" highlightColor="#444">
                <section>
                  <Skeleton height={198} width={198} />
                </section>
              </SkeletonTheme>
            )}
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <img
                className='image'
                style={loaded ? {} : { display: 'none' }}
                src={imageUri}
                onLoad={() => setLoaded(true)}
            />
            </SkeletonTheme>
        </div>
    )
}

export default Image