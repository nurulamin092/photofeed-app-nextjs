import { getPhotosById } from "@/lib/image-data"
import { NextResponse } from "next/server"

export async function GET(_request, { params }) {
    const photoId = params?.id
    const data = await getPhotosById(photoId)
    return NextResponse.json(data)
}