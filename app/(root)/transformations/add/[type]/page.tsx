import Header from "@/components/shared/Header"
import TransformationFrom from "@/components/shared/TransformationFrom";
import { transformationTypes } from "@/constants"
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async({ params }: SearchParamProps) => {
  const { userId } = await auth();
  const { type } = await params;
  const transformation = transformationTypes[type];

  if(!userId){
    redirect("/sign-in")
  }else{
    console.log(userId)
  }

  const user = await getUserById(userId);

  if(!user) console.log("error caught")

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
      <TransformationFrom
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  )
}

export default AddTransformationTypePage