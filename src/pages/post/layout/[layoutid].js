import { useRouter } from "next/router"

function LayoutDetail() {
    const router = useRouter()
    const layoutId = router.query.layoutId
    return <h1>dasd asdasdasd ggfhfgh f {layoutId}</h1>
}

export default LayoutDetail