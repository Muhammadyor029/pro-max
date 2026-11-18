class SecurityHeadersMiddleware:
    """Add security and CDN cache headers to every response."""

    CSP = (
        "default-src 'self'; "
        "base-uri 'self'; "
        "object-src 'none'; "
        "frame-ancestors 'none'; "
        "form-action 'self'; "
        "script-src 'self'; "
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        "font-src 'self' data: https://fonts.gstatic.com; "
        "img-src 'self' data: blob:; "
        "connect-src 'self'; "
        "media-src 'self' blob:; "
        "worker-src 'self' blob:; "
        "manifest-src 'self'"
    )
    PERMISSIONS_POLICY = (
        'camera=(), microphone=(), geolocation=(), payment=(), usb=(), '
        'magnetometer=(self), gyroscope=(self), accelerometer=(self), fullscreen=(self)'
    )
    ASSET_CACHE = 'public, max-age=31536000, immutable'

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response.headers.setdefault('Content-Security-Policy', self.CSP)
        response.headers.setdefault('Permissions-Policy', self.PERMISSIONS_POLICY)
        response.headers.setdefault('Cross-Origin-Resource-Policy', 'same-origin')
        response.headers.setdefault('X-Permitted-Cross-Domain-Policies', 'none')

        if request.path.startswith('/assets/'):
            response.headers['Cache-Control'] = self.ASSET_CACHE
            response.headers['CDN-Cache-Control'] = self.ASSET_CACHE
            response.headers['Cloudflare-CDN-Cache-Control'] = self.ASSET_CACHE

        return response
