import RocketDetails from '../../components/RocketDetails'

const rocketdetails = ({ data }: any) => {
  return <RocketDetails id={data} />
}

export async function getServerSideProps({ params }: any) {
  // Call external API from here directly
  const data = params.id

  return {
    props: { data: data },
  }
}

export default rocketdetails
