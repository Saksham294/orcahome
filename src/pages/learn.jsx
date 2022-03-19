import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import ReactAudioPlayer from 'react-audio-player'

import audio from '../../public/audio/frequency.mp3'
import frequency1 from '../../public/images/frequency2.png'
import LearnBanner from '../../public/images/learn.jpg'
import organization1 from '../../public/images/partner1.png'
import organization2 from '../../public/images/partner2.png'
import roundorca from '../../public/images/roundorca.png'
import salishsea from '../../public/images/salishsea.png'
import TopBanner from '../components/TopBanner'
import learnStyles from '../styles/Learn.module.css'

export const learn = () => {
  return (
    <div className={learnStyles.learn}>
      <Head>
        <title>Orcasound</title>
      </Head>

      <TopBanner
        bannerImg={LearnBanner}
        pageTitle={`Learn`}
        pageDesc={`You’ll hear a lot of different sounds on the hydrophones. Select the jump links below or scroll down to learn about the marine acoustic landscape. `}
        scrollToId={`learn`}
      />
      <div id="learn" />
      <ul className={learnStyles.hello}>
        <li>Sounds of the Salish Sea</li>
        <li>3 common calls</li>
        <li>Souther Resident Killer Whale Call Catalog</li>
        <li>Exhibits</li>
      </ul>

      <Box sx={{ marginLeft: '85px' }}>
        <Typography variant="h1">
          <h1 className={learnStyles.salish}> Sounds Of The Salish Sea</h1>
        </Typography>
      </Box>

      <Box
        width={969}
        height={84}
        sx={{ ml: '85px', marginTop: '30px', marginBottom: '29px' }}
      >
        <Typography variant="body1">
          <p className={learnStyles.salishsea}>
            Explore common sounds of the Salish Sea by selecting the animals and
            other objects in this anoramic soundscape of the inlandwaters of
            Washington State(USA) and British Columbia(Canada)
          </p>
        </Typography>
      </Box>

      <Box sx={{ marginLeft: '84px' }}>
        <div className={learnStyles.imageWrapper}>
          <Image
            className={learnStyles.salishseaimg}
            src={salishsea}
            alt="Sounds Of The Salish Sea"
            width={1234}
            height={701}
            layout="intrinsic"
            quality={65}
          />
        </div>
      </Box>
      <div className={learnStyles.orca}>
        <Image
          src={roundorca}
          alt="OrcaImage"
          width={400}
          height={350}
          layout="intrinsic"
          quality={65}
        />
      </div>
      <h2 className={learnStyles.calls}>3 Common Calls</h2>
      <div>
        <div className={learnStyles.gallery}>
          <Image src={frequency1} alt="J pod's call - Frequency and Time" />
          <h6>{`J pod's Favorite call:501`}</h6>
          <p>{`More description goes here`}</p>
          <div>
            <ReactAudioPlayer
              className={learnStyles.audio}
              src={audio}
              autoPlay={false}
              controls
            />
          </div>
        </div>

        <div className={learnStyles.image}>
          <Image src={frequency1} alt="K pod's call - Frequency and Time" />
          <h6>{`K pod's Favorite call:516`}</h6>
          <p>{`More description goes here`}</p>
          <div>
            <ReactAudioPlayer
              className={learnStyles.audio}
              src={audio}
              autoPlay={false}
              controls
            />
          </div>
        </div>

        <div className={learnStyles.gallery2}>
          <Image src={frequency1} alt="L pod's cal - Frequency and Time" />
          <h6>{`L pod's Favorite call:519`}</h6>
          <p>{`More description goes here`}</p>
          <div>
            <ReactAudioPlayer
              className={learnStyles.audio}
              src={audio}
              autoPlay={false}
              controls
              alt="l pod favorite call"
            />
          </div>
        </div>
      </div>
      <div className={learnStyles.property}>
        <h2 className={learnStyles.exhibits}>Exhibits</h2>
        <p className={learnStyles.exhibit}>
          {`Learn About the Marine acoustic landscape and the hydrophone network`}
          <br></br>
          {`by exploring these Orcasound Exhibit screens designed for
          educational organizations in the Pudget Sound regions`}
        </p>
      </div>
      <div className={learnStyles.org}>
        <Image src={organization1} alt="Seattle aquarium exhibit" />
        <a href="https://killerwhaletales.org/">
          <Image src={organization2} alt="Marine Science Center Logo" />
        </a>
      </div>
    </div>
  )
}

export default learn
