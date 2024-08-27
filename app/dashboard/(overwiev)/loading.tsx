import DashboardSkeleton from "../../ui/skeletons"
import { Metadata } from "next";

export const metadata:Metadata={
    title: 'Loading overview',
}
export default function Loading (){
    return <DashboardSkeleton/>
}