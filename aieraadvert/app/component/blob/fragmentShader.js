const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 color = vec3(abs(vUv - 0.00000001) * 1.5 * (1.2 - distort), 1.0) * vec3(1.0, 0.922, 0.165);
    gl_FragColor = vec4(color, 1.0);
}

`;

export default fragmentShader;