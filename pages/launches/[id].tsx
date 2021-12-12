import LaunchDetails from '../../components/LaunchDetails'

const launchdetails = ({ data }: any) => {
  return <LaunchDetails id={data} />
}

export async function getServerSideProps({ params }: any) {
  // Call external API from here directly
  const data = params.id

  return {
    props: { data: data },
  }
}

export default launchdetails
