import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    console.log('🔍 API Debug - Environment variables:')
    console.log('API_URL:', API_URL ? 'Set' : 'Missing')
    console.log('API_KEY:', API_KEY ? 'Set (length: ' + API_KEY.length + ')' : 'Missing')

    if (!API_URL || !API_KEY) {
      console.error('❌ API configuration missing')
      return NextResponse.json(
        { error: 'API configuration missing' },
        { status: 500 }
      )
    }

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const emailAccountId = searchParams.get('emailAccountId')
    const folder = searchParams.get('folder') || 'inbox,spam' // Default to inbox and spam
    const page = searchParams.get('page') || '1'

    console.log('🔍 API Debug - Request parameters:')
    console.log('emailAccountId:', emailAccountId)
    console.log('folder:', folder)
    console.log('page:', page)

    // Validate required parameters
    if (!emailAccountId) {
      console.error('❌ emailAccountId is required')
      return NextResponse.json(
        { error: 'emailAccountId is required' },
        { status: 400 }
      )
    }

    // Build URL with pagination
    const url = new URL(`${API_URL}site/messages/${emailAccountId}`)
    url.searchParams.set('folder', folder)
    url.searchParams.set('page', page)
    url.searchParams.set('limit', '10') // Set page size

    console.log('🔍 API Debug - Making request to:')
    console.log('URL:', url.toString())
    console.log('Method: GET')
    console.log('Headers:', {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${API_KEY.substring(0, 10)}...` // Only show first 10 chars for security
    })

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `bearer ${API_KEY}`
      }
    })

    console.log('🔍 API Debug - Response received:')
    console.log('Status:', response.status)
    console.log('Status Text:', response.statusText)
    console.log('Headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      const errorData = await response.text()
      console.error('❌ Sendbun API error:', response.status, errorData)
      return NextResponse.json(
        { error: 'Failed to fetch emails', details: errorData },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('🔍 API Debug - Response data:')
    console.log('Data keys:', Object.keys(data))
    console.log('Data status:', data.status)
    console.log('Data structure:', JSON.stringify(data, null, 2))
    
    // Handle the actual API response structure
    if (data.status === true) {
      console.log('✅ API call successful')
      return NextResponse.json({
        success: true,
        data: data // This will be the complete response with pagination
      })
    } else {
      console.error('❌ API returned false status')
      return NextResponse.json(
        { error: 'Failed to fetch emails' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Error fetching emails:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 