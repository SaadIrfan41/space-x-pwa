import ShipDetails from '../../components/ShipDetails'

const shipdetails = ({ data }: any) => {
  return <ShipDetails id={data} />
}

export async function getServerSideProps({ params }: any) {
  // Call external API from here directly
  const data = params.id

  return {
    props: { data: data },
  }
}

export default shipdetails
